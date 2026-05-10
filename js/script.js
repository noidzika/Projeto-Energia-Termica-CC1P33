// Navegação entre seções
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Modal de informações
function toggleInfo() {
    const modal = document.getElementById('infoModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

// Ir para simulador com experimento específico
function goToSimulator(experimentId) {
    showSection('simulador');
    setTimeout(() => showExperiment(experimentId), 300);
}

// Simuladores dos experimentos
let currentExperiment = 1;

function showExperiment(id) {
    currentExperiment = id;
    const content = document.getElementById('simulator-content');
    
    const simulators = {
        1: `
            <div class="simulator">
                <h3>🧪 Experimento 1: Água Quente vs Fria</h3>
                <canvas id="canvas1" class="simulator-canvas" width="500" height="300"></canvas>
                <div class="controls">
                    <label>T1 (°C): <input type="range" id="temp1" min="0" max="100" value="80"></label>
                    <label>T2 (°C): <input type="range" id="temp2" min="0" max="100" value="20"></label>
                    <button class="btn" onclick="mixTemps(1)">🔄 Misturar</button>
                </div>
                <div class="temperature" id="result1">Resultado: --°C</div>
            </div>
        `,
        2: `
            <div class="simulator">
                <h3>🔩 Experimento 2: Metal Quente na Água</h3>
                <canvas id="canvas2" class="simulator-canvas" width="500" height="300"></canvas>
                <div class="controls">
                    <label>Metal (°C): <input type="range" id="metalTemp" min="20" max="200" value="100"></label>
                    <label>Água (°C): <input type="range" id="waterTemp2" min="10" max="30" value="20"></label>
                    <button class="btn" onclick="metalWaterMix(2)">🔄 Transferir Calor</button>
                </div>
                <div class="temperature" id="result2">Resultado: --°C</div>
            </div>
        `,
        3: `
            <div class="simulator">
                <h3>🧊 Experimento 3: Gelo Derretendo</h3>
                <canvas id="canvas3" class="simulator-canvas" width="500" height="300"></canvas>
                <div class="controls">
                    <label>Calor (J): <input type="range" id="heatInput" min="0" max="50000" value="25000"></label>
                    <button class="btn" onclick="meltIce(3)">🔥 Aplicar Calor</button>
                </div>
                <div class="temperature" id="result3">Gelo: 0°C</div>
            </div>
        `,
        4: `
            <div class="simulator">
                <h3>💧 Experimento 4: Dilatação da Água</h3>
                <canvas id="canvas4" class="simulator-canvas" width="500" height="300"></canvas>
                <div class="controls">
                    <label>Temperatura (°C): <input type="range" id="dilateTemp" min="0" max="100" value="20"></label>
                    <button class="btn" onclick="dilateWater(4)">📏 Medir Dilatação</button>
                </div>
                <div class="temperature" id="result4">Volume: -- ml</div>
            </div>
        `,
        5: `
            <div class="simulator">
                <h3>🏠 Experimento 5: Isolamento Térmico</h3>
                <canvas id="canvas5" class="simulator-canvas" width="500" height="300"></canvas>
                <div class="controls">
                    <label>Tempo (min): <input type="range" id="timeInsul" min="0" max="30" value="0"></label>
                    <label>Isolado: <input type="checkbox" id="insulated"></label>
                    <button class="btn" onclick="isolationTest(5)">⏱️ Simular</button>
                </div>
                <div class="temperature" id="result5">--°C</div>
            </div>
        `
    };
    
    content.innerHTML = simulators[id];
    initCanvas(id);
}

// Funções dos simuladores
function mixTemps(canvasId) {
    const t1 = parseFloat(document.getElementById('temp1').value);
    const t2 = parseFloat(document.getElementById('temp2').value);
    const result = (t1 + t2) / 2;
    document.getElementById('result1').textContent = `Resultado: ${result.toFixed(1)}°C`;
    animateCanvas(canvasId);
}

function metalWaterMix(canvasId) {
    const metalT = parseFloat(document.getElementById('metalTemp').value);
    const waterT = parseFloat(document.getElementById('waterTemp2').value);
    const result = (metalT * 0.1 + waterT * 1) / 1.1;
    document.getElementById('result2').textContent = `Água final: ${result.toFixed(1)}°C`;
    animateCanvas(canvasId);
}

function meltIce(canvasId) {
    const heat = parseFloat(document.getElementById('heatInput').value);
    const melted = Math.min(heat / 334, 100);
    document.getElementById('result3').textContent = `Gelo derretido: ${melted.toFixed(1)}g`;
    animateCanvas(canvasId);
}

function dilateWater(canvasId) {
    const temp = parseFloat(document.getElementById('dilateTemp').value);
    const volume = 100 * (1 + 0.00021 * (temp - 20));
    document.getElementById('result4').textContent = `Volume: ${volume.toFixed(2)} ml`;
    animateCanvas(canvasId);
}

function isolationTest(canvasId) {
    const time = parseFloat(document.getElementById('timeInsul').value);
    const insulated = document.getElementById('insulated').checked;
    const initialTemp = 80;
    const lossRate = insulated ? 0.2 : 2.0;
    const finalTemp = initialTemp - (time * lossRate);
    document.getElementById('result5').textContent = `${insulated ? 'Isolado' : 'Normal'}: ${finalTemp.toFixed(1)}°C`;
    animateCanvas(canvasId);
}

function initCanvas(id) {
    const canvas = document.getElementById(`canvas${id}`);
    if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#e9ecef';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#003c81';
        ctx.fillRect(50, 50, 100, 200);
        ctx.fillStyle = '#ff0000';
        ctx.fillRect(350, 100, 100, 150);
    }
}

function animateCanvas(id) {
    const canvas = document.getElementById(`canvas${id}`);
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let frame = 0;
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = `hsl(${frame * 2}, 70%, 60%)`;
            ctx.fillRect(50 + Math.sin(frame * 0.1) * 20, 50 + Math.cos(frame * 0.1) * 20, 400, 200);
            frame++;
            if (frame < 50) requestAnimationFrame(animate);
        }
        animate();
    }
}

// Inicializar primeiro simulador
document.addEventListener('DOMContentLoaded', function() {
    showExperiment(1);
});