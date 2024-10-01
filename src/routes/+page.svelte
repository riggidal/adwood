<script>
	// Simulation Variables
	let mass1 = 0; // Mass of the left block
	let mass2 = 0; // Mass of the right block (without overload)
	let overload = 0; // Overload applied to the right block
	let g = 9.81; // Gravitational constant
	let acceleration = 0; // System's acceleration
	let tension = 0; // Tension in the rope
	let isAnimating = false; // Whether the animation is active

	// Configurable height of the rod and the pulley system
	let rodHeight = 200; // Default height of the rod (adjustable)

	// Initial positions of the blocks
	let pos1 = rodHeight; // Position of the left block (starts low)
	let pos2 = 0; // Position of the right block (starts at the top)

	// Initial velocities of the blocks
	let velocity1 = 0;
	let velocity2 = 0;

	// Time-related variables
	let previousTime = 0;
	let dt = 0; // Delta time for frame update

	// Function to calculate the acceleration and tension
	function calculatePhysics() {
		const totalMass1 = mass1; // Mass of the left block
		const totalMass2 = mass2 + overload; // Mass of the right block (including overload)

		if (totalMass1 <= 0 || totalMass2 <= 0) return; // Prevent invalid mass values

		// Calculate acceleration using Newton's second law of motion
		acceleration = ((totalMass2 - totalMass1) * g) / (totalMass1 + totalMass2);

		// Calculate the tension in the rope
		tension = (2 * totalMass1 * totalMass2 * g) / (totalMass1 + totalMass2);
	}

	// Function to start the animation
	function startAnimation() {
		isAnimating = true;
		calculatePhysics(); // Calculate the acceleration and tension

		// Save the current time to calculate delta time (dt) later
		previousTime = Date.now();

		// Start the animation loop
		requestAnimationFrame(updatePositions);
	}

	// Function to reset the animation to its initial state
	function resetAnimation() {
		isAnimating = false;
		pos1 = rodHeight; // Reset left block to the bottom
		pos2 = 0; // Reset right block to the top
		velocity1 = 0;
		velocity2 = 0;
	}

	// Function to update the positions and velocities of both blocks
	function updatePositions() {
		if (!isAnimating) return;

		// Calculate the time difference (dt) since the last frame
		const currentTime = Date.now();
		dt = (currentTime - previousTime) / 1000; // Delta time in seconds
		previousTime = currentTime;

		// Update velocities based on acceleration
		velocity1 -= acceleration * dt; // Left block moves upwards
		velocity2 += acceleration * dt; // Right block moves downwards

		// Update positions based on velocities
		pos1 += velocity1 * dt * 100; // Multiply by 100 to scale movement for visualization
		pos2 += velocity2 * dt * 100;

		// Check if the right block (with overload) hits the ground
		if (pos2 >= rodHeight) {
			// Assume the ground is at the rod height
			pos2 = rodHeight; // Snap to the ground
			pos1 = 0; // The left block will reach its topmost position
			isAnimating = false; // Stop the animation
		}

		// Continue the animation if it's still running
		if (isAnimating) {
			requestAnimationFrame(updatePositions);
		}
	}
</script>

<div class="container">
	<h1>Atwood's Machine with Overload</h1>

	<div class="atwood-machine" style="height: {rodHeight + 40}px;">
		<!-- Rod (top bar) -->
		<div class="rod"></div>

		<!-- Pulley (round circle) -->
		<div class="pulley"></div>

		<!-- Rope -->
		<div class="rope" style="left: 50px; height: {pos1 + 5}px;"></div>
		<div class="rope" style="left: 190px; height: {pos2 + 5}px;"></div>

		<!-- Mass 1 (left block) -->
		<div class="mass" style="top: {pos1}px; left: 50px;">{mass1}</div>

		<!-- Mass 2 (right block with overload) -->
		<div class="mass" style="top: {pos2}px; left: 190px;">{mass2 + overload}</div>
	</div>

	<div class="controls">
		<div class="input-field">
			<label
				>Mass 1 (kg):
				<input type="number" bind:value={mass1} min="0" step="0.1" placeholder="Enter Mass 1" />
			</label>
		</div>
		<div class="input-field">
			<label
				>Mass 2 (kg):
				<input type="number" bind:value={mass2} min="0" step="0.1" placeholder="Enter Mass 2" />
			</label>
		</div>
		<div class="input-field">
			<label
				>Overload (kg):
				<input
					type="number"
					bind:value={overload}
					min="0"
					step="0.1"
					placeholder="Enter Overload"
				/>
			</label>
		</div>
		<div class="input-field">
			<label
				>Rod Height (px):
				<input
					type="number"
					bind:value={rodHeight}
					min="50"
					step="10"
					placeholder="Enter Rod Height"
				/>
			</label>
		</div>
		<div>
			<button on:click={startAnimation}>Start Simulation</button>
			<button on:click={resetAnimation}>Reset</button>
		</div>
	</div>
</div>

<style>
	.container {
		max-width: 800px;
		margin: auto;
		background: white;
		border-radius: 8px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		padding: 20px;
	}

	.atwood-machine {
		position: relative;
		width: 100%;
		height: 300px;
		border: 1px solid #444;
		border-radius: 8px;
		background: #e9ecef;
		margin-bottom: 20px;
		overflow: hidden;
	}

	.mass {
		position: absolute;
		width: 40px;
		height: 40px;
		background-color: #ff4757;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 4px;
		font-weight: bold;
		color: white;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
	}

	.rope {
		position: absolute;
		width: 2px;
		background-color: #333;
		top: 10px;
	}

	.pulley {
		position: absolute;
		top: 5px;
		left: 120px;
		width: 60px;
		height: 60px;
		border: 5px solid #333;
		border-radius: 50%;
		background-color: #ddd;
		z-index: 1;
	}

	.rod {
		position: absolute;
		top: 5px;
		left: 0;
		width: 100%;
		height: 5px;
		background-color: #333;
	}

	.controls {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.input-field {
		display: flex;
		flex-direction: column;
	}

	.input-field label {
		margin-bottom: 5px;
		font-weight: bold;
		color: #555;
	}

	.input-field input {
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 16px;
	}

	button {
		padding: 10px;
		border: none;
		border-radius: 4px;
		background-color: #4caf50;
		color: white;
		font-size: 16px;
		cursor: pointer;
		transition: background-color 0.3s;
	}

	button:hover {
		background-color: #45a049;
	}
</style>
