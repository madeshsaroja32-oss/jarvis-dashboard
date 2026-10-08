// Demo mode — no backend. Waveform animates, stats are static.

const canvas = document.getElementById("wave");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

let t = 0;

function drawWave() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "#00e5ff";
  ctx.lineWidth = 2;
  ctx.shadowBlur = 15;
  ctx.shadowColor = "#00e5ff";
  ctx.beginPath();

  const amp = 22;
  for (let x = 0; x < canvas.width; x++) {
    const y = canvas.height / 2
      + Math.sin((x + t) * 0.05) * amp
      * Math.sin((x + t) * 0.012);
    x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.stroke();
  t += 3;
  requestAnimationFrame(drawWave);
}
drawWave();