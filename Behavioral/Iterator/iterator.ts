interface Iterator<T> {
    current(): T;

    next(): T;

    key(): number;

    valid(): boolean;

    rewind(): void;
}
interface Agregator {
    getIterator(): Iterator<string>;
}

class NumbersIterator implements Iterator<string> {
    private collection: NumbersCollection;
    private position: number = 0;
    private reverse: boolean = false;
    constructor(collection: NumbersCollection, reverse: boolean = false) {
        this.collection = collection;
        this.reverse = reverse;
        if (reverse) {
            this.position = collection.getCount() - 1;
        }
    }
    public rewind(): void {
        this.position = this.reverse ?
            this.collection.getCount() - 1 : 0;
    }
    public current(): string {
        return this.collection.getItems()[this.position];
    }
    public key(): number {
        return this.position;
    }

    public next():any {
        const item = this.collection.getItems()[this.position];
        this.position += this.reverse ? -1 : 1;
        return item;
    }

    public valid(): boolean {
        if (this.reverse) {
            return this.position >= 0;
        }

        return this.position < this.collection.getCount();
    }
}
class NumbersCollection implements Agregator {
    private items: string[] = [];
    public getItems(): string[] {
        return this.items;
    }
    public getCount(): number {
        return this.items.length;
    }
    public addItem(item: string): void {
        this.items.push(item);
    }
    public getIterator(): Iterator<string> {
        return new NumbersIterator(this);
    }
     public getReverseIterator(): Iterator<string> {
        return new NumbersIterator(this, true);
    }
}

const collection = new NumbersCollection();
collection.addItem('1');
collection.addItem('12');
collection.addItem('8');
collection.addItem('7');
collection.addItem('5');
collection.addItem('16');

const iterator = collection.getIterator();
console.log('Iterate:');
while (iterator.valid()) {
    console.log(iterator.next());
}

console.log('');
console.log('Reverse Iterate:');
const reverseIterator = collection.getReverseIterator();
while (reverseIterator.valid()) {
    console.log(reverseIterator.next());
}