//  общий интерфейс для простых и составных компонентов дерева
abstract class Component {
    protected parent!: Component | null;

    public setParent(parent: Component | null) {
        this.parent = parent;
    }
    public getParent(): Component | null {
        return this.parent;
    }

    public add(component: Component): void { }

    public remove(component: Component): void { }

    public abstract operation(): string;
}

//  простой компонент коробки
class Phone extends Component {
    public operation(): string {
        return 'Phone';
    }
}
//  простой компонент коробки
class Case extends Component {
    public operation(): string {
        return 'Case';
    }
}
//  простой компонент коробки
class AirPods extends Component {
    public operation(): string {
        return 'AirPods';
    }
}

//  составной компонент коробки
class Composite extends Component {
    protected children: Component[] = [];

    public add(component: Component): void {
        this.children.push(component);
        component.setParent(this);
    }

    public remove(component: Component): void {
        const componentIndex = this.children.indexOf(component);
        this.children.splice(componentIndex, 1);

        component.setParent(null);
    }

    // перебором вызывает метод operation у всех своих компонентов.Таким образом можно дойти до самого глубокого уровня дерева
    public operation(): string {
        const results  = [];
        for (const child of this.children) {
            results.push(child.operation());
        }
        return `Box(${results.join('+')})`;
    }
}


function clientCode(component: Component) {
    console.log(`Package content: ${component.operation()}`);
}
const box = new Composite();
box.add(new Phone());


const box1 = new Composite();
box1.add(new Phone());
box1.add(new Case());
box1.add(new AirPods());


const box2 = new Composite();
box2.add(new Phone());
box2.add(new AirPods());
box.add(box1);
box.add(box2);


clientCode(box);


