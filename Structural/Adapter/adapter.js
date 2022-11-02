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
var Target = /** @class */ (function () {
    function Target() {
    }
    Target.prototype.request = function (c) {
        return c;
    };
    return Target;
}());
var Adaptee = /** @class */ (function () {
    function Adaptee() {
    }
    Adaptee.prototype.celsiumToFahrenheitRequest = function (c) {
        return c;
    };
    return Adaptee;
}());
var Adapter = /** @class */ (function (_super) {
    __extends(Adapter, _super);
    function Adapter(adaptee) {
        var _this = _super.call(this) || this;
        _this.adaptee = adaptee;
        return _this;
    }
    Adapter.prototype.request = function (c) {
        var result = this.adaptee.celsiumToFahrenheitRequest(c);
        return c = (c * 1.8) + 32;
    };
    return Adapter;
}(Target));
function clientCode(targer) {
    console.log(targer.request(36));
}
console.log('Celsium to fahrenheit converter :');
var adaptee = new Adaptee();
console.log('Enter celsium value:');
console.log("".concat(adaptee.celsiumToFahrenheitRequest(36)));
console.log('Converting...');
var adapter = new Adapter(adaptee);
clientCode(adapter);
