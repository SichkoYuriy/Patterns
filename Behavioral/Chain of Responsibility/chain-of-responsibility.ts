// интерфейс обработчика. объявляет метод построения цепочки обработчиков и метод для выполнения запроса
interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: string): string;
}

// базовый класс обработчика с реализацией
abstract class AbstractHandler implements Handler {
    private nextHandler: Handler;
    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }
    public handle(request: string): string {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    }
}

// Конкретный обработчик
class AudiHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request === 'Audi') {
            return `Audi factory: I will build the ${request}`
        }
        return super.handle(request);
    }
}

// Конкретный обработчик
class BMWHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request === 'BMW') {
            return `BMW factory: I will build the ${request}`
        }
        return super.handle(request);
    }
}

// Конкретный обработчик
class MercedesHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request === 'Mercedes') {
            return `Mercedes factory: I will build the ${request}`
        }
        return super.handle(request);
    }
}

function clientCode(handler: Handler) {
    const cars = ['Audi', 'BMW', 'Mercedes'];
    for (const car of cars) {
        console.log(`Government: Who will build ${car}?`);

        const result = handler.handle(car);
        if (result) {
            console.log(`   ${result}`);
        } else {
            console.log(`   ${car} was left without manufacturer.`);
        }
    }
}

const audi = new AudiHandler();
const bmw = new BMWHandler();
const mercedes = new MercedesHandler();

audi.setNext(bmw).setNext(mercedes);

console.log('Chain: Audi > BMW > Mercedes\n');
clientCode(audi);
console.log('');

console.log('Subchain: BMW > Mercedes\n');
clientCode(bmw);
console.log('');

console.log('Subchain: Mercedes\n');
clientCode(mercedes);



