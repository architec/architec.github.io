export default class InputHandlerP2 {
  constructor(tank) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 32:
          tank.moveFire();
          break;
        case 65:
          tank.moveLeft();
          break;
        case 87:
          tank.moveUp();
          break;
        case 68:
          tank.moveRight();
          break;
        case 83:
          tank.moveDown();
          break;
      }
    });

    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 65:
          tank.moveStop();
          break;
        case 87:
          tank.moveStop();
          break;
        case 68:
          tank.moveStop();
          break;
        case 83:
          tank.moveStop();
          break;
      }
    });
  }
}
