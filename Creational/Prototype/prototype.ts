class Audi {
    constructor(public model: string,public price: number,public color: string,public transmission: string) {
        this.model = model;
        this.color = color;
        this.price = price;
        this.transmission = transmission;
    }
    getClone() {
        return new Audi(this.model, this.price, this.color, this.transmission);
    }
}
const audi = new Audi('E-tron', 100000, 'black', 'automatic');
console.log(audi); 

const audi1 = audi.getClone();
audi1.price = 89000;
audi1.transmission = 'manual';
console.log(audi1); 


const audi2 = audi.getClone();
audi2.color = 'white';
console.log(audi2); 


const audi3 = audi.getClone();
audi3.transmission = 'robot';
audi3.color = 'green';
audi1.price = 119000;
console.log(audi3); 



