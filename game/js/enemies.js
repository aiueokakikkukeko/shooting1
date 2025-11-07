export const enemies = [];
const SIZE = 26;
const enemyImage = new Image();
enemyImage.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjay3NTb3S9TNZPbUiI0g5Dw6HdDgMscBNGe_ZZC4jynJtwJoa3iltA1UbFAYeu17jDOI9D0xKYBEHr7YW1uIW1iiZHCKtxBlppk4hB8S1AmvPLrbgnc4MFzvxolgexLEjELfjHJLh19yRf/s400/ninja_makibishi.png";

function pushEnemies(canvas) {
  const w = SIZE;
  const h = SIZE;
  const x = Math.random() * (canvas.width - w);
  const y = 0;
  const vy = 5

  enemies.push({ x, y, width: w, height: h, vy });
}

export function spawnEnemy(canvas) {
 if (enemies.length < 10) {
    pushEnemies(canvas);
 }
}

export function updateEnemies(canvas) {
  for (let i = enemies.length - 1; i >= 0; i--) {
    const e = enemies[i];
    e.y += e.vy;
    if (e.y > canvas.height) {
      enemies.splice(i, 1);
    }
  }
}

export function drawEnemies(ctx) {
  ctx.fillStyle = "crimson";
  for (const e of enemies) {
        ctx.drawImage(enemyImage, e.x, e.y, e.width, e.height);
  }
}
        