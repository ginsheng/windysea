
class vector {
    constructor(magnitud, dirección) {
        this.x = magnitud;
        this.y = dirección;

        this.add = function (vector) {
            this.x += vector.x;
            this.y += vector.y;
        };

        this.subtract = function (vector) {
            this.x -= vector.x;
            this.y -= vector.y;
        };
    }
}