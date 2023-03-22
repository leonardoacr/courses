//-----------------------------------------\-----------------------------------------//
// 'Filter' method:
// Given an array in the following format:
const dados = [
    '$ 200',
    '$ 500',
    '$ 100',
    'Bills to pay',
    '$ 700',
    '$ 600',
    'My data'
];

// Creating a Filter array to filter the data that includes the currency symbol:
// const pricesFilter = dados.filter(function (price) {
// return price.includes("R$");
// });

// Or, in a simplified way:
const pricesFilter = dados.filter(price => price.includes("R$"));

// Using Map to alter the array, removing the currency symbol and transforming string into number.
const pricesNumbers = pricesFilter.map(price => Number(price.replace('$ ', '')));

// Using Reduce to sum the values of the array:
const total = pricesNumbers.reduce((preview, actual) => preview + actual);

console.log('Filtered numbers: ', pricesFilter);
console.log('Numbers without currency symbol: ', pricesNumbers);
console.log('Total: ', total);