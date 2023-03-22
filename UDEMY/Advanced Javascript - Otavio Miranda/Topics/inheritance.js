// Creating an example of Inheritance with constructor functions
// Having the constructor function
function Product(nome, price) {
    this.nome = nome;
    this.price = price;
}

// Creating prototypes for increase and decrease
Product.prototype.increase = function (percentual) {
    this.price = this.price + (this.price * (percentual / 100));
};

Product.prototype.discount = function (percentual) {
    this.price = this.price - (this.price * (percentual / 100));
}

// Creating another constructor function that will inherit the prototypes from the superior function
function TShirt(nome, price, cor) {
    Product.call(this, nome, price); // Calls the methods from the Product function
    this.cor = cor;
}

// Inheriting the prototype from the Product function:
TShirt.prototype = Object.create(Product.prototype);
TShirt.prototype.constructor = TShirt;

const product = new Product('Gen', 111);
let shirtA = new TShirt('Tank top', 35, 'Black');

console.log(shirtA);

// Applying increase:

shirtA = shirtA.increase(100);

console.log(shirtA); // The result can only be seen in the Live Server console