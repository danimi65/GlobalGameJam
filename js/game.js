
//jshint esversion:6

let speed = 2;

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



