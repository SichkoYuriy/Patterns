// интерфейс компонента... метод accept в качестве аргумента получает любой объект, реализующий интерфейс посетителя.
interface Car {
    accept(visitor: Visitor): void;
}

class Engine implements Car {
    accept(visitor: Visitor): void {
        visitor.visitEngine(this);
    }
}
class Transmission implements Car {
    accept(visitor: Visitor): void {
        visitor.visitTransmission(this);
    }
}
// интерфейс посетителя...имеет методы посещения соответствующих классов компонентов
interface Visitor {
    visitEngine(element: Engine): void;

    visitTransmission(element: Transmission): void;
}

class Mechanic implements Visitor {
    visitEngine(element: Engine): void {
        console.log(`Mechanic: Repairing the engine`)
    }
    visitTransmission(element: Transmission): void {
        console.log(`Mechanic: Repairing the transmission`)
    }
}

class Diagnostician implements Visitor {
    visitEngine(element: Engine): void {
        console.log(`Diagnostician: Inspects the engine`)
    }
    visitTransmission(element: Transmission): void {
        console.log(`Diagnostician: Inspects the transmission`)
    }
} 

function clientCode(components: Car[], visitor: Visitor) {
    for (const component of components) {
        component.accept(visitor);
    }
}
const components = [new Engine(),new Transmission(),];

const mechanic = new Mechanic();
clientCode(components, mechanic);
console.log('');
const diagnostician = new Diagnostician();
clientCode(components, diagnostician);
