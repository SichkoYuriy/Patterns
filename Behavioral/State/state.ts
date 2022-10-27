class Car {
    private state: State;
    constructor(state: State) {
        this.transitionTo(state);
    }
    public transitionTo(state: State): void {
        console.log(`Car state is ${(<any>state).constructor.name}.`);
        this.state = state;
        this.state.setCar(this);
    }
    public drive(): void {
        this.state.normal();
    }

    public notDrive(): void {
        this.state.broken();
    }
}
abstract class State {
    protected car: Car;

    public setCar(car: Car) {
        this.car = car;
    }

    public abstract normal(): void;

    public abstract broken(): void;
}

class Normal extends State {
    public  normal(): void{
        console.log('The car is ready to use. Enjoy the ride.')
        console.log('Ooooooops, something went wrong...');
        this.car.transitionTo(new Broken());
    }
    public broken(): void{}
}
class Broken extends State {
    public  normal(): void{}
    public broken(): void{
        console.log('The car is broken. Please replace the broken parts.');
        console.log('Broken parts replaced');
        this.car.transitionTo(new Normal());
    }
}

const car = new Car(new Normal());
car.drive();
car.notDrive();
