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
var Car = /** @class */ (function () {
    function Car(state) {
        this.transitionTo(state);
    }
    Car.prototype.transitionTo = function (state) {
        console.log("Car state is ".concat(state.constructor.name, "."));
        this.state = state;
        this.state.setCar(this);
    };
    Car.prototype.drive = function () {
        this.state.normal();
    };
    Car.prototype.notDrive = function () {
        this.state.broken();
    };
    return Car;
}());
var State = /** @class */ (function () {
    function State() {
    }
    State.prototype.setCar = function (car) {
        this.car = car;
    };
    return State;
}());
var Normal = /** @class */ (function (_super) {
    __extends(Normal, _super);
    function Normal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Normal.prototype.normal = function () {
        console.log('The car is ready to use. Enjoy the ride.');
        console.log('Ooooooops, something went wrong...');
        this.car.transitionTo(new Broken());
    };
    Normal.prototype.broken = function () { };
    return Normal;
}(State));
var Broken = /** @class */ (function (_super) {
    __extends(Broken, _super);
    function Broken() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Broken.prototype.normal = function () { };
    Broken.prototype.broken = function () {
        console.log('The car is broken. Please replace the broken parts.');
        console.log('Broken parts replaced');
        this.car.transitionTo(new Normal());
    };
    return Broken;
}(State));
var car = new Car(new Normal());
car.drive();
car.notDrive();
