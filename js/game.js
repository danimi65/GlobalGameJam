   $(document).on('keydown', function (e) {
        // if (game_over === false) {
    switch (e.which){
    case 37:    //left arrow key
        $(".pikachu").finish().animate({
            left: "-=50"
        });
        break;
    case 38:    //up arrow key
        $(".pikachu").finish().animate({
            top: "-=50"
        });
        break;
    case 39:    //right arrow key
        $(".pikachu").finish().animate({
            left: "+=50"
        });
        break;
    case 40:    //bottom arrow key
        $(".pikachu").finish().animate({
            top: "+=50"
        });
        break;
    }
        // }
    });



// let score = 0;
// let keyUp = true;
// let keyRight = true;
// let keyDown = true;
// let gameOver = false;

// document.getElementById('pikachu').onkeydown = function(event) {
//   let key = event.keyCode;
//   // up = 38;
//   // right = 39;
//   // down = 40;
//   if(gameOver === false) {
//     if(key === 38 && keyUp === true) {
//       keyUp = requestAnimationFrame(up);
//     } else if(key === 39 && keyRight === true) {
//       keyRight = requestAnimationFrame(right);
//     } else if(key === 40 && keyDown === true) {
//       keyDown = requestAnimationFrame(down);
//     }
//   }
// };

// document.getElementById('pikachu').onkeyup = function(event) {
//   let key = event.keyCode;
//   // up = 38;
//   // right = 39;
//   // down = 40;
//   if(gameOver === false) {
//     if(key === 38) {
//       keyUp = cancelAnimationFrame(up);
//     } else if( key === 39) {
//       keyRight = cancelAnimationFrame(right);
//     } else if(key === 40) {
//       keyDown = cancelAnimationFrame(down);
//     }
//   }
// };

// function moveUp() {
//   if(gameOver === false) {
//     keyUp = requestAnimationFrame(up);
//   }
// }

// function moveRight() {
//   if(gameOver === false) {
//     keyRight = requestAnimationFrame(right);
//   }
// }

// function moveDown() {
//   if(gameOver === false) {
//     keyDown = requestAnimationFrame(down);
//   }
// }

// function endGame() {
//   gameOver = true;
//   cancelAnimationFrame(moveUp);
//   cancelAnimationFrame(moveRight);
//   cancelAnimationFrame(moveDown);
// }
