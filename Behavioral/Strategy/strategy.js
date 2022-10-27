var StrategyPlus = /** @class */ (function () {
    function StrategyPlus() {
    }
    StrategyPlus.prototype.execute = function (a, b) {
        return a + b;
    };
    return StrategyPlus;
}());
var StrategyMinus = /** @class */ (function () {
    function StrategyMinus() {
    }
    StrategyMinus.prototype.execute = function (a, b) {
        return a - b;
    };
    return StrategyMinus;
}());
var StrategyMultiply = /** @class */ (function () {
    function StrategyMultiply() {
    }
    StrategyMultiply.prototype.execute = function (a, b) {
        return a * b;
    };
    return StrategyMultiply;
}());
var StrategyDivide = /** @class */ (function () {
    function StrategyDivide() {
    }
    StrategyDivide.prototype.execute = function (a, b) {
        return a / b;
    };
    return StrategyDivide;
}());
var Context = /** @class */ (function () {
    function Context(strategy) {
        this.strategy = strategy;
    }
    Context.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    Context.prototype.executeStrategy = function (a, b) {
        return this.strategy.execute(a, b);
    };
    return Context;
}());
var contextPlus = new Context(new StrategyPlus());
var contextMinus = new Context(new StrategyMinus());
var contextMultiply = new Context(new StrategyMultiply());
var contextDivide = new Context(new StrategyDivide());
console.log('Result: ' + 'a + ' + 'b = ' + contextPlus.executeStrategy(5, 4));
console.log('Result: ' + 'a - ' + 'b = ' + contextMinus.executeStrategy(5, 4));
console.log('Result: ' + 'a * ' + 'b = ' + contextMultiply.executeStrategy(5, 4));
console.log('Result: ' + 'a / ' + 'b = ' + contextDivide.executeStrategy(5, 4));
