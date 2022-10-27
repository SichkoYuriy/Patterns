// tsc command.ts && node command.js
var Database = /** @class */ (function () {
    function Database() {
    }
    Database.prototype.insert = function () {
        console.log('Inserting record...');
    };
    Database.prototype.update = function () {
        console.log('Updating record...');
    };
    Database.prototype.select = function () {
        console.log('Selecting record...');
    };
    Database.prototype.deletee = function () {
        console.log('Deleting record...');
    };
    return Database;
}());
var InsertCommand = /** @class */ (function () {
    function InsertCommand(database) {
        this.database = database;
    }
    InsertCommand.prototype.execute = function () {
        this.database.insert();
    };
    return InsertCommand;
}());
var UpdateCommand = /** @class */ (function () {
    function UpdateCommand(database) {
        this.database = database;
    }
    UpdateCommand.prototype.execute = function () {
        this.database.update();
    };
    return UpdateCommand;
}());
var SelectCommand = /** @class */ (function () {
    function SelectCommand(database) {
        this.database = database;
    }
    SelectCommand.prototype.execute = function () {
        this.database.select();
    };
    return SelectCommand;
}());
var DeleteCommand = /** @class */ (function () {
    function DeleteCommand(database) {
        this.database = database;
    }
    DeleteCommand.prototype.execute = function () {
        this.database.deletee();
    };
    return DeleteCommand;
}());
var Developer = /** @class */ (function () {
    function Developer(insert, update, select, deletee) {
        this.insert = insert;
        this.update = update;
        this.select = select;
        this.deletee = deletee;
    }
    Developer.prototype.insertRecord = function () {
        this.insert.execute();
    };
    Developer.prototype.updateRecord = function () {
        this.update.execute();
    };
    Developer.prototype.selectRecord = function () {
        this.select.execute();
    };
    Developer.prototype.deleteRecord = function () {
        this.deletee.execute();
    };
    return Developer;
}());
var database = new Database();
var developer = new Developer(new InsertCommand(database), new UpdateCommand(database), new SelectCommand(database), new DeleteCommand(database));
developer.insertRecord();
developer.updateRecord();
developer.selectRecord();
developer.deleteRecord();
