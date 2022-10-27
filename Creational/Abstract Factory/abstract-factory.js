// interface AbstractFactory {
//     createProductA(): AbstractProductA;
var NikeFactory = /** @class */ (function () {
    function NikeFactory() {
    }
    NikeFactory.prototype.createNormalBall = function () {
        return new NormalBall1();
    };
    NikeFactory.prototype.createFutsalBall = function () {
        return new FutsalBall1();
    };
    return NikeFactory;
}());
var PumaFactory = /** @class */ (function () {
    function PumaFactory() {
    }
    PumaFactory.prototype.createNormalBall = function () {
        return new NormalBall2();
    };
    PumaFactory.prototype.createFutsalBall = function () {
        return new FutsalBall2();
    };
    return PumaFactory;
}());
var NormalBall1 = /** @class */ (function () {
    function NormalBall1() {
    }
    NormalBall1.prototype.material = function () {
        return 'The material of the NormalBall1 is natural';
    };
    return NormalBall1;
}());
var NormalBall2 = /** @class */ (function () {
    function NormalBall2() {
    }
    NormalBall2.prototype.material = function () {
        return 'The material of the NormalBall2 is syntethic';
    };
    return NormalBall2;
}());
var FutsalBall1 = /** @class */ (function () {
    function FutsalBall1() {
    }
    FutsalBall1.prototype.size = function () {
        return 'The size of the product FutsalBall1 is 5';
    };
    return FutsalBall1;
}());
var FutsalBall2 = /** @class */ (function () {
    function FutsalBall2() {
    }
    FutsalBall2.prototype.size = function () {
        return 'The size of the product FutsalBall2 is 4';
    };
    return FutsalBall2;
}());
function clientCode(factory) {
    var normalball = factory.createNormalBall();
    var futsalball = factory.createFutsalBall();
    console.log(normalball.material());
    console.log(futsalball.size());
}
clientCode(new NikeFactory());
// clientCode(new PumaFactory());
