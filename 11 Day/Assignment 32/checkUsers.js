var currentUsers = ["admin", "user1", "User2", "user3", "user4"];
var newUsers = ["Admin", "User1", "user5", "user6"];
newUsers.forEach(function (newUser) {
    if (currentUsers.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username"));
    }
    else {
        console.log("".concat(newUser, " is available"));
    }
});
