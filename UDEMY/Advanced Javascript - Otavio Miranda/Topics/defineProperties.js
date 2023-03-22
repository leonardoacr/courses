// Defining properties for objects:
function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    Object.defineProperty(this, 'stock', {
        enumerable: true, // shows the key
        value: stock, // value
        writable: true, // can change the values
        configurable: true // configurable
    });

    // Another way to define properties but more than one:
    Object.defineProperties(this, {
        name: {
            enumerable: true, // shows the key
            value: name, // value
            writable: true, // can change the values
            configurable: true // configurable
        },
        price: {
            enumerable: true, // shows the key
            value: price, // value
            writable: false, // can't change the values (blocking the price from being changed)
            configurable: true // configurable
        },
    });
}

const p1 = new Product('T-shirt', 20, 3);
console.log(p1);

// Attempt to change the price and stock (price is blocked)
p1.price = 30;
p1.stock = 2;
console.log(p1);