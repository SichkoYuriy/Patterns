var Audi = /** @class */ (function () {
    function Audi(model, price, color, transmission) {
        this.model = model;
        this.price = price;
        this.color = color;
        this.transmission = transmission;
        this.model = model;
        this.color = color;
        this.price = price;
        this.transmission = transmission;
    }
    Audi.prototype.getClone = function () {
        return new Audi(this.model, this.price, this.color, this.transmission);
    };
    return Audi;
}());
var audi = new Audi('E-tron', 100000, 'black', 'automatic');
console.log(audi);
var audi1 = audi.getClone();
audi1.price = 89000;
audi1.transmission = 'manual';
console.log(audi1);
var audi2 = audi.getClone();
audi2.color = 'white';
console.log(audi2);
var audi3 = audi.getClone();
audi3.transmission = 'robot';
audi3.color = 'green';
audi1.price = 119000;
console.log(audi3);
