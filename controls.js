
document.addEventListener('keydown', function (event) {

    switch (event.key.toLowerCase()) {
        case "arrowup":
        case "w":
            myGamePlayer.position.subtract(new vector(0,steerForce));
            break;
        case "arrowdown":
        case "s":
            myGamePlayer.position.add(new vector(0,steerForce));
            break;
        case "arrowleft":
        case "a":
            myGamePlayer.position.subtract(new vector(steerForce,0));
            break;
        case "arrowright":
        case "d":
            myGamePlayer.position.add(new vector(steerForce,0));
            break;
    }

}, false);