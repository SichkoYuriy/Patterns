var Computer = /** @class */ (function () {
    function Computer(power, data, errors) {
        this.power = power || new Power();
        this.data = data || new Data();
        this.errors = errors || new ErrorsCheck();
    }
    Computer.prototype.operation = function () {
        var result = '';
        result += this.power.powerOn();
        result += this.data.startLoad();
        result += this.data.endLoad();
        result += this.errors.startCheck();
        result += this.errors.endCheck();
        result += this.power.powerOff();
        return result;
    };
    return Computer;
}());
var Power = /** @class */ (function () {
    function Power() {
    }
    Power.prototype.powerOn = function () {
        return 'Computer is on \n';
    };
    Power.prototype.powerOff = function () {
        return 'Computer is off \n';
    };
    return Power;
}());
var Data = /** @class */ (function () {
    function Data() {
    }
    Data.prototype.startLoad = function () {
        return 'Start downloading data...\n';
    };
    Data.prototype.endLoad = function () {
        return 'The data is loaded.\n';
    };
    return Data;
}());
var ErrorsCheck = /** @class */ (function () {
    function ErrorsCheck() {
    }
    ErrorsCheck.prototype.startCheck = function () {
        return 'Error checking started...\n';
    };
    ErrorsCheck.prototype.endCheck = function () {
        return 'Error checking finished. Errors not found.\n';
    };
    return ErrorsCheck;
}());
function clientCode(computer) {
    console.log(computer.operation());
}
// const power = new Power();
// const data = new Data();
// const errors = new ErrorsCheck();
// const 
var computer = new Computer();
clientCode(computer);
