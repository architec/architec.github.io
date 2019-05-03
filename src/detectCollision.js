
function detectCollision(bullet) {
  //console.log("detectCollision called");
  let p1Tank = objects[0];
  let p2Tank = objects[1];
  if (bullet.player === 1) {
    if (
      bullet.position.x >= p2Tank.position.x &&
      bullet.position.x <= p2Tank.position.x + p2Tank.tankBody.width &&
      bullet.position.y >= p2Tank.position.y &&
      bullet.position.y <= p2Tank.position.y + p2Tank.tankBody.height
    ) {
      // detected collision
      if (bullet.isVisible) {
        bullet.isVisible = false;
        p2Tank.health--;
        console.log(p2Tank.health);
        return true;
      }
    }
  } else if (bullet.player === 2) {
    if (
      bullet.position.x >= p1Tank.position.x &&
      bullet.position.x <= p1Tank.position.x + p1Tank.tankBody.width &&
      bullet.position.y >= p1Tank.position.y &&
      bullet.position.y <= p1Tank.position.y + p1Tank.tankBody.height
    ) {
      // detected collision
      if (bullet.isVisible) {
        bullet.isVisible = false;
        p1Tank.health--;
        console.log(p1Tank.health);
        return true;
      }
    }
  }
  return false;
}
