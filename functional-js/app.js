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

// every/some

// var goodUsers = [
//     { id: 1},
//     { id: 2},
//     { id: 3}
// ];

// var moarGoodUsers = [
//     { id: 1},
//     { id: 2},
//     { id: 3}
// ];

// var badUsers = [
//     { id: 4},
//     { di: 8},
//     { id: 3}
// ];

// function checkUsersValid(goodUsers) {
//     return function allUsersValid(submittedUsers) {
//         return submittedUsers.every(function(users, index) {
//             console.log("first: ", users, goodUsers[index]);
//             console.log("second: ", users === goodUsers[index]);
//         });
//     };
// }

// var testAllValid = checkUsersValid(goodUsers);
// console.log(testAllValid(moarGoodUsers));




