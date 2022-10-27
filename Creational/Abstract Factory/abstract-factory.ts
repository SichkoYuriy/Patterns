//Абстрактная фабрика
interface DesignFactory {
    createButton(): Button;
    createInput(): Input;
}


//Конкретная фабрика1
class WinFactory implements DesignFactory {
    public createButton(): Button {
    return new WinButton();
    }
    public createInput(): Input {
    return new WinInput();
    }
}

//Конкретная фабрика2
class MacFactory implements DesignFactory {
    public createButton(): Button {
    return new MacButton();
    }
    public createInput(): Input {
    return new MacInput();
    }
}

//Абстрактный продукт1
interface Button {
    buttonDesign(): string;
}

//Конкретный продукт1-1
class WinButton implements Button {
    public buttonDesign(): string {
        return 'Button has a white background and black text';
    }
}

//Конкретный продукт1-2
class MacButton implements Button {
    public buttonDesign(): string {
        return 'Button has a black background and white text';
    }
}

//Абстрактный продукт2
interface Input {
    inputDesign(): string;
}

//Конкретный продукт2-1
class WinInput implements Input {
    public inputDesign(): string {
        return 'Input has a white background and black text';
    }
}

//Конкретный продукт2-2
class MacInput implements Input {
    public inputDesign(): string {
        return 'Input has a black background and white text';
    }
}

function clientCode(factory: DesignFactory) {
    const button = factory.createButton();
    const input = factory.createInput();

    console.log(button.buttonDesign());
    console.log(input.inputDesign());
}

clientCode(new WinFactory());
clientCode(new MacFactory());

