<script>
	// import './style.css'; // Импорт стилей отображения машины Атвуда

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

<style>
	body {
		margin: 0;
		padding: 0;
		background: url('/bg.jpg') no-repeat center center fixed;
		background-size: cover;
		font-family: Arial, sans-serif;
		color: #333;
	}

	.container {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		padding: 20px;
		height: 100vh;
	}

	.simulation {
		position: relative;
		flex: 2;
		border: 1px solid #ccc;
		border-radius: 10px;
		background-color: rgba(255, 255, 255, 0);
		padding: 10px;
		height: calc(100% - 40px);
	}

	.controls {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 1%;
		padding: 2%;
		background: rgba(255, 255, 255, 0);
		border-radius: 10px;
	}

	.controls img {
		width: 75%;
		cursor: pointer;
	}

	img.tower {
		position: absolute;
		top: 60%;
		left: 50%;
		transform: translate(-50%, -50%);
		height: 75%;
	}

	img.bags {
		position: absolute;
		top: 4%;
		left: 50%;
		transform: translateX(-50%);
		height: 30%;
	}

	img.ground {
		position: absolute;
		bottom: 0;
		height: 6%;
		width: 15%;
	}

	#ground-1 {
		left: 12%;
	}

	#ground-2 {
		left: 75%;
	}

	img.line {
		position: absolute;
		right: 0;
		top: 25%;
		width: 5%;
		height: 75%;
		cursor: pointer;
	}

	img.rook {
		position: absolute;
		transform: translate(-50%, -50%);
		width: 5%;
		max-width: 50px;
	}

	img.done {
		position: absolute;
		top: 25%;
		left: 50%;
		transform: translateX(-50%);
		height: 10%;
	}
</style>

<body>
	<div class="container">
		<!-- Simulation Section -->
		<div class="simulation">
			<img src="/tower.png" alt="Tower" class="tower" />
			<div>
				<img src="/bags.png" alt="Bags" class="bags" />
				<img src="/done.png" alt="Done" class="done" />
			</div>
			<img src="/line.jpg" alt="Line" class="line" />
			<img src="/rook.png" alt="Carrot" class="rook" style="left: 20%; bottom: 5%;" />
			<img src="/ground.png" alt="Ground" class="ground" id="ground-1" style="bottom: 0%;" />
			<img src="/rook.png" alt="Carrot" class="rook" style="right: 12%; top: 10%;" />
			<img src="/ground.png" alt="Ground" class="ground" id="ground-2" style="top: 15%;" />
		</div>

		<!-- Controls Section -->
		<div class="controls">
			<img src="/start.png" alt="Start Button" class="control-btn" />
			<img src="/reset.png" alt="Reset Button" class="control-btn" />
		</div>
	</div>
</body>