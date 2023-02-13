
var myGamePlayer;
const myGameObstacles = [];
var myGamerScore;
const steerForce = 0.8;
const windMaxSpeed = 1.5;
const timer = 4000;
var windForce = new vector(0.3, 0.3);

function startGame() {
    myGameArea.start();
    myWind = new wind(timer);
    myWind.start();
    myGamePlayer = new gamePlayer(20, 20, "blue", 20, 120);
    myGameObstacles.push(new obstacle(10, 10, "red", 300, 120));
    myGamerScore = new score("30px", "30px", "black", 280, 40);
}
var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 720;
        this.canvas.height = 480;
        this.frameNo = 0;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function () {
        clearInterval(this.interval);
    }
}

function updateGameArea() {

    myGameArea.frameNo += 1;

    myGameArea.clear();

    myGameObstacles.forEach(function (obstacle) {

        if (myGamePlayer.crashWith(obstacle)) {
            myGameArea.stop();
            return;
        }

        obstacle.newPos();
        obstacle.update();
    });

    myGamerScore.text = "SCORE: " + (Math.floor(myGameArea.frameNo / 100)) * 10;
    myGamerScore.update();

    myGamePlayer.update();

}