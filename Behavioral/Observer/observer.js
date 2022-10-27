var ConcretePublisher = /** @class */ (function () {
    function ConcretePublisher() {
        this.subscribers = [];
    }
    ConcretePublisher.prototype.subscribe = function (subscriber) {
        console.log('Publisher: Subscribe an subscribers.');
        this.subscribers.push(subscriber);
    };
    ConcretePublisher.prototype.unSubscribe = function (subscriber) {
        var observerIndex = this.subscribers.indexOf(subscriber);
        if (observerIndex === -1) {
            return console.log('Publisher: Nonexistent subscribers.');
        }
        this.subscribers.splice(observerIndex, 1);
        console.log('Publisher: Unsubscribe an subscribers.');
    };
    ConcretePublisher.prototype.notify = function () {
        console.log('Publisher: Notifying subscribers...');
        for (var _i = 0, _a = this.subscribers; _i < _a.length; _i++) {
            var subscriber = _a[_i];
            subscriber.update(this);
        }
    };
    ConcretePublisher.prototype.newMessage = function () {
        console.log('Publisher: You have unread news');
        this.notify();
    };
    return ConcretePublisher;
}());
var ConcreteSubscriber1 = /** @class */ (function () {
    function ConcreteSubscriber1() {
    }
    ConcreteSubscriber1.prototype.update = function (publisher) {
        console.log('ConcreteSubscriber1: Reacted to the news.');
    };
    return ConcreteSubscriber1;
}());
var ConcreteSubscriber2 = /** @class */ (function () {
    function ConcreteSubscriber2() {
    }
    ConcreteSubscriber2.prototype.update = function (publisher) {
        console.log('ConcreteSubscriber2: Reacted to the news.');
    };
    return ConcreteSubscriber2;
}());
var publisher = new ConcretePublisher();
var subscriber1 = new ConcreteSubscriber1();
publisher.subscribe(subscriber1);
var subscriber2 = new ConcreteSubscriber2();
publisher.subscribe(subscriber2);
publisher.newMessage();
publisher.unSubscribe(subscriber2);
