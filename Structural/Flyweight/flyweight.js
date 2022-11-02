var Flyweight = /** @class */ (function () {
    function Flyweight(sharedState) {
        this.sharedState = sharedState;
    }
    Flyweight.prototype.operation = function (uniqueState) {
        var shared = JSON.stringify(this.sharedState);
        var unique = JSON.stringify(uniqueState);
        console.log("Flyweight:Displaying shared (".concat(shared, ") and unique (").concat(unique, ") state. "));
    };
    return Flyweight;
}());
// FleyweightFactory
var CarFactory = /** @class */ (function () {
    function CarFactory(initialFlyweights) {
        this.flyweights = {};
        for (var _i = 0, initialFlyweights_1 = initialFlyweights; _i < initialFlyweights_1.length; _i++) {
            var state = initialFlyweights_1[_i];
            this.flyweights[this.getKey(state)] = new Flyweight(state);
        }
    }
    CarFactory.prototype.getKey = function (state) {
        return state.join('_');
    };
    CarFactory.prototype.getFlyweight = function (sharedState) {
        var key = this.getKey(sharedState);
        if (!(key in this.flyweights)) {
            console.log('CarFactory: Can\'t find a flyweight, creating new one.');
            this.flyweights[key] = new Flyweight(sharedState);
        }
        else {
            console.log('CarFactory: Reusing existing flyweight.');
        }
        return this.flyweights[key];
    };
    CarFactory.prototype.listFlyweights = function () {
        var count = Object.keys(this.flyweights).length;
        console.log("\nCarFactory: I have ".concat(count, " flyweights:"));
        for (var key in this.flyweights) {
            console.log(key);
        }
    };
    return CarFactory;
}());
var carFactory = new CarFactory([
    ['Audi', 'E-tron', 'black', '2020'],
    ['BMW', 'X5', 'green', '2021'],
    ['Mercedes', 'S-class', 'grey', '2022'],
]);
carFactory.listFlyweights();
function addToDatabase(cf, vin, owner, brand, model, color, year) {
    console.log('\nClient: Adding a car to database.');
    var flyweight = cf.getFlyweight([brand, model, color, year]);
    flyweight.operation([vin, owner]);
}
addToDatabase(carFactory, 'ZFA22300005556777', 'Brad Pitt', 'Ferrari', '296GTB', 'red', '2022');
addToDatabase(carFactory, 'JDA22300001515165', 'Tom Cruize', 'Lamborgini', 'Aventador', 'grey', '2020');
addToDatabase(carFactory, 'JDA22315151515165', 'Tom Hardy', 'Lamborgini', 'Aventador', 'grey', '2020');
carFactory.listFlyweights();
