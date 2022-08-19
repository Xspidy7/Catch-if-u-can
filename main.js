var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var rad = 50;
var score = 0;
draw_circle();

function clear_screen() {
  ctx.clearRect(0, 0, c.width, c.height);
}
function draw_circle() {
  clear_screen();
  x_cor = 5 + Math.random() * 1700;
  y_cor = 5 + Math.random() * 690;

  ctx.beginPath();
  for (let i = 0; i < rad / 25; i++)
    ctx.arc(x_cor, y_cor, i * 5, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();
}

c.addEventListener("click", logKey);
function logKey(e) {
  var x = e.offsetX;
  var y = e.offsetY;
  if (distance(x, y, x_cor, y_cor) <= rad) {
    score += 100;
    draw_circle();
  } else {
    game_over(true);
  }
  document.getElementById("score").innerHTML = "SCORE : " + score;
}

function distance(x, y, x1, y1) {
  return ((x - x1) ** 2 + (y - y1) ** 2) ** 0.5;
}
function game_over(check) {
 alert(`GAME OVER,YOUR SCORE IS ${score}`);
  score = 0;
}