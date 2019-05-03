import Tank from "/src/tank";
import InputHandlerP1 from "/src/inputP1";
import InputHandlerP2 from "/src/inputP2";
import { gameOver } from "/src/gameOver";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

export const CANVAS_WIDTH = 350;
export const CANVAS_HEIGHT = 350;

let objects = [];

let tank = new Tank(CANVAS_WIDTH, CANVAS_HEIGHT, objects);
new InputHandlerP1(tank);

let tank2 = new Tank(CANVAS_WIDTH, CANVAS_HEIGHT, objects);
new InputHandlerP2(tank2);
tank2.player = 2;
tank2.color = "red";
tank2.position.y = CANVAS_HEIGHT / 4;
tank2.faceDir = "DOWN";

objects.push(tank);
objects.push(tank2);

//objects.push(new Bullet("UP", 0, 100));

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  /*tank.update(deltaTime);
  tank.draw(ctx);

  tank2.update(deltaTime);
  tank2.draw(ctx);*/

  if (tank.health === 0 || tank2.health === 0) {
    gameOver(ctx);
  } else {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    objects.forEach(ob => ob.update(deltaTime));
    objects.forEach(ob => ob.draw(ctx));
  }
  document.getElementById("p1Health").innerHTML =
    "Player1 Health = " + tank.health;
  document.getElementById("p2Health").innerHTML =
    "Player2 Health = " + tank2.health;

  requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);

export { objects };
