// reduce

var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];

function countWords(array) {
    return array.reduce(function(basket, fruit) {        
        console.log(basket[fruit] = ++basket[fruit] || 1);
        return basket;
    }, {});
} 

console.log(countWords(inputWords));

module.exports = countWords;
