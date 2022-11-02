// юазовый интерфейс Компонента определяет поведение, которое изменяется декораторами
interface Component {
    operation(): string;
}

// конкреный компонент
class Phone implements Component {
    public operation(): string {
        return 'Телефон'
    }
}

// общий интерфейс для конкретных декораторов
class Decorator implements Component {
    protected component: Component;
    constructor(component: Component) {
        this.component = component;
    }
    public operation(): string {
        return this.component.operation();
    }
}

// конкретный декоратор
class Box extends Decorator {
    public operation(): string {
        return `Коробка(${super.operation()})`;
    }
}
// конкретный декоратор
class Parcell extends Decorator {
    public operation(): string {
        return `Подарочная упаковка(${super.operation()})`;
    }
}
// конкретный декоратор
class Parcell2 extends Decorator {
    public operation(): string {
        return `Обычная упаковка(${super.operation()})`;
    }
}


function clientCode(component: Component) {
    console.log(`Создано: ${component.operation()}`);
}

const phone = new Phone();
const decorator = new Parcell(new Box(phone));
console.log('Создадим телефон в подарочной упаковке')
clientCode(decorator);
console.log('');
const decorator1 = new Parcell2(new Box(phone));
console.log('Создадим телефон в обычной упаковке')
clientCode(decorator1);
