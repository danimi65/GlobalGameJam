//jshint esversion:6


// window.onkeydown = function (e) {
//   if(!e){
//     e = window.event;
//   }

// let score = 0;
// let key = e.keyCode;
// let pikachu = document.getElementById("pikachu");
// let top = parseInt(pikachu.style.top, 10);
// let left = parseInt(pikachu.style.left, 10);

// if(key === 37 ) {
//   if(left > 0){
//     pikachu.style.left = left - 10 + 'px';
//   }
// } else if (key == 38){
//   if(top > 0){
//     pikachu.style.top = top - 10 + 'px';
//   }
// }else if( key === 39 ){
//   if(left+pikachu.width+10 < window.innerWidth){
//     pikachu.style.left = left + 10 + 'px';
//   }
// }else if (key === 40){
//   if(top.pikachu.height+ 10 < window.innerHeight){
//     pikachu.style.top = top + 10 + 'px';
//   }
// }



// };
var jsdom = require("jsdom").jsdom;
global.$ = require('jquery/dist/jquery')(jsdom().createWindow());

let keyUp = false;
let keyRight = false;
let keyDown = false;
let gameOver = false;

let move_up = false;
let move_right = false;
let move_down = false;

$(document).on('keydown', function(event){
  let key = event.keyCode;
  // up = 38;
  // right = 39;
  // down = 40;
  if(gameOver === false) {
    if(key === 38 && move_up === false) {
      move_up = requestAnimationFrame(moveUp);
    } else if( key === 39 && move_right === false) {
      move_right = requestAnimationFrame(moveRight);
    } else if(key === 40 && move_down) {
      move_down = requestAnimationFrame(moveDown);
    }
  }
});

$(document).on('keyup', function(event){
  let key = event.keyCode;
  if(gameOver === false) {
    if(key === 38 && move_up === false) {
      move_up = false;
    } else if( key === 39 && move_right === false) {
      move_right = false;
    } else if(key === 40 && move_down) {
      move_down = false;
    }
  }
});


function moveUp() {
  if(gameOver === false && parseInt(pikachu.css('top')) > 0) {
    pikachu.css('top', parseInt(pikachu.css('top')) -3);
    move_up = requestAnimationFrame(moveUp);
  }
}

function moveRight() {
  if(gameOver === false) {
    pikachu.css('left', parseInt(pikachu.css('left')) +5);
    move_right = requestAnimationFrame(moveRight);
  }
}

function moveDown() {
  if(gameOver === false) {
    keyDown = requestAnimationFrame(moveDown);
  }
}

function endGame() {
  gameOver = true;
  cancelAnimationFrame(moveUp);
  cancelAnimationFrame(moveRight);
  cancelAnimationFrame(moveDown);
}

