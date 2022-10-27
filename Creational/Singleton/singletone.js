var dataBase = /** @class */ (function () {
    function dataBase() {
    }
    dataBase.getInstance = function () {
        if (!dataBase.instance) {
            dataBase.instance = new dataBase();
        }
        return dataBase.instance;
    };
    return dataBase;
}());
function acessToDataBase() {
    var s1 = dataBase.getInstance();
    var s2 = dataBase.getInstance();
    console.log(s1);
    console.log(s2);
    if (s1 === s2)
        console.log('Singletone is working');
}
acessToDataBase();
