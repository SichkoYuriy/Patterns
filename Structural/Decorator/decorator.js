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
// конкреный компонент
var Phone = /** @class */ (function () {
    function Phone() {
    }
    Phone.prototype.operation = function () {
        return 'Телефон';
    };
    return Phone;
}());
// общий интерфейс для конкретных декораторов
var Decorator = /** @class */ (function () {
    function Decorator(component) {
        this.component = component;
    }
    Decorator.prototype.operation = function () {
        return this.component.operation();
    };
    return Decorator;
}());
// конкретный декоратор
var Box = /** @class */ (function (_super) {
    __extends(Box, _super);
    function Box() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Box.prototype.operation = function () {
        return "\u041A\u043E\u0440\u043E\u0431\u043A\u0430(".concat(_super.prototype.operation.call(this), ")");
    };
    return Box;
}(Decorator));
// конкретный декоратор
var Parcell = /** @class */ (function (_super) {
    __extends(Parcell, _super);
    function Parcell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Parcell.prototype.operation = function () {
        return "\u041F\u043E\u0434\u0430\u0440\u043E\u0447\u043D\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430(".concat(_super.prototype.operation.call(this), ")");
    };
    return Parcell;
}(Decorator));
// конкретный декоратор
var Parcell2 = /** @class */ (function (_super) {
    __extends(Parcell2, _super);
    function Parcell2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Parcell2.prototype.operation = function () {
        return "\u041E\u0431\u044B\u0447\u043D\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430(".concat(_super.prototype.operation.call(this), ")");
    };
    return Parcell2;
}(Decorator));
function clientCode(component) {
    console.log("\u0421\u043E\u0437\u0434\u0430\u043D\u043E: ".concat(component.operation()));
}
var phone = new Phone();
var decorator = new Parcell(new Box(phone));
console.log('Создадим телефон в подарочной упаковке');
clientCode(decorator);
console.log('');
var decorator1 = new Parcell2(new Box(phone));
console.log('Создадим телефон в обычной упаковке');
clientCode(decorator1);
