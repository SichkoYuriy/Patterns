class dataBase {
    private static instance: dataBase;
    private constructor() {}
    public static getInstance() :dataBase {
        if (!dataBase.instance) {
            dataBase.instance = new dataBase();
        } return dataBase.instance;
    }
}

function acessToDataBase() {
    const s1 = dataBase.getInstance();
    const s2 = dataBase.getInstance();
    console.log(s1);
    console.log(s2);
    if (s1 === s2) {
        console.log('Singletone is working');
    } 
        console.log('Singletone is not working');
}
acessToDataBase();