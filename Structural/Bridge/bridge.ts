// это абстракция которая содержит логику и делигирует реальную работу объекту реализации
class Remote {
    protected device: Device;
    constructor(device: Device) {
        this.device = device;
    }
    
    powerOn(): void {
        this.device.turnOn();
    }
    powerOff(): void {
        this.device.turnOff();
    }
    volumeUp(): void {
        this.device.increaseVolume();
    }
    volumeDown(): void {
        this.device.decreaseVolume();
    }
    channelUp(): void {
        this.device.nextChannel();
    }
    channelDown(): void {
        this.device.prevChannel();
    }
}

// реализация - общий интерфейс для конкретной реализации
interface Device {
    turnOn(): void;
    turnOff(): void;
    increaseVolume(): void;
    decreaseVolume(): void;
    nextChannel(): void;
    prevChannel(): void;
}

// Конкретная реализация
class TV implements Device {
    turnOn(): void {
        console.log('TV: Device is on.')
    }
    turnOff(): void {
        console.log('TV: Device is off.')
    }
    increaseVolume(): void {
        console.log('TV: Volume increased.')
    }
    decreaseVolume(): void {
        console.log('TV: Volume decreased.')
    }
    nextChannel(): void {
        console.log('TV: Channel changed to next.')
    }
    prevChannel(): void {
        console.log('TV: Channel changed to prev.')
    }
}

// Конкретная реализация
class Radio implements Device {
    turnOn(): void {
        console.log('Radio: Device is on.')
    }
    turnOff(): void {
        console.log('Radio: Device is off.')
    }
    increaseVolume(): void {
        console.log('Radio: Volume increased.')
    }
    decreaseVolume(): void {
        console.log('Radio: Volume decreased.')
    }
    nextChannel(): void {
        console.log('Radio: Channel changed to next.')
    }
    prevChannel(): void {
        console.log('Radio: Channel changed to prev.')
    }
}

const tv = new TV();
const remote = new Remote(tv);
remote.powerOn();
remote.channelUp();
remote.volumeDown();
remote.powerOff();

console.log('');

const radio = new Radio();
const remote2 = new Remote(radio);
remote2.powerOn();
remote2.channelUp();
remote2.channelDown();
remote2.volumeDown();
remote2.volumeUp();
remote2.powerOff();