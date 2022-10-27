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
var BuildCar = /** @class */ (function () {
    function BuildCar() {
    }
    BuildCar.prototype.templateMethod = function () {
        this.createCarBody();
        this.installElectronics();
        this.hook1();
        this.installWheels();
        this.tintedWindows();
        this.installVoiceAssistant();
        this.hook2();
        this.finish();
    };
    BuildCar.prototype.createCarBody = function () {
        console.log('Builder: Car body created.');
    };
    BuildCar.prototype.installElectronics = function () {
        console.log('Builder: Electronics installed.');
    };
    BuildCar.prototype.installWheels = function () {
        console.log('Builder: Wheels installed.');
    };
    BuildCar.prototype.finish = function () {
        console.log('Builder: Car builded.');
    };
    BuildCar.prototype.hook1 = function () { };
    BuildCar.prototype.hook2 = function () { };
    return BuildCar;
}());
var ConcreteCar1 = /** @class */ (function (_super) {
    __extends(ConcreteCar1, _super);
    function ConcreteCar1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteCar1.prototype.tintedWindows = function () {
        console.log('Builder: Windows tinted.');
    };
    ConcreteCar1.prototype.installVoiceAssistant = function () {
        console.log('Builder: Voice assistant not installed.');
    };
    return ConcreteCar1;
}(BuildCar));
var ConcreteCar2 = /** @class */ (function (_super) {
    __extends(ConcreteCar2, _super);
    function ConcreteCar2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteCar2.prototype.tintedWindows = function () {
        console.log('Builder: Windows not tinted.');
    };
    ConcreteCar2.prototype.installVoiceAssistant = function () {
        console.log('Builder: Voice assistant not installed.');
    };
    ConcreteCar2.prototype.hook2 = function () {
        console.log('Builder: Board computer replaced. ');
    };
    return ConcreteCar2;
}(BuildCar));
function clientCode(buildCar) {
    buildCar.templateMethod();
}
console.log('Build first car');
clientCode(new ConcreteCar1());
console.log('');
console.log('Build second car');
clientCode(new ConcreteCar2());
