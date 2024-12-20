<script>
	import './style.css'; // Импорт стилей отображения машины Атвуда

	let mass_block = 0.09; // Масса блоков
	let overload = 0.001; // Масса перегрузка
	let g = 9.81; // графиционная постоянная
	let acceleration = 0; // ускорение
	let isAnimating = false; // триггер для анимации

	let rodHeight = 0.4; // высота установки атвуда

	let k_pos = 550; // коэфициент для перевода системы движения используя пиксели
	let pos_left = 0; // Позиция левого блока
	let pos_right = 0; // Позиция правого блока с перегрузком

	// Инициализация скоростей блока
	let velocity_left = 0.0;
	let velocity_right = 0.0;

	let previousTime = 0; // Сохраняем предыдущее состояние времени
	let dt = 0; // Изменение времени для обновления кадра (чтобы не быть привязанным к количеству обновления кадров в секунду)

	let mark_timer_pos = 0.2 * 1000; // Позиция маркера на линейке для начала запуска таймера
	let timer = 0; // храним количество секунд таймера
	let isTimer = false; // триггер для изменения таймера

	resetAnimation(); // при первом запуске приложения сбрасываем позции

	// Функция для расчета физики объектов
	function calculatePhysics() {
		if (mass_block <= 0 || overload <= 0) return; // Проверяем на нулевое значение масс

		// Расчитываем ускорение блока используя второй закон Ньютона
		acceleration = (overload * g) / (2 * mass_block + overload);
	}

	let single_segment = 0.01; // Еденичный сегмент линейки
	let mark_segment = 0.05; // Сегмент линейки с отображением значения линейки

	// Функция начала анимации движения
	function startAnimation() {
		resetAnimation(); // Сбрасываем позиции блоков
		isAnimating = true; // Отмечаем триггер анимации
		calculatePhysics(); // Расчитываем ускорение для блока

		previousTime = Date.now(); // Сохраняем текущее время в качестве предыдущего значения

		// Запускам цикл анимации
		// Для каждого кадра запускает ся функция `updatePositions`
		requestAnimationFrame(updatePositions);
	}

	// Переводим высоту установки из метров в удобное пиксельное значение
	function getRodHeightNormalize() {
		return rodHeight * 1000 + 105;
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
		pos_left = getRodHeightNormalize() + 50;
		pos_right = 65 + overload * 2000;
		velocity_left = 0;
		velocity_right = 0;
		acceleration = 0;
		timer = 0;
	}

	// Функция для обработки нажатия на линейку
	function handleClick(event) {
		const element = event.currentTarget; // Получаем элемент на который нажали
		const rect = element.getBoundingClientRect(); // Получаем его позицию

		// Обновляем позицию маркера для запуска таймера (50 px это отступ сверху)
		mark_timer_pos = rect.top - 50;
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
		// 50px это отступ сверху
		if (pos_right >= getRodHeightNormalize() + 50) {
			// Если достуг то отключаем тригеры анимации и таймера
			isAnimating = false;
			isTimer = false;

			timer = getErrorRateValue(timer, 2); // время с погрешностью 2%
		}

		// Проверяем не достиг ли блок начала запуска таймера
		if (pos_right - 40 >= mark_timer_pos) {
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
</script>

<!-- HTML интерфейс -->
<div class="container">
	<div class="atwood-machine" style="height: {rodHeight * 1000 + 255}px;">
		<!-- Установка -->
		<div class="rod"></div>
		<!-- Положение таймера  -->
		<div class="timer">{timer.toFixed(2)} c</div>

		<!-- Шкив -->
		<div class="pulley"></div>

		<!-- Веревка связывающие 2 блока -->
		<!-- Автоматически изменяют свои размеры как будто они связаны с блоками -->
		<div class="rope" style="left: 120px; height: {pos_left + 5}px;"></div>
		<div class="rope" style="left: 175px; height: {pos_right + 5}px;"></div>

		<!-- Первый блок -->
		<!-- Изменияем позицию при перемещении -->
		<div class="mass" style="top: {pos_left}px; left: 102px;">{mass_block.toFixed(3)}</div>

		<!-- Перегрузок -->
		<!-- При достижении позиции начало таймера перегрузок останавливается -->
		<div
			class="mass overload"
			style="height: {overload * 2000}px; top: {isTimer
				? mark_timer_pos - overload * 2000 + 40
				: pos_right - overload * 2000}px; left: 158px;"
		>
			{overload.toFixed(3)}
		</div>

		<!-- Второй блок -->
		<!-- Изменияем позицию при перемещении -->
		<div class="mass" style="top: {pos_right}px; left: 158px;">
			{(mass_block + overload).toFixed(3)}
		</div>

		<!-- Объект пометка для начала отсчета таймера -->
		<div style="top: {mark_timer_pos + 37}px;" class="mark_position_stop_overload"></div>

		<!-- Линейка справа от установки -->
		<!-- Автоматически изменят свою высоту подстраиваясь под установку -->
		<div class="ruler" style="height: {rodHeight * 1000 + 120}px;">
			<!-- Добавляем элементы и надписи для линейки -->
			<!-- Для этого мы проходим циклом -->
			<!-- Количесвво элементов линейки мы считаем по формулу: высота установки / самый маленькая единица линейки -->
			{#each Array(rodHeight / single_segment + 1) as _, i}
				<div>
					<!-- При нажатии на элемент линейки мы вызываем обработчик для обновлении позиции начала таймера -->
					<div class="text-dash" on:click={handleClick}>
						<!-- Если у нас текущий элемент списка делится без остатка на единицу для отображения метки  -->
						<!-- то создаем элемент с надписью текущий высоты линеки -->
						<!-- если делится с остатком то создаем просто пометку линейки -->
						{#if i % (rodHeight / single_segment / (rodHeight / mark_segment)) === 0}
							{(
								(i / (rodHeight / single_segment / (rodHeight / mark_segment))) *
								mark_segment
							).toFixed(2)}
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Элементы для параметризации установки -->
	<div class="controls">
		<div class="input-field">
			<label>
				Масса блоков (кг):
				<input
					type="number"
					bind:value={mass_block}
					min="0.01"
					max="1"
					step="0.01"
					placeholder="Введите массу блоков (минимум 0.01 и максимум 1)"
				/>
			</label>
		</div>
		<div class="input-field">
			<label
				>Масса перегрузка (кг):
				<input
					type="number"
					bind:value={overload}
					on:change={resetAnimation}
					min="0.001"
					max="0.02"
					step="0.001"
					placeholder="Введите массу перегрузка (минимум 0.001 и максимум 0.02)"
				/>
			</label>
		</div>
		<div class="input-field">
			<label
				>Высота (м):
				<input
					type="number"
					bind:value={rodHeight}
					min="0.4"
					on:change={resetAnimation}
					step="0.01"
					placeholder="Введите высоту установки"
				/>
			</label>
		</div>
		<div>
			<!-- Кнопки для запуска и сброса установки -->
			<button on:click={startAnimation}>Начать симуляцию</button>
			<button on:click={resetAnimation}>Сбросить</button>
		</div>
	</div>
</div>
