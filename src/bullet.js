import { detectCollision } from "/src/detectCollision.js";
export default class Bullet {
  constructor(faceDir, x, y, player, obs) {
    this.obs = obs;
    this.player = player;
    this.faceDir = faceDir;
    this.position = {
      x: x,
      y: y
    };
    this.speed = 3;
    this.isVisible = true;
  }

  draw(ctx) {
    if (this.isVisible) {
      ctx.fillStyle = "#FFA500";
      ctx.fillRect(this.position.x, this.position.y, 5, 5);
    }
  }

  update(deltaTime) {
    if (detectCollision(this)) {
    } else if (this.faceDir === "RIGHT") {
      this.position.x += this.speed;
    } else if (this.faceDir === "LEFT") {
      this.position.x -= this.speed;
    } else if (this.faceDir === "UP") {
      this.position.y -= this.speed;
    } else if (this.faceDir === "DOWN") {
      this.position.y += this.speed;
    }
  }
}
