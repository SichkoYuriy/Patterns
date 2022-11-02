// это абстракция которая содержит логику и делигирует реальную работу объекту реализации
var Remote = /** @class */ (function () {
    function Remote(device) {
        this.device = device;
    }
    Remote.prototype.powerOn = function () {
        this.device.turnOn();
    };
    Remote.prototype.powerOff = function () {
        this.device.turnOff();
    };
    Remote.prototype.volumeUp = function () {
        this.device.increaseVolume();
    };
    Remote.prototype.volumeDown = function () {
        this.device.decreaseVolume();
    };
    Remote.prototype.channelUp = function () {
        this.device.nextChannel();
    };
    Remote.prototype.channelDown = function () {
        this.device.prevChannel();
    };
    return Remote;
}());
// Конкретная реализация
var TV = /** @class */ (function () {
    function TV() {
    }
    TV.prototype.turnOn = function () {
        console.log('TV: Device is on.');
    };
    TV.prototype.turnOff = function () {
        console.log('TV: Device is off.');
    };
    TV.prototype.increaseVolume = function () {
        console.log('TV: Volume increased.');
    };
    TV.prototype.decreaseVolume = function () {
        console.log('TV: Volume decreased.');
    };
    TV.prototype.nextChannel = function () {
        console.log('TV: Channel changed to next.');
    };
    TV.prototype.prevChannel = function () {
        console.log('TV: Channel changed to prev.');
    };
    return TV;
}());
// Конкретная реализация
var Radio = /** @class */ (function () {
    function Radio() {
    }
    Radio.prototype.turnOn = function () {
        console.log('Radio: Device is on.');
    };
    Radio.prototype.turnOff = function () {
        console.log('Radio: Device is off.');
    };
    Radio.prototype.increaseVolume = function () {
        console.log('Radio: Volume increased.');
    };
    Radio.prototype.decreaseVolume = function () {
        console.log('Radio: Volume decreased.');
    };
    Radio.prototype.nextChannel = function () {
        console.log('Radio: Channel changed to next.');
    };
    Radio.prototype.prevChannel = function () {
        console.log('Radio: Channel changed to prev.');
    };
    return Radio;
}());
var tv = new TV();
var remote = new Remote(tv);
remote.powerOn();
remote.channelUp();
remote.volumeDown();
remote.powerOff();
console.log('');
var radio = new Radio();
var remote2 = new Remote(radio);
remote2.powerOn();
remote2.channelUp();
remote2.channelDown();
remote2.volumeDown();
remote2.volumeUp();
remote2.powerOff();
