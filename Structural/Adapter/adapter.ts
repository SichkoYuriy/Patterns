// Целевой класс, с которым работает клиентский код
class Target {
    public request(c:number): number {
        return c;
    }
}

// класс который нуждается в адаптации
class Adaptee {
    public celsiumToFahrenheitRequest(c:number): number {
        return c;
    }
}

// адаптирует Adaptee к Target
class Adapter extends Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        super();
        this.adaptee = adaptee;
    }

    public request(c:number): number {
        const result = this.adaptee.celsiumToFahrenheitRequest(c);
        return c = (c * 1.8) + 32;
    }
}

function clientCode(targer: Target) {
    console.log(targer.request(36));
}
console.log('Celsium to fahrenheit converter :');
const adaptee = new Adaptee();
console.log('Enter celsium value:');
console.log(`${adaptee.celsiumToFahrenheitRequest(36)}`);

console.log('Converting...')
const adapter = new Adapter(adaptee);
clientCode(adapter);
