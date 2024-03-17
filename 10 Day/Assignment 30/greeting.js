var users = ["admin", "user1", "user2", "user3", "user4"];
users.forEach(function (user) {
    if (user == "admin") {
        console.log("Hey Admin 'You are our cheif guest'");
    }
    else {
        console.log("hello ".concat(user, " thankyou for coming"));
    }
});
