
function gamePlayer(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speed = new vector(0, 0);
    this.acceleration = new vector(0, 0);
    this.position = new vector(x, y);
    this.naturalPosition = new vector(x + (width / 2), y + (height / 2));
    this.affectedByWind = true;
    ctx = myGameArea.context;
    ctx.fillStyle = color;

    this.draw = function () {

        extraX = 0;
        extraY = 0;
        if ((this.naturalPosition.x + (this.width / 2)) > myGameArea.canvas.width) {
            extraX = (this.naturalPosition.x + (this.width / 2)) - myGameArea.canvas.width;
            if (extraX > this.width) {
                this.position.x = 0;
            } else {
                ctx.fillRect(this.position.x - myGameArea.canvas.width, this.position.y, extraX, this.height);
            }
        }

        if ((this.naturalPosition.x - (this.width / 2)) < 0) {
            extraX = -1 * (this.naturalPosition.x - (this.width / 2));

            if (extraX < this.width) {
                this.position.x = myGameArea.canvas.width;
            } else {
                ctx.fillRect(this.position.x - myGameArea.canvas.width, this.position.y, extraX, this.height);
            }

        }

        if ((this.naturalPosition.y + (this.height / 2)) > myGameArea.canvas.height) {
            extraY = (this.naturalPosition.y + (this.height / 2)) - myGameArea.canvas.height;
            if (extraY > this.height) {
                this.position.y = 0;
            } else {
                ctx.fillRect(this.position.x, this.position.y - myGameArea.canvas.height, this.width, extraY);
            }
        }

        if ((this.naturalPosition.y - (this.height / 2)) < 0) {
            extraY = -1 * (this.naturalPosition.y - (this.height / 2));

            if (extraY < this.height) {
                this.position.y = myGameArea.canvas.height;
            } else {
                ctx.fillRect(this.position.x, this.position.y - myGameArea.canvas.height, this.width, extraY);
            }

        }

        ctx.fillRect(this.position.x, this.position.y, this.height - extraX, this.height - extraY);

    }

    this.update = function () {
        ctx = myGameArea.context;
        ctx.fillStyle = color;

        if (this.affectedByWind) {
            this.speed = windForce;
            
        }

        this.position.add(this.speed);
        this.naturalPosition = new vector(this.position.x + (this.width / 2), this.position.y + (this.height / 2));

        this.draw();
    }

    this.crashWith = function (obstacle) {

        return (this.naturalPosition.x + (this.width / 2) >= obstacle.x &&
            this.naturalPosition.x + (this.width / 2) <= obstacle.x + obstacle.width &&
            this.naturalPosition.y + (this.height /2) >= obstacle.y &&
            this.naturalPosition.y - (this.height / 2) <= obstacle.y + obstacle.height
        );

    }

}