<script>
    import { onMount } from 'svelte';

    // Переменные для масс и высоты
    let mass1 = 0;
    let mass2 = 0;
    let overload = 0;
    let rodHeight = 200; // Высота блока
    let g = 9.81; // Ускорение свободного падения
    let acceleration = 0;
    let tension = 0;
    let isAnimating = false;

    // Позиции масс
    let pos1 = 100; // Начальная позиция первого груза
    let pos2 = 100; // Начальная позиция второго груза

    // Данные для таблицы
    let results = [];

    // Функция для расчета физических величин
    function calculatePhysics() {
        if (mass1 <= 0 || mass2 <= 0) return;

        const totalWeight = mass1 + mass2 + overload;
        acceleration = ((mass1 - mass2) * g) / totalWeight; 
        tension = (2 * mass1 * mass2 * g) / (mass1 + mass2 + overload); 
    }

    // Функция для запуска анимации
    function startAnimation() {
        isAnimating = true;
        calculatePhysics();
        
        const updatePosition = () => {
            if (isAnimating) {
                pos1 += acceleration * 10; 
                pos2 -= acceleration * 10; 

                if (pos1 < 0 || pos2 < 0) {
                    isAnimating = false;
                } else {
                    requestAnimationFrame(updatePosition);
                }
            }
        };
        updatePosition();

        updateResults();
    }

    // Функция для сброса анимации
    function resetAnimation() {
        isAnimating = false;
        pos1 = 100;
        pos2 = 100;
    }

    // Функция для обновления результатов
    function updateResults() {
        results.push({
            mass1,
            mass2,
            overload,
            rodHeight,
            acceleration: acceleration.toFixed(2),
            tension: tension.toFixed(2),
        });
    }
</script>

<style>
    body {
        font-family: 'Arial', sans-serif;
        background-color: #f4f4f9;
        margin: 0;
        padding: 20px;
    }

    .container {
        max-width: 800px;
        margin: auto;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        padding: 20px;
    }

    h1 {
        text-align: center;
        color: #333;
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
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #ff4757;
        transition: top 0.1s ease;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
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
        background-color: #4CAF50;
        color: white;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.3s;
    }
    button:hover {
        background-color: #45a049;
    }
    .results-table {
        margin-top: 20px;
        border-collapse: collapse;
        width: 100%;
        background-color: #f9f9f9;
    }
    .results-table th, .results-table td {
        border: 1px solid #ccc;
        padding: 8px;
        text-align: center;
    }
    .results-table th {
        background-color: #f1f1f1;
        color: #333;
        font-weight: bold;
    }
</style>

<div class="container">
    <h1>Атвудова Машина</h1>
    
    <div class="atwood-machine">
        <div class="mass" style="top: {pos1}px; left: 50px;"></div>
        <div class="mass" style="top: {pos2}px; left: 150px;"></div>
    </div>

    <div class="controls">
        <div class="input-field">
            <label>Mass 1 (kg):
                <input type="number" bind:value={mass1} min="0" step="0.1" placeholder="Введите массу 1" />
            </label>
        </div>
        <div class="input-field">
            <label>Mass 2 (kg):
                <input type="number" bind:value={mass2} min="0" step="0.1" placeholder="Введите массу 2" />
            </label>
        </div>
        <div class="input-field">
            <label>Overload (kg):
                <input type="number" bind:value={overload} min="0" step="0.1" placeholder="Введите перегрузку" />
            </label>
        </div>
        <div class="input-field">
            <label>Rod Height (cm):
                <input type="number" bind:value={rodHeight} min="0" step="1" placeholder="Введите высоту блока" />
            </label>
        </div>
        <div>
            <button on:click={startAnimation}>Запуск</button>
            <button on:click={resetAnimation}>Сброс</button>
        </div>
    </div>

    {#if results.length > 0}
        <table class="results-table">
            <thead>
                <tr>
                    <th>Mass 1</th>
                    <th>Mass 2</th>
                    <th>Overload</th>
                    <th>Rod Height</th>
                    <th>Acceleration</th>
                    <th>Tension</th>
                </tr>
            </thead>
            <tbody>
                {#each results as result}
                    <tr>
                        <td>{result.mass1}</td>
                        <td>{result.mass2}</td>
                        <td>{result.overload}</td>
                        <td>{result.rodHeight}</td>
                        <td>{result.acceleration}</td>
                        <td>{result.tension}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    {/if}
</div>
