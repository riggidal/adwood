<script>
	import './style.css';

	let mass_block = 0.09; // Mass of the block
	let overload = 0.001; // Overload applied to the right block
	let g = 9.81; // Gravitational constant
	let acceleration = 0; // System's acceleration
	let isAnimating = false; // Whether the animation is active

	// Configurable height of the rod and the pulley system
	let rodHeight = 0.4; // Default height of the rod (adjustable)

	let k_pos = 635;
	// Initial positions of the blocks (assuming middle position is 100)
	let pos_left = rodHeight * 10000 + 40; // Position of the left block (mass1)
	let pos_right = 40; // Position of the right block (mass2 + overload)

	// Initial velocities of the blocks
	let velocity_left = 0.0;
	let velocity_right = 0.0;

	// Time-related variables
	let previousTime = 0;
	let dt = 0; // Delta time for frame update

	let mark_timer_pos = 0.2 * 1000;
	let timer = 0;
	let isTimer = false;
	resetAnimation();
	// Function to calculate the acceleration and tension
	function calculatePhysics() {
		if (mass_block <= 0 || overload <= 0) return; // Prevent invalid mass values

		// Calculate acceleration using Newton's second law of motion
		acceleration = (overload * g) / (2 * mass_block + overload);
	}

	let single_segment = 0.01;
	let mark_segment = 0.05;
	// Function to start the animation
	function startAnimation() {
		resetAnimation();
		isAnimating = true;
		calculatePhysics(); // Calculate the acceleration and tension

		// Save the current time to calculate delta time (dt) later
		previousTime = Date.now();

		// Start the animation loop
		requestAnimationFrame(updatePositions);
	}

	function getRodHeightNormalize() {
		return rodHeight * 1000 + 105;
	}

	// Function to reset the animation to its initial state
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

	function handleClick(event) {
		const element = event.currentTarget; // Get the clicked element
		const rect = element.getBoundingClientRect(); // Get its position

		// Update the position state
		mark_timer_pos = rect.top - 75;
	}
	// Function to update the positions and velocities of both blocks
	function updatePositions() {
		if (!isAnimating) return;

		// Calculate the time difference (dt) since the last frame
		const currentTime = Date.now();
		dt = (currentTime - previousTime) / 1000; // Delta time in seconds
		previousTime = currentTime;

		// Update velocities based on acceleration
		velocity_left -= acceleration * dt; // Left block moves upwards
		velocity_right += acceleration * dt; // Right block moves downwards

		// Update positions based on velocities
		let pos_left_sum = velocity_left * dt + 0.5 * -acceleration * (dt * dt); // Left block position update
		let pos_right_sum = velocity_right * dt + 0.5 * acceleration * (dt * dt); // Right block position update

		pos_left += pos_left_sum * k_pos;
		pos_right += pos_right_sum * k_pos;

		// Check if the right block (with overload) hits the ground
		if (pos_right >= getRodHeightNormalize() + 50) {
			isAnimating = false; // Stop the animation
			isTimer = false;
		}

		if (pos_right - 40 >= mark_timer_pos) {
			isTimer = true;
		}
		if (isTimer) {
			timer += dt;
		}

		// Continue the animation if it's still running
		if (isAnimating) {
			requestAnimationFrame(updatePositions);
		}
	}
</script>

<div class="container">
	<div class="atwood-machine" style="height: {rodHeight * 1000 + 255}px;">
		<!-- Rod (top bar) -->
		<div class="rod"></div>
		<div class="timer">{timer.toFixed(2)} c</div>

		<!-- Pulley (round circle) -->
		<div class="pulley"></div>

		<!-- Rope -->
		<div class="rope" style="left: 120px; height: {pos_left + 5}px;"></div>
		<div class="rope" style="left: 175px; height: {pos_right + 5}px;"></div>

		<!-- Mass 1 (left block) -->
		<div class="mass" style="top: {pos_left}px; left: 102px;">{mass_block.toFixed(3)}</div>

		<!-- Mass 2 (right block with overload) -->
		<div
			class="mass overload"
			style="height: {overload * 2000}px; top: {isTimer
				? mark_timer_pos - overload * 2000 + 40
				: pos_right - overload * 2000}px; left: 158px;"
		>
			{overload.toFixed(3)}
		</div>
		<div class="mass" style="top: {pos_right}px; left: 158px;">
			{(mass_block + overload).toFixed(3)}
		</div>

		<div style="top: {mark_timer_pos + 37}px;" class="mark_position_stop_overload"></div>

		<!-- Ruler on the side of the Atwood machine -->
		<div class="ruler" style="height: {rodHeight * 1000 + 120}px;">
			<!-- Create markers and labels for the ruler based on rodHeight -->
			{#each Array(rodHeight / single_segment + 1) as _, i}
				<div>
					<div class="text-dash" on:click={handleClick}>
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

	<div class="controls">
		<div class="input-field">
			<label>
				Mass block (kg):
				<input
					type="number"
					bind:value={mass_block}
					min="0.01"
					max="1"
					step="0.01"
					placeholder="Enter Mass Block"
				/>
			</label>
		</div>
		<div class="input-field">
			<label
				>Overload (kg):
				<input
					type="number"
					bind:value={overload}
					on:change={resetAnimation}
					min="0.001"
					max="0.02"
					step="0.001"
					placeholder="Enter Overload"
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
					placeholder="Высота установки"
				/>
			</label>
		</div>
		<div>
			<button on:click={startAnimation}>Start Simulation</button>
			<button on:click={resetAnimation}>Reset</button>
		</div>
	</div>
</div>
