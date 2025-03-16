// In shop.js, require the product objects from the products.js module.
const products = require('./products');

// // Create a function that takes a product name as a parameter and searches for the corresponding product object.
const findProduct = (productName) => {
    const product = products.find(product => product.name === productName);
    return product;
}

// Call this function with different product names and print the details of the products.
console.log(findProduct('Iphone'));
console.log(findProduct('TV'));
console.log(findProduct('apple'));





