interface CreateAudi {
    model(): void;
    color(): void;
    wheelsSize(): void;
    transmission(): void;
}
class Builder implements CreateAudi {
    private car: Car;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.car = new Car();
    }

    public model(): void {
        this.car.parts.push('Your model');
    }

    public color(): void {
        this.car.parts.push('Your color');
    }

    public wheelsSize(): void {
        this.car.parts.push('Wheels size');
    }
    
    public transmission(): void {
        this.car.parts.push('Transmission');
    }

    public getCar(): Car {
        const result = this.car;
        this.reset();
        return result;
    }
}

class Car {
    public parts: string[] = [];

    public listParts(): void {
        console.log(`Car details: ${this.parts.join(', ')}\n`);
    }
}

class Director {
    private createAudi: CreateAudi;

    public setBuilder(createAudi: CreateAudi): void {
        this.createAudi = createAudi;
    }

    public buildStandartCar(): void {
        this.createAudi.model();
    }

    public buildFullFeaturedCar(): void {
        this.createAudi.model();
        this.createAudi.color();
        this.createAudi.wheelsSize();
        this.createAudi.transmission();
    }
}

function clientCode(director: Director) {
    const createAudi = new Builder();
    director.setBuilder(createAudi);

    console.log('Standard car:');
    director.buildStandartCar();
    createAudi.getCar().listParts();

    console.log('Full featured car:');
    director.buildFullFeaturedCar();
    createAudi.getCar().listParts();

    console.log('Custom car:');
    createAudi.model();
    createAudi.color();
    createAudi.transmission();
    createAudi.getCar().listParts();
}

const director = new Director();
clientCode(director);