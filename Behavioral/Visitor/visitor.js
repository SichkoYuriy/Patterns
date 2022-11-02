var Engine = /** @class */ (function () {
    function Engine() {
    }
    Engine.prototype.accept = function (visitor) {
        visitor.visitEngine(this);
    };
    return Engine;
}());
var Transmission = /** @class */ (function () {
    function Transmission() {
    }
    Transmission.prototype.accept = function (visitor) {
        visitor.visitTransmission(this);
    };
    return Transmission;
}());
var Mechanic = /** @class */ (function () {
    function Mechanic() {
    }
    Mechanic.prototype.visitEngine = function (element) {
        console.log("Mechanic: Repairing the engine");
    };
    Mechanic.prototype.visitTransmission = function (element) {
        console.log("Mechanic: Repairing the transmission");
    };
    return Mechanic;
}());
var Diagnostician = /** @class */ (function () {
    function Diagnostician() {
    }
    Diagnostician.prototype.visitEngine = function (element) {
        console.log("Diagnostician: Inspects the engine");
    };
    Diagnostician.prototype.visitTransmission = function (element) {
        console.log("Diagnostician: Inspects the transmission");
    };
    return Diagnostician;
}());
function clientCode(components, visitor) {
    for (var _i = 0, components_1 = components; _i < components_1.length; _i++) {
        var component = components_1[_i];
        component.accept(visitor);
    }
}
var components = [new Engine(), new Transmission(),];
var mechanic = new Mechanic();
clientCode(components, mechanic);
console.log('');
var diagnostician = new Diagnostician();
clientCode(components, diagnostician);
