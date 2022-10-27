abstract class CreateCar {
    public abstract factoryMethod(): Car;
    public method(): string {
      const  car = this.factoryMethod();
        return car.brand() + car.color() + car.transmission() + car.maxSpeed();
    }
}

class CreateAudi extends CreateCar {
    public factoryMethod(): Car {
        return new Audi();
    }
}
class CreateBMW extends CreateCar {
    public factoryMethod(): Car {
        return new BMW();
    }
}

interface Car {
    brand(): string;
    color(): string;
    transmission(): string;
    maxSpeed(): string;
}
class Audi implements Car {
    public brand(): string {
        return `Car brand is Audi. `
    }
    public color(): string {
        return `Car color is green. `
    }
    public transmission(): string {
        return `Car transmission is automatic. `
    }
    public maxSpeed(): string {
        return `Car maximum speed is 300 km/h.`
    }
}
class BMW implements Car {
    public brand(): string {
        return `Car brand is BMW. `
    }
    public color(): string {
        return `Car color is black. `
    }
    public transmission(): string {
        return `Car transmission is manual. `
    }
    public maxSpeed(): string {
        return `Car maximum speed is 290 km/h.`
    }
}
function clientCode(creator: CreateCar) {
    console.log(creator.method())
}
clientCode(new CreateAudi);
clientCode(new CreateBMW);


