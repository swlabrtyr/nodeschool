/*
  every/some
 */

var goodUsers = [
    { id: 1},
    { id: 2},
    { id: 3}
];

var moarGoodUsers = [
    { id: 1},
    { id: 2},
    { id: 3}
];

var badUsers = [
    { id: 4},
    { di: 8},
    { id: 3}
];

function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function(users, index) {
            console.log("first: ", users, goodUsers[index]);
            console.log("second: ", users === goodUsers[index]);
        });
    };
}

var testAllValid = checkUsersValid(goodUsers);
console.log(testAllValid(moarGoodUsers));
