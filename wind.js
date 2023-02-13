
function wind(timer) {
    
    this.timer = timer;

    this.change = function () {

        var dice = Math.floor(Math.random() * 101);

        if (dice < 40) {
            windForce = new vector(((Math.random() * windMaxSpeed * 2) - (windMaxSpeed / 2))
                , ((Math.random() * windMaxSpeed * 2) - (windMaxSpeed / 2)));
        }

    };

    this.start = function () {
        this.interval = setInterval(this.change, this.timer);
    }


    this.stop = function () {
        clearInterval(this.interval);
    }

}
