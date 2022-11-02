//  фасад. делегирует запросы клиентов соответствующим объектам внутри подсистемы
class Computer {
    protected power: Power;
    protected data: Data;
    protected errors: ErrorsCheck;

    constructor(power?: Power, data?: Data, errors?: ErrorsCheck) {
        this.power = power || new Power();
        this.data = data || new Data();
        this.errors = errors || new ErrorsCheck();
    }
    public operation(): string {
        let result = '';
        result += this.power.powerOn();
        result += this.data.startLoad();
        result += this.data.endLoad();
        result += this.errors.startCheck();
        result += this.errors.endCheck();
        result += this.power.powerOff();
        return result;
    }
}
// подсистема
class Power {
    powerOn():string {
    return 'Computer is on \n'
    }

    powerOff():string {
    return 'Computer is off \n'
    }
}
// подсистема
class Data {
    startLoad(): string {
        return 'Start downloading data...\n'
    }
    endLoad(): string {
        return 'The data is loaded.\n'
    }
}
// подсистема
class ErrorsCheck {
    startCheck(): string {
        return 'Error checking started...\n'
    }
    endCheck(): string {
        return 'Error checking finished. Errors not found.\n'
    }
}


function clientCode(computer: Computer) {
    console.log(computer.operation());
}


const computer = new Computer();
clientCode(computer);