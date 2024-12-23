<script>
	import { base } from '$app/paths';
	import './style.css'; // Импорт стилей отображения машины Атвуда

	import { onMount } from 'svelte';

	let mark_timer_pos = 0; // Позиция маркера на линейке для начала запуска таймера
	let mark_timer_pos_element = 140;
	let mark_offset = 0;

	// Function to handle click events on the ruler
	function handleRulerClick(event) {
		const ruler = event.target;
		const rect = ruler.getBoundingClientRect();
		mark_timer_pos = (event.clientY - mark_offset) / 20;
		mark_timer_pos_element = event.clientY;
		console.log(`Mark set at height: ${mark_timer_pos}px`);
		console.log(`Mark set at height pos: ${mark_timer_pos_element}px`);
	}

	onMount(() => {
    const carrotElement = document.querySelector('#carrot');
    if (carrotElement) {
      const rect = carrotElement.getBoundingClientRect();
      console.log(`Carrot position: x=${rect.x}, y=${rect.y}`);
	  mark_offset = rect.y + 66;
    }
  });


	let mass_block = 0.09; // Масса блоков
	let overload = 0.001; // Масса перегрузка
	let g = 9.81; // графиционная постоянная
	let acceleration = 0; // ускорение
	let isAnimating = false; // триггер для анимации

	let rodHeight = 0.3; // высота установки атвуда

	let k_pos = 145; // коэфициент для перевода системы движения используя пиксели
	let pos_left = 0; // Позиция левого блока
	let pos_right = 0; // Позиция правого блока с перегрузком
	let pos_init = 0;

	// Инициализация скоростей блока
	let velocity_left = 0.0;
	let velocity_right = 0.0;

	let previousTime = 0; // Сохраняем предыдущее состояние времени
	let dt = 0; // Изменение времени для обновления кадра (чтобы не быть привязанным к количеству обновления кадров в секунду)

	// let mark_timer_pos = 0.2 * 1000; // Позиция маркера на линейке для начала запуска таймера
	let timer = 0; // храним количество секунд таймера
	let isTimer = false; // триггер для изменения таймера

	resetAnimation(); // при первом запуске приложения сбрасываем позции

	// Функция для расчета физики объектов
	function calculatePhysics() {
		if (mass_block <= 0 || overload <= 0) return; // Проверяем на нулевое значение масс

		g = getErrorRateValue(g, 2);
		// Расчитываем ускорение блока используя второй закон Ньютона
		acceleration = (overload * g) / (2 * mass_block + overload);
	}

	let single_segment = 0.01; // Еденичный сегмент линейки
	let mark_segment = 0.05; // Сегмент линейки с отображением значения линейки

	// Функция начала анимации движения
	function startAnimation() {
		console.log("Start")
		resetAnimation(); // Сбрасываем позиции блоков
		isAnimating = true; // Отмечаем триггер анимации
		calculatePhysics(); // Расчитываем ускорение для блока

		previousTime = Date.now(); // Сохраняем текущее время в качестве предыдущего значения

		// Запускам цикл анимации
		// Для каждого кадра запускает ся функция `updatePositions`
		requestAnimationFrame(updatePositions);
	}


	// функция для добавления погрешности к значению
	// num - значение
	// rate - процент ошибки
	function getErrorRateValue(num, rate) {
		let errorAmountValue = num * (rate / 100); // вычисляем значение погрешности к числу
		let errorAmount = errorAmountValue + Math.random() * (errorAmountValue / 2);

		return num + (Math.random() < 0.5 ? -errorAmount : errorAmount); // Случайно либо прибавляем погрешность или вычитаем
	}

	// Функция для сброса всех значений на значения по умолчанию
	function resetAnimation() {
		isAnimating = false;
		isTimer = false;
		pos_left = pos_init * 2.5;
		pos_right = pos_init * 2.5
		velocity_left = 0;
		velocity_right = 0;
		acceleration = 0;
		timer = 0;
	}

	// Функция для обновления позиции и скоростей блоков
	function updatePositions() {
		if (!isAnimating) return; // Если анимация не запущена ничего не делаем

		// Высчитываем разнизу между предыдущим временим и текущем в дельту t
		// дельта t позволит нам быть не привязаным к количеству обновления кадров экрана
		const currentTime = Date.now();
		dt = (currentTime - previousTime) / 1000; // дельта t сохраняем в секундах
		previousTime = currentTime; // сохраняем новое предыдущее время

		// Обновляем скорость блоков используя ускорение
		velocity_left -= acceleration * dt; // Левый блок движется вверх
		velocity_right += acceleration * dt; // Правый блок движется вниз

		// Раситаем новую позицию
		// для расетов используем кинетическое уравнение
		// новая позиция = начальная позиция + скорость * время + 1/2 ускорения * время в квадрате
		// p(t) = p_0 + v * t + 1/2 * a * t^2
		// время в нашем случае это дельта t
		let pos_left_sum = velocity_left * dt + 0.5 * -acceleration * (dt * dt); // Изменеие позиции левого блока (он движется вверх и ускорение отрицательное)
		let pos_right_sum = velocity_right * dt + 0.5 * acceleration * (dt * dt); // Изменеие позиции правого блока

		// добавляем к текущей позиции изменения умноженые на коэфициент чтобы перевести систему расетов в пространсво пикселей
		pos_left += pos_left_sum * k_pos;
		pos_right += pos_right_sum * k_pos;

		// Проверяем не достиг ли блок конца установки
		// 75px это отступ сверху
		if (pos_right >= 75) {
			// Если достуг то отключаем тригеры анимации и таймера
			isAnimating = false;
			isTimer = false;
		}

		// Проверяем не достиг ли блок начала запуска таймера
		console.log(`check: ${(pos_right / 2.5)} -- ${mark_timer_pos}`)
		if ((pos_right / 2.5) >= mark_timer_pos) {
			// Если да то запускаем тригер таймера
			isTimer = true;
		}

		// Если таймер запущен то добавляем к нему изменения времени между кадрами
		if (isTimer) {
			timer += dt;
		}

		// Если анимация не закончилась то запускамем следущее обновление позиции
		if (isAnimating) {
			requestAnimationFrame(updatePositions);
		}
	}

	function addWeight() {
		editWight(0.001);
	}

	function remWeight() {
		editWight(-0.001);
	}

	function editWight(value) {
		if (value > 0 && (mass_block + overload) < 0.1) { overload += value}
		if (value < 0 && (mass_block + overload) > 0.091) { overload += value}
	}

	function addHeight() {
		editHeight(1);
	}

	function remHeight() {
		editHeight(-1);
	}

	function editHeight(value) {
		if (value > 0 && (pos_init) < 30) { pos_init += value}
		if (value < 0 && (pos_init) > 0) { pos_init += value}
		resetAnimation();
	}

</script>

<!-- HTML интерфейс -->

<body>
	<div class="container">
		<!-- Simulation Section -->
		<div class="simulation">
			<img src={`${base}/tower.png`} alt="Tower" class="tower" />
			<div>
				<img src={`${base}/bags.png`} alt="Bags" class="bags" />

				
				{#if isAnimating}
					<img src={`${base}/done2.png`} alt="Done" class="done" />
				{:else}
					<img src={`${base}/done.png`} alt="Done" class="done" />
				{/if}
			</div>
			<div on:click={handleRulerClick}>
				<img src={`${base}/image.png`} alt="Line" class="line" />
			  </div>
			<!-- <img src="/image.png" alt="Line" class="line" /> -->

			<img src={`${base}/rook.png`} alt="Carrot" class="rook" style="left: 20%; bottom: {5 + pos_right}%;" />
			<img src={`${base}/ground.png`} alt="Ground" class="ground" id="ground-1" style="bottom: {pos_right}%;" />

			<img src={`${base}/rook.png`} alt="Carrot" class="rook" id="carrot" style="right: {12 - overload * 250}%; width: {5 + overload * 250}%; top: {10 + pos_right}%;" />
			<img src={`${base}/ground.png`} alt="Ground" class="ground" id="ground-2" style="top: {15 + pos_right}%;" />
		</div>

		<!-- Controls Section -->
		<div class="controls">
			<div class="info">
				<label for="time-display">Время:</label>
				<span id="time-display">{timer.toFixed(3)} c.</span>
			</div>
			<div class="weight-adjuster">
				<label for="weight">Вес морковки:</label>
				<button on:click={remWeight} class="btn-weight">-</button>
				<span id="weight">{(mass_block + overload).toFixed(3)}</span>
				<button on:click={addWeight} class="btn-weight">+</button>
			</div>

			<div class="weight-adjuster">
				<label for="weight">Высота:</label>
				<button on:click={addHeight} class="btn-weight">-</button>
				<span id="weight">{(30 - pos_init).toFixed(1)}</span>
				<button on:click={remHeight} class="btn-weight">+</button>
			</div>
			
			<button class="btn" on:click={startAnimation}><img src={`${base}/start.png`} alt="Start Button" class="control-btn" /></button>
			<button class="btn" on:click={resetAnimation}><img src={`${base}/reset.png`} alt="Reset Button" class="control-btn" /></button>

		</div>

		<div style="position: absolute; left: 56%; top: {mark_timer_pos_element}px; background-color: #fff; width: 50px; height: 5px;"></div>
	</div>
</body>
