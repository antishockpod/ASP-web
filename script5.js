const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const wave = {
    y: canvas.height / 2,
    length: 0.01,
    amplitude: 100,
    frequency: 0.01
};

const tetrapods = [];
const tetrapodCount = 6;

for (let i = 0; i < tetrapodCount; i++) {
    tetrapods.push({
        x: i * 150 + canvas.width / 4,
        y: canvas.height / 1.5,
        width: 30,
        height: 30
    });
}

let increment = 0;

function drawWave() {
    ctx.beginPath();
    ctx.moveTo(0, canvas.height);

    for (let i = 0; i < canvas.width; i++) {
        ctx.lineTo(i, wave.y + Math.sin(i * wave.length + increment) * wave.amplitude);
    }

    ctx.lineTo(canvas.width, canvas.height);
    ctx.fillStyle = '#1E90FF';
    ctx.fill();
    ctx.closePath();

    increment += wave.frequency;
}

function drawTetrapod(tetrapod) {
    ctx.fillStyle = '#696969';
    ctx.beginPath();
    ctx.moveTo(tetrapod.x, tetrapod.y);
    ctx.lineTo(tetrapod.x - tetrapod.width, tetrapod.y + tetrapod.height);
    ctx.lineTo(tetrapod.x + tetrapod.width, tetrapod.y + tetrapod.height);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(tetrapod.x, tetrapod.y - tetrapod.height);
    ctx.lineTo(tetrapod.x - tetrapod.width, tetrapod.y);
    ctx.lineTo(tetrapod.x + tetrapod.width, tetrapod.y);
    ctx.closePath();
    ctx.fill();
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawWave();
    tetrapods.forEach(drawTetrapod);
    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    wave.y = canvas.height / 2;
});

animate();