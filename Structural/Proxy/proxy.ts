interface Database {
    connect(): void;
}

class RealDatabase implements Database {
    public connect(): void {
        console.log('Real Database: Connection successful.');
    }
}

class ProxyDatabase implements Database {
    private realDatabase: RealDatabase;
    constructor(realDatabase: RealDatabase) {
        this.realDatabase = realDatabase;
    }
    public connect(): void {
        if (this.checkAccess()) {
            this.realDatabase.connect();
            this.logTime();
        }
    }
    private checkAccess(): boolean {
        console.log('Proxy: Checking systems before connection...');
        return true;
    }
    private logTime(): void {
        console.log('Proxy: Logging the time of connect.');
    }
}

function clientCode(database: Database) {
    database.connect();
}
console.log('Client: Connecting to database with a RealDataBase:');
const realDatabase = new RealDatabase();
clientCode(realDatabase);

console.log('');

console.log('Client: Connecting to database with a ProxyDataBase:');
const proxyDatabase = new ProxyDatabase(realDatabase);
clientCode(proxyDatabase);