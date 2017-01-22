
//jshint esversion:6

// let speed = 2;

//    $(document).on('keydown', function (e) {
//         // if (game_over === false) {
//     switch (e.which){
//     case 37:    //left arrow key
//         $(".pikachu").finish().animate({
//             left: "-=50"
//         });
//         break;
//     case 38:    //up arrow key
//         $(".pikachu").finish().animate({
//             top: "-=50"
//         });
//         break;
//     case 39:    //right arrow key
//         $(".pikachu").finish().animate({
//             left: "+=50"
//         });
//         break;
//     case 40:    //bottom arrow key
//         $(".pikachu").finish().animate({
//             top: "+=50"
//         });
//         break;
//     }
//         // }
//     });



    var anim_id;

    //saving dom objects to variables
    var container = $('#waveContainer');
    var pikachu = $('#pikachu');
    var gyarados = $('#gyarados');
    var gyaradosOne = $('#gyarados');
     var gyaradosTwo = $('#gyarados');

    var restart_div = $('#restart_div');
    var restart_btn = $('#restart');
    var score = $('#score');

    //saving some initial setup
    var container_left = parseInt(container.css('left'));
    var container_width = parseInt(container.width());
    var container_height = parseInt(container.height());
    var pikachu_width = parseInt(pikachu.width());
    var pikachu_height = parseInt(pikachu.height());

    //some other declarations
    var game_over = false;

    var score_counter = 1;

    var speed = 2;
    var line_speed = 5;

    var move_right = false;
    var move_left = false;
    var move_up = false;
    var move_down = false;

 /* Move the pikachu */
    $(document).on('keydown', function (e) {
        if (game_over === false) {
            var key = e.keyCode;
            if (key === 37 && move_left === false) {
                move_left = requestAnimationFrame(left);
            } else if (key === 39 && move_right === false) {
                move_right = requestAnimationFrame(right);
            } else if (key === 38 && move_up === false) {
                move_up = requestAnimationFrame(up);
            } else if (key === 40 && move_down === false) {
                move_down = requestAnimationFrame(down);
            }
        }
    });

    $(document).on('keyup', function (e) {
        if (game_over === false) {
            var key = e.keyCode;
            if (key === 37) {
                cancelAnimationFrame(move_left);
                move_left = false;
            } else if (key === 39) {
                cancelAnimationFrame(move_right);
                move_right = false;
            } else if (key === 38) {
                cancelAnimationFrame(move_up);
                move_up = false;
            } else if (key === 40) {
                cancelAnimationFrame(move_down);
                move_down = false;
            }
        }
    });

    function left() {
        if (game_over === false && parseInt(pikachu.css('left')) > 0) {
            pikachu.css('left', parseInt(pikachu.css('left')) - 5);
            move_left = requestAnimationFrame(left);
        }
    }
    function right() {
        if (game_over === false && parseInt(pikachu.css('left')) < container_width - pikachu_width) {
            pikachu.css('left', parseInt(pikachu.css('left')) + 5);
            move_right = requestAnimationFrame(right);
        }
    }

    function up() {
        if (game_over === false && parseInt(pikachu.css('top')) > 0) {
            pikachu.css('top', parseInt(pikachu.css('top')) - 3);
            move_up = requestAnimationFrame(up);
        }
    }

    function down() {
        if (game_over === false && parseInt(pikachu.css('top')) < container_height - pikachu_height) {
            pikachu.css('top', parseInt(pikachu.css('top')) + 3);
            move_down = requestAnimationFrame(down);
        }
    }

    function gyarados_down(car){
        var car_current_top = parseInt(car.css('top'));
        if(car_current_top > container_height){
            car_current_top = -200;
            var car_left = parseInt(Math.random() * (container_width - car_width));
            car.css('left', car_left);
        }
        car.css('top', car_current_top + speed);
    }

function repeat() {
        if (game_over === false) {
            if (collision(pikachu, gyarados) || collision(pikachu, gyaradosOne) || collision(pikachu, gyaradosTwo)) {
                stop_the_game();
            }
            
            score_counter++;
            
            if(score_counter % 20 == 0){
                score.text(parseInt(score.text()) + 1);
            }
            if(score_counter % 500 == 0){
              speed++;
              line_speed++;
            }
            
            car_down(car_1);   
            car_down(car_2);
            car_down(car_3);
            

            anim_id = requestAnimationFrame(repeat);
        }
    }

        function stop_the_game() {
        game_over = true;
        cancelAnimationFrame(anim_id);
        cancelAnimationFrame(move_right);
        cancelAnimationFrame(move_left);
        cancelAnimationFrame(move_up);
        cancelAnimationFrame(move_down);
        restart_div.slideDown();
        restart_btn.focus();
    }
    
    function collision($div1, $div2) {
        var x1 = $div1.offset().left;
        var y1 = $div1.offset().top;
        var h1 = $div1.outerHeight(true);
        var w1 = $div1.outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = $div2.offset().left;
        var y2 = $div2.offset().top;
        var h2 = $div2.outerHeight(true);
        var w2 = $div2.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
        return true;

