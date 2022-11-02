//  tsc memento.ts && node  memento.js
// class Originator {
//     private state: string;
//     constructor(state: string) {
//         this.state = state;
//         console.log(`Originator: My initial state is: ${state}`);
//     }
//     public doSomething() :void {
//         console.log('Originator: Changing the project.')
//         this.state = this.generateStatusName(30);
//         console.log(`Originator: Status has been change to: ${this.state}`);
//     }
//     private generateStatusName(length: number = 10): string {
//        const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//         return Array
//             .apply(null, { length })
//             .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
//             .join('');
//     }
//     public save(): Memento {
//         return new ConcreteMemento(this.state);
//     }
//     public restore(memento: Memento): void {
//         this.state = memento.getState();
//         console.log(`Originator: Status has been change to: ${this.state}`);
//     }
// }
// interface Memento {
//     getState(): string;
//     getName(): string;
//     getDate(): string;
// }
// class ConcreteMemento implements Memento {
//     private state: string;
//     private date: string;
//     constructor(state: string) {
//         this.state = state;
//         this.date = new Date().toISOString().slice(0, 19).replace('T', '  ');
//     }
//     public getState(): string {
//         return this.state;
//     }
//     public getName(): string {
//          return `${this.date} / ${this.state.substr(0, 9)}...`;
//     }
//     public getDate(): string {
//         return this.date;
//     }
// }
// class Caretaker {
//     private mementos: Memento[] = [];
//     private originator: Originator;
//     constructor(originator: Originator) {
//         this.originator = originator;
//     }
//     public backup(): void {
//         console.log('\nCaretaker: Saving Originator\'s state...');
//         this.mementos.push(this.originator.save());
//     }
//     public undo(): void {
//         if (!this.mementos.length) {
//             return;
//         }
//         const memento = this.mementos.pop();
//         console.log(`Caretaker: Restoring state to: ${memento.getName()}`);
//         this.originator.restore(memento);
//     }
//     public showHistory(): void {
//         console.log('Caretaker: The list of mementos:');
//         for (const memento of this.mementos) {
//             console.log(memento.getName());
//         }
//     }
// }
// const originator = new Originator('LjPMJnrmPtENITuZsaiBHggFQFElnd');
// const caretaker = new Caretaker(originator);
// caretaker.backup();
// originator.doSomething();
// caretaker.backup();
// originator.doSomething();
// caretaker.backup();
// originator.doSomething();
// console.log('');
// caretaker.showHistory();
// console.log('\nClient: Now, let\'s rollback!\n');
// caretaker.undo();
// console.log('\nClient: Once more!\n');
// caretaker.undo();
var NumberColumn = /** @class */ (function () {
    function NumberColumn(state) {
        this.state = state;
        console.log("My first number is: ".concat(state));
    }
    NumberColumn.prototype.addNumber = function (number) {
        this.state = number;
        console.log("Add a new line: ".concat(number));
    };
    NumberColumn.prototype.save = function () {
        return new NumberColumnMemento(this.state);
    };
    NumberColumn.prototype.restore = function (memento) {
        this.state = memento.getState();
        console.log("Back one step: ".concat(this.state));
    };
    return NumberColumn;
}());
var NumberColumnMemento = /** @class */ (function () {
    function NumberColumnMemento(state) {
        this.state = state;
        this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    }
    NumberColumnMemento.prototype.getState = function () {
        return this.state;
    };
    NumberColumnMemento.prototype.getName = function () {
        return "".concat(this.date, " / (").concat(this.state, ")");
    };
    NumberColumnMemento.prototype.getDate = function () {
        return this.date;
    };
    return NumberColumnMemento;
}());
var Caretaker = /** @class */ (function () {
    function Caretaker(numberColumn) {
        this.mementos = [];
        this.numberColumn = numberColumn;
    }
    Caretaker.prototype.backup = function () {
        console.log('Saving last state');
        this.mementos.push(this.numberColumn.save());
    };
    Caretaker.prototype.undo = function () {
        if (!this.mementos.length) {
            return;
        }
        var memento = this.mementos.pop();
        console.log("Restoring state to: ".concat(memento.getName()));
        this.numberColumn.restore(memento);
    };
    Caretaker.prototype.showHistory = function () {
        console.log('Here is the list of mementos:');
        for (var _i = 0, _a = this.mementos; _i < _a.length; _i++) {
            var memento = _a[_i];
            console.log(memento.getName());
        }
    };
    return Caretaker;
}());
var numberColumn = new NumberColumn('1');
var caretaker = new Caretaker(numberColumn);
caretaker.backup();
numberColumn.addNumber('2');
caretaker.backup();
numberColumn.addNumber('3');
caretaker.backup();
numberColumn.addNumber('4');
console.log('');
caretaker.showHistory();
console.log('Step back');
caretaker.undo();
console.log('Step back');
caretaker.undo();
console.log('Step back');
caretaker.undo();
