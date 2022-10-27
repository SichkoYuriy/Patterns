interface Publisher {
    subscribe(subscriber: Subscriber): void;
    unSubscribe(subscriber: Subscriber): void;
    notify(): void;
}
class ConcretePublisher implements Publisher {
    private subscribers: Subscriber[] = [];

    public subscribe(subscriber: Subscriber): void {
        console.log('Publisher: Subscribe an subscribers.');
        this.subscribers.push(subscriber);
    }
    public unSubscribe(subscriber: Subscriber): void {
        const observerIndex = this.subscribers.indexOf(subscriber);
        if (observerIndex === -1) {
            return console.log('Publisher: Nonexistent subscribers.');
        }

        this.subscribers.splice(observerIndex, 1);
        console.log('Publisher: Unsubscribe an subscribers.');
    }
    public notify(): void {
        console.log('Publisher: Notifying subscribers...');
        for (const subscriber of this.subscribers) {
            subscriber.update(this);
        }
    }
    public newMessage(): void {
        console.log('Publisher: You have unread news');
        this.notify();
    }
}

interface Subscriber {
    update(publisher: Publisher): void;
}
class ConcreteSubscriber1 implements Subscriber {
    public update(publisher: Publisher): void {
            console.log('ConcreteSubscriber1: Reacted to the news.');
    }
}

class ConcreteSubscriber2 implements Subscriber {
    public update(publisher: Publisher): void {
            console.log('ConcreteSubscriber2: Reacted to the news.');
    }
}

const publisher = new ConcretePublisher();

const subscriber1 = new ConcreteSubscriber1();
publisher.subscribe(subscriber1);

const subscriber2 = new ConcreteSubscriber2();
publisher.subscribe(subscriber2);

publisher.newMessage();

publisher.unSubscribe(subscriber2);

