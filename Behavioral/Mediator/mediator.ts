interface Mediator {
    notify(sender: object, event: string): void;
}

// конкретный посредник
class ProjectManager implements Mediator {
    private designer: Designer;
    private programmer: Programmer;
    private client: Client;

    constructor(d: Designer, p: Programmer, c: Client) {
        this.designer = d;
        this.designer.setMediator(this);
        this.programmer = p;
        this.programmer.setMediator(this);
        this.client = c;
        this.client.setMediator(this);
    }
    public notify(sender: object, event: string): void {
        if (event === 'Do design') {
            console.log('Project manager reacts on do design and triggers folowing employee:');
            this.designer.doDesign();
        }
        if (event === 'Do code') {
            console.log('Project manager reacts on do code and triggers folowing employee:');
            this.programmer.doCode();
        }
        if (event === 'Do project') {
            console.log('Project manager reacts on do project and triggers folowing employee:');
            this.designer.doDesign();
            this.programmer.doCode();
         }
    }
}
// базовый компонент обеспечивает базовую функциональность хранения 
// экземпляра посредника внутри объектов компонентов.
class BaseComponent {
    protected mediator: Mediator;

    constructor(mediator?: Mediator) {
        this.mediator = mediator!;
    }

    public setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }
}

class Designer extends BaseComponent {
    public doDesign(): void {
        console.log('Designer working on design');
    }
}
class Programmer extends BaseComponent {
    public doCode(): void {
        console.log('Programmer working on code');
    }
}
class Client extends BaseComponent {
    public taskCode(): void {
        console.log('Client sets the task to make the code.');
        this.mediator.notify(this, 'Do code');
    }
    public taskDesign(): void {
        console.log('Client sets the task to make the design.');
        this.mediator.notify(this, 'Do design');
    }
    public taskProject(): void {
        console.log('Client sets the task to make the project.');
        this.mediator.notify(this, 'Do project');
    }
}
const d = new Designer();
const p = new Programmer();
const c = new Client();
const mediator = new ProjectManager(d, p, c);

c.taskCode();
console.log('');
c.taskDesign();
console.log('');
c.taskProject();

// tsc mediator.ts && node mediator.js