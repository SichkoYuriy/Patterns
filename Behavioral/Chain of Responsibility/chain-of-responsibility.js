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
var AbstractHandler = /** @class */ (function () {
    function AbstractHandler() {
    }
    AbstractHandler.prototype.setNext = function (handler) {
        this.nextHandler = handler;
        return handler;
    };
    AbstractHandler.prototype.handle = function (request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    };
    return AbstractHandler;
}());
var AudiHandler = /** @class */ (function (_super) {
    __extends(AudiHandler, _super);
    function AudiHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AudiHandler.prototype.handle = function (request) {
        if (request === 'Audi') {
            return "Audi factory: I will build the ".concat(request);
        }
        return _super.prototype.handle.call(this, request);
    };
    return AudiHandler;
}(AbstractHandler));
var BMWHandler = /** @class */ (function (_super) {
    __extends(BMWHandler, _super);
    function BMWHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BMWHandler.prototype.handle = function (request) {
        if (request === 'BMW') {
            return "BMW factory: I will build the ".concat(request);
        }
        return _super.prototype.handle.call(this, request);
    };
    return BMWHandler;
}(AbstractHandler));
var MercedesHandler = /** @class */ (function (_super) {
    __extends(MercedesHandler, _super);
    function MercedesHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MercedesHandler.prototype.handle = function (request) {
        if (request === 'Mercedes') {
            return "Mercedes factory: I will build the ".concat(request);
        }
        return _super.prototype.handle.call(this, request);
    };
    return MercedesHandler;
}(AbstractHandler));
function clientCode(handler) {
    var cars = ['Audi', 'BMW', 'Mercedes'];
    for (var _i = 0, cars_1 = cars; _i < cars_1.length; _i++) {
        var car = cars_1[_i];
        console.log("Government: Who will build ".concat(car, "?"));
        var result = handler.handle(car);
        if (result) {
            console.log("   ".concat(result));
        }
        else {
            console.log("   ".concat(car, " was left without manufacturer."));
        }
    }
}
var audi = new AudiHandler();
var bmw = new BMWHandler();
var mercedes = new MercedesHandler();
audi.setNext(bmw).setNext(mercedes);
console.log('Chain: Audi > BMW > Mercedes\n');
clientCode(audi);
console.log('');
console.log('Subchain: BMW > Mercedes\n');
clientCode(bmw);
console.log('');
console.log('Subchain: Mercedes\n');
clientCode(mercedes);
