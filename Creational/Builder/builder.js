var Builder = /** @class */ (function () {
    function Builder() {
        this.reset();
    }
    Builder.prototype.reset = function () {
        this.car = new Car1();
    };
    Builder.prototype.model = function () {
        this.car.parts.push('Your model');
    };
    Builder.prototype.color = function () {
        this.car.parts.push('Your color');
    };
    Builder.prototype.wheelsSize = function () {
        this.car.parts.push('Wheels size');
    };
    Builder.prototype.transmission = function () {
        this.car.parts.push('Transmission');
    };
    Builder.prototype.getCar = function () {
        var result = this.car;
        this.reset();
        return result;
    };
    return Builder;
}());
var Car1 = /** @class */ (function () {
    function Car1() {
        this.parts = [];
    }
    Car1.prototype.listParts = function () {
        console.log("Car details: ".concat(this.parts.join(', '), "\n"));
    };
    return Car1;
}());
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.setBuilder = function (createAudi) {
        this.createAudi = createAudi;
    };
    Director.prototype.buildStandartCar = function () {
        this.createAudi.model();
    };
    Director.prototype.buildFullFeaturedCar = function () {
        this.createAudi.model();
        this.createAudi.color();
        this.createAudi.wheelsSize();
        this.createAudi.transmission();
    };
    return Director;
}());
function clientCode(director) {
    var createAudi = new Builder();
    director.setBuilder(createAudi);
    console.log('Standard car:');
    director.buildStandartCar();
    createAudi.getCar().listParts();
    console.log('Full featured car:');
    director.buildFullFeaturedCar();
    createAudi.getCar().listParts();
    console.log('Custom car:');
    createAudi.model();
    createAudi.color();
    createAudi.transmission();
    createAudi.getCar().listParts();
}
var director = new Director();
clientCode(director);
