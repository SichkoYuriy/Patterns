var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CreateCar = /** @class */ (function () {
    function CreateCar() {
    }
    CreateCar.prototype.method = function () {
        var car = this.factoryMethod();
        return car.brand() + car.color() + car.transmission() + car.maxSpeed();
    };
    return CreateCar;
}());
var CreateAudi = /** @class */ (function (_super) {
    __extends(CreateAudi, _super);
    function CreateAudi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreateAudi.prototype.factoryMethod = function () {
        return new Audi();
    };
    return CreateAudi;
}(CreateCar));
var CreateBMW = /** @class */ (function (_super) {
    __extends(CreateBMW, _super);
    function CreateBMW() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreateBMW.prototype.factoryMethod = function () {
        return new BMW();
    };
    return CreateBMW;
}(CreateCar));
var Audi = /** @class */ (function () {
    function Audi() {
    }
    Audi.prototype.brand = function () {
        return "Car brand is Audi. ";
    };
    Audi.prototype.color = function () {
        return "Car color is green. ";
    };
    Audi.prototype.transmission = function () {
        return "Car transmission is automatic. ";
    };
    Audi.prototype.maxSpeed = function () {
        return "Car maximum speed is 300 km/h.";
    };
    return Audi;
}());
var BMW = /** @class */ (function () {
    function BMW() {
    }
    BMW.prototype.brand = function () {
        return "Car brand is BMW. ";
    };
    BMW.prototype.color = function () {
        return "Car color is black. ";
    };
    BMW.prototype.transmission = function () {
        return "Car transmission is manual. ";
    };
    BMW.prototype.maxSpeed = function () {
        return "Car maximum speed is 290 km/h.";
    };
    return BMW;
}());
function clientCode(creator) {
    console.log(creator.method());
}
clientCode(new CreateAudi);
clientCode(new CreateBMW);
