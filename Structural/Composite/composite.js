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
var Component = /** @class */ (function () {
    function Component() {
    }
    Component.prototype.setParent = function (parent) {
        this.parent = parent;
    };
    Component.prototype.getParent = function () {
        return this.parent;
    };
    Component.prototype.add = function (component) { };
    Component.prototype.remove = function (component) { };
    return Component;
}());
var Phone = /** @class */ (function (_super) {
    __extends(Phone, _super);
    function Phone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Phone.prototype.operation = function () {
        return 'Phone';
    };
    return Phone;
}(Component));
var Charger = /** @class */ (function (_super) {
    __extends(Charger, _super);
    function Charger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Charger.prototype.operation = function () {
        return 'Charger';
    };
    return Charger;
}(Component));
var Case = /** @class */ (function (_super) {
    __extends(Case, _super);
    function Case() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Case.prototype.operation = function () {
        return 'Case';
    };
    return Case;
}(Component));
var AirPods = /** @class */ (function (_super) {
    __extends(AirPods, _super);
    function AirPods() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AirPods.prototype.operation = function () {
        return 'AirPods';
    };
    return AirPods;
}(Component));
var Composite = /** @class */ (function (_super) {
    __extends(Composite, _super);
    function Composite() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.children = [];
        return _this;
    }
    Composite.prototype.add = function (component) {
        this.children.push(component);
        component.setParent(this);
    };
    Composite.prototype.remove = function (component) {
        var componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1);
        component.setParent(null);
    };
    Composite.prototype.operation = function () {
        var results = [];
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            results.push(child.operation());
        }
        return "Box(".concat(results.join('+'), ")");
    };
    return Composite;
}(Component));
function clientCode(component) {
    console.log("Package content: ".concat(component.operation()));
}
var box = new Composite();
box.add(new Phone());
var box1 = new Composite();
box1.add(new Phone());
box1.add(new Case());
box1.add(new AirPods());
var box2 = new Composite();
box2.add(new Phone());
box2.add(new AirPods());
box.add(box1);
box.add(box2);
clientCode(box);
