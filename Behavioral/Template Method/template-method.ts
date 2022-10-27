abstract class BuildCar {
    public templateMethod(): void {
        this.createCarBody();
        this.installElectronics();
        this.hook1();
        this.installWheels();
        this.tintedWindows();
        this.installVoiceAssistant();
        this.hook2();
        this.finish();
    }
    protected createCarBody(): void {
        console.log('Builder: Car body created.');
    }
    protected installElectronics(): void {
        console.log('Builder: Electronics installed.');
    }
    protected installWheels(): void {
        console.log('Builder: Wheels installed.');
    }
    protected finish(): void {
        console.log('Builder: Car builded.')
    }
    protected abstract tintedWindows(): void;
    protected abstract installVoiceAssistant(): void;

    protected hook1(): void { }
    protected hook2(): void { }

}

class ConcreteCar1 extends BuildCar {
    protected tintedWindows(): void {
        console.log('Builder: Windows tinted.');
    }
    protected installVoiceAssistant(): void {
        console.log('Builder: Voice assistant not installed.');
    }
}
class ConcreteCar2 extends BuildCar {
    protected tintedWindows(): void {
        console.log('Builder: Windows not tinted.');
    }
    protected installVoiceAssistant(): void {
        console.log('Builder: Voice assistant not installed.');
    }
    protected hook2(): void {
        console.log('Builder: Board computer replaced. ')
    }
}

function clientCode(buildCar: BuildCar) {
    buildCar.templateMethod();
}
console.log('Build first car');
clientCode(new ConcreteCar1());
console.log('');
console.log('Build second car');
clientCode(new ConcreteCar2());
