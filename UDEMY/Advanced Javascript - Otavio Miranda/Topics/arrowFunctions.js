// This type of function is used to shorten method declarations and method bodies. For example, suppose you have an array 'brands':

const brands = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
];

// Function to find the brand with name "a":
// const brand = brands.find(function(brand){
// return brand.name === 'a';
// });

// Simplifying using Arrow:
const brand = brands.find(brand => brand.name === 'a');

console.log(brand);