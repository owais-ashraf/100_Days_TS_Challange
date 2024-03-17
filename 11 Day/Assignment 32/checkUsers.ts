let currentUsers : string[] = ["admin", "user1", "User2", "user3", "user4"];
let newUsers : string[] = ["Admin", "User1", "user5", "user6"];

newUsers.forEach(newUser => {
    if(currentUsers.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username`);
    }else {
        console.log(`${newUser} is available`);
    }
}
)
