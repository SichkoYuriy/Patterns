// хранит общую часть информации и принимает уникальную информацию объекта через параметры метода operation
class Flyweight {
    private sharedState: any;
    constructor(sharedState: any) {
        this.sharedState = sharedState;
    }

    // JSON.stringify()преобразует значение JavaScript в строку JSON
    public operation(uniqueState): void {
        const shared = JSON.stringify(this.sharedState);
        const unique = JSON.stringify(uniqueState);
        console.log(`Flyweight:Displaying shared (${shared}) and unique (${unique}) state. `)
    }
}

// FlyweightFactory. Создаёт и управляет легковесами.Когда клиент запрашивает легковес то он либо возвращает существующий либо создаёт новый в методе getFlyweight
class CarFactory {
    private flyweights: { [key: string]: Flyweight } = <any>{};
    constructor(initialFlyweights: string[][]) {
        for (const state of initialFlyweights) {
            this.flyweights[this.getKey(state)] = new Flyweight(state);
        }
    }

    private getKey(state: string[]): string{
        return state.join('_')
    }

    public getFlyweight(sharedState: string[]): Flyweight {
        const key = this.getKey(sharedState);
        if (!(key in this.flyweights)) {
            console.log('CarFactory: Can\'t find a flyweight, creating new one.');
            this.flyweights[key] = new Flyweight(sharedState);
        } else {
            console.log('CarFactory: Reusing existing flyweight.');
        }
        return this.flyweights[key];
    }

    // Object.keys возвращает массив имен свойств данного объекта 
    public listFlyweights(): void {
        const count = Object.keys(this.flyweights).length;
        console.log(`\nCarFactory: I have ${count} flyweights:`);
        for (const key in this.flyweights) {
            console.log(key);
        }
    }
}

const carFactory = new CarFactory([
    ['Audi', 'E-tron', 'black', '2020'],
    ['BMW', 'X5', 'green', '2021'],
    ['Mercedes','S-class','grey','2022'],
]);

carFactory.listFlyweights();

function addToDatabase(cf: CarFactory, vin: string, owner: string,
    brand: string, model: string, color: string, year: string) {
    console.log('\nClient: Adding a car to database.');
    const flyweight = cf.getFlyweight([brand, model, color, year]);
    flyweight.operation([vin, owner]);
}

addToDatabase(carFactory, 'ZFA22300005556777', 'Brad Pitt', 'Ferrari', '296GTB', 'red', '2022');
addToDatabase(carFactory, 'JDA22300001515165', 'Tom Cruize', 'Lamborgini', 'Aventador', 'grey', '2020');
addToDatabase(carFactory, 'JDA22315151515165', 'Tom Hardy', 'Lamborgini', 'Aventador', 'grey', '2020');

carFactory.listFlyweights();