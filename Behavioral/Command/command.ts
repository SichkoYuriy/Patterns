// база данных с определённым набором операций
class Database {
    insert(): void {
        console.log('Inserting record...')
    }
    update(): void {
        console.log('Updating record...')
    }
    select(): void {
        console.log('Selecting record...')
    }
    deletee(): void {
        console.log('Deleting record...')
    }
}

// интерфейс для всех команд
interface Command {
    execute(): void;
}
// конкретная команда
class InsertCommand implements Command {
    public database: Database;
    constructor(database: Database) {
        this.database = database;
    }
    execute(): void {
        this.database.insert();
    }
}
// конкретная команда
class UpdateCommand implements Command {
    public database: Database;
    constructor(database: Database) {
        this.database = database;
    }
    execute(): void {
        this.database.update();
    }
}
// конкретная команда
class SelectCommand implements Command {
    public database: Database;
    constructor(database: Database) {
        this.database = database;
    }
    execute(): void {
        this.database.select();
    }
}
// конкретная команда
class DeleteCommand implements Command {
    public database: Database;
    constructor(database: Database) {
        this.database = database;
    }
    execute(): void {
        this.database.deletee();
    }
}

// класс разработчк который работает с базой данных
class Developer {
    public insert: Command;
    public update: Command;
    public select: Command;
    public deletee: Command;
    constructor (insert: Command,update: Command,select: Command,deletee: Command) {
        this.insert = insert;
        this.update = update;
        this.select = select;
        this.deletee = deletee;
    }

    insertRecord(): void {
        this.insert.execute();
    }
    updateRecord(): void {
        this.update.execute();
    }
    selectRecord(): void {
        this.select.execute();
    }
    deleteRecord(): void {
        this.deletee.execute();
    }
}

const database: Database = new Database();
// передаём в разработчик наши команды 
const developer: Developer = new Developer(
    new InsertCommand(database),
    new UpdateCommand(database),
    new SelectCommand(database),
    new DeleteCommand(database)
);
developer.insertRecord();
developer.updateRecord();
developer.selectRecord();
developer.deleteRecord();


