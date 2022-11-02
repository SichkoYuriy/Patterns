var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ProjectManager = /** @class */ (function () {
    function ProjectManager(d, p, c) {
        this.designer = d;
        this.designer.setMediator(this);
        this.programmer = p;
        this.programmer.setMediator(this);
        this.client = c;
        this.client.setMediator(this);
    }
    ProjectManager.prototype.notify = function (sender, event) {
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
    };
    return ProjectManager;
}());
var BaseComponent = /** @class */ (function () {
    function BaseComponent(mediator) {
        this.mediator = mediator;
    }
    BaseComponent.prototype.setMediator = function (mediator) {
        this.mediator = mediator;
    };
    return BaseComponent;
}());
var Designer = /** @class */ (function (_super) {
    __extends(Designer, _super);
    function Designer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Designer.prototype.doDesign = function () {
        console.log('Designer working on design');
    };
    return Designer;
}(BaseComponent));
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Programmer.prototype.doCode = function () {
        console.log('Programmer working on code');
    };
    return Programmer;
}(BaseComponent));
var Client = /** @class */ (function (_super) {
    __extends(Client, _super);
    function Client() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Client.prototype.taskCode = function () {
        console.log('Client sets the task to make the code.');
        this.mediator.notify(this, 'Do code');
    };
    Client.prototype.taskDesign = function () {
        console.log('Client sets the task to make the design.');
        this.mediator.notify(this, 'Do design');
    };
    Client.prototype.taskProject = function () {
        console.log('Client sets the task to make the project.');
        this.mediator.notify(this, 'Do project');
    };
    return Client;
}(BaseComponent));
var d = new Designer();
var p = new Programmer();
var c = new Client();
var mediator = new ProjectManager(d, p, c);
c.taskCode();
console.log('');
c.taskDesign();
console.log('');
c.taskProject();
// tsc mediator.ts && node mediator.js
