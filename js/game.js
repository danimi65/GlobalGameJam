let score = 0;
let keyUp = false;
let keyRight = false;
let gameOver = false;

document.onkeypress = function(event) {
  let key = event.keyCode;
  // up = 38;
  // right = 39;
  if(gameOver === false) {
    if(key === 38) {
      keyUp = requestAnimationFrame(up);
    } else if( key === 39) {
      keyRight = requestAnimationFrame(right);
    }
  }
};

function moveUp() {
  if(gameOver === false) {
    keyUp = requestAnimationFrame(up);
  }
}

function moveRight() {
  if(gameOver === false) {
    keyRight = requestAnimationFrame(right);
  }
}

function endGame() {
  gameOver = true;
  cancelAnimationFrame(moveUp);
  cancelAnimationFrame(moveRight);
}