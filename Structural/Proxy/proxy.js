var RealDatabase = /** @class */ (function () {
    function RealDatabase() {
    }
    RealDatabase.prototype.connect = function () {
        console.log('Real Database: Connection successful.');
    };
    return RealDatabase;
}());
var ProxyDatabase = /** @class */ (function () {
    function ProxyDatabase(realDatabase) {
        this.realDatabase = realDatabase;
    }
    ProxyDatabase.prototype.connect = function () {
        if (this.checkAccess()) {
            this.realDatabase.connect();
            this.logTime();
        }
    };
    ProxyDatabase.prototype.checkAccess = function () {
        console.log('Proxy: Checking systems before connection...');
        return true;
    };
    ProxyDatabase.prototype.logTime = function () {
        console.log('Proxy: Logging the time of connect.');
    };
    return ProxyDatabase;
}());
function clientCode(database) {
    database.connect();
}
console.log('Client: Connecting to database with a RealDataBase:');
var realDatabase = new RealDatabase();
clientCode(realDatabase);
console.log('');
console.log('Client: Connecting to database with a ProxyDataBase:');
var proxyDataBase = new ProxyDatabase(realDatabase);
clientCode(proxyDataBase);
