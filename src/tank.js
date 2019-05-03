
const DIRECTION = {
  UP: "UP",
  DOWN: "DOWN",
  RIGHT: "RIGHT",
  LEFT: "LEFT"
};

class Tank {
  constructor(canvasWidth, canvasHeight, obs, player) {
    this.health = 10;
    this.color = "blue";
    this.player = 1;
    this.obs = obs;

    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;

    this.faceDir = DIRECTION.UP;
    this.tankBody = {
      width: 30,
      height: 30
    };
    this.tankWeapon = {
      width: 5,
      length: 10
    };
    this.position = {
      x: canvasWidth / 2 - this.tankBody.width / 2,
      y: (canvasHeight / 4) * 3
    };

    this.maxSpeed = 7;
    this.speed = 0;
  }

  draw(ctx) {
    if (this.color === "blue") {
      ctx.fillStyle = "#00BFFF";
    } else {
      ctx.fillStyle = "#DC143C";
    }
    ctx.fillRect(
      this.position.x,
      this.position.y,
      this.tankBody.width,
      this.tankBody.height
    );
    if (this.faceDir === DIRECTION.DOWN) {
      ctx.fillRect(
        this.position.x + this.tankBody.width / 2 - this.tankWeapon.width / 2,
        this.position.y + this.tankBody.height,
        this.tankWeapon.width,
        this.tankWeapon.length
      );
    } else if (this.faceDir === DIRECTION.UP) {
      ctx.fillRect(
        this.position.x + this.tankBody.width / 2 - this.tankWeapon.width / 2,
        this.position.y - this.tankWeapon.length,
        this.tankWeapon.width,
        this.tankWeapon.length
      );
    } else if (this.faceDir === DIRECTION.LEFT) {
      ctx.fillRect(
        this.position.x - this.tankWeapon.length,
        this.position.y + this.tankBody.width / 2 - this.tankWeapon.width / 2,
        this.tankWeapon.length,
        this.tankWeapon.width
      );
    } else if (this.faceDir === DIRECTION.RIGHT) {
      ctx.fillRect(
        this.position.x + this.tankBody.height,
        this.position.y + this.tankBody.width / 2 - this.tankWeapon.width / 2,
        this.tankWeapon.length,
        this.tankWeapon.width
      );
    }
  }

  moveLeft() {
    this.speed = this.maxSpeed;
    this.position.x -= this.speed;
    this.faceDir = DIRECTION.LEFT;
  }

  moveRight() {
    this.speed = this.maxSpeed;
    this.position.x += this.speed;
    this.faceDir = DIRECTION.RIGHT;
  }

  moveUp() {
    this.speed = this.maxSpeed;
    this.position.y -= this.speed;
    this.faceDir = DIRECTION.UP;
  }

  moveDown() {
    this.speed = this.maxSpeed;
    this.position.y += this.speed;
    this.faceDir = DIRECTION.DOWN;
  }

  moveStop() {
    this.speed = 0;
  }

  moveFire() {
    this.obs.push(
      new Bullet(
        this.faceDir,
        this.position.x + this.tankBody.height / 2 - 2.5,
        this.position.y + this.tankBody.height / 2 - 2.5,
        this.player,
        this.obs
      )
    );
  }

  // do we need this? we can update in move functions
  update(deltaTime) {
    //this.position.y += this.speed;
    //this.position.y += this.speed;
  }
}
