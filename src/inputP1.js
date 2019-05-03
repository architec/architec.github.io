class InputHandlerP1 {
  constructor(tank) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 13:
          tank.moveFire();
          break;
        case 37:
          tank.moveLeft();
          break;
        case 38:
          tank.moveUp();
          break;
        case 39:
          tank.moveRight();
          break;
        case 40:
          tank.moveDown();
          break;
      }
    });

    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37:
          tank.moveStop();
          break;
        case 38:
          tank.moveStop();
          break;
        case 39:
          tank.moveStop();
          break;
        case 40:
          tank.moveStop();
          break;
      }
    });
  }
}
