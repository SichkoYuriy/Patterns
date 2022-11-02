// Абстрактная фабрика. содержит методы создания всех продуктов семейства
interface DesignFactory {
    createButton(): Button;
    createInput(): Input;
}

// Конкретная фабрика
class WinFactory implements DesignFactory {
    public createButton(): Button {
    return new WinButton();
    }
    public createInput(): Input {
    return new WinInput();
    }
}
// Конкретная фабрика
class MacFactory implements DesignFactory {
    public createButton(): Button {
    return new MacButton();
    }
    public createInput(): Input {
    return new MacInput();
    }
}

// Абстрактный продукт
interface Button {
    buttonDesign(): string;
}

// Конкретный продукт
class WinButton implements Button {
    public buttonDesign(): string {
        return 'Button has a white background and black text';
    }
}

// Конкретный продукт
class MacButton implements Button {
    public buttonDesign(): string {
        return 'Button has a black background and white text';
    }
}

// Абстрактный продукт
interface Input {
    inputDesign(): string;
}

// Конкретный продукт
class WinInput implements Input {
    public inputDesign(): string {
        return 'Input has a white background and black text';
    }
}

// Конкретный продукт
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

