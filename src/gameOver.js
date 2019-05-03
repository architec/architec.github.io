import { objects, CANVAS_HEIGHT, CANVAS_WIDTH } from "/src/index";

export function gameOver(ctx) {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.fillStyle = "lime";
  if (objects[0].health === 0) {
    ctx.font = "30px Arial";
    ctx.fillText("Player 2 Wins", 90, 100);
  } else if (objects[1].health === 0) {
    ctx.font = "30px Arial";
    ctx.fillText("Player 1 Wins", 90, 100);
  }
}
