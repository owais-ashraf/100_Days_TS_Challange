// Method 1: To remove an element from the array
let GuestLists: string[] = ["Arham", "Asad", "Saad", "Fahad", "Tahir"]; //made an array
console.log(
  "Due to some issue, I can't invite all of you, inviting only two people"
); // console message
GuestLists.shift(); //delete first element from the array
for (let i = GuestLists.length - 1; i > 1; i--) { //-1 starts from the end of an array
  let removeGuest = GuestLists[i]; 
  console.log(`Sorry ${removeGuest} you are not invited`);
  GuestLists.splice(i, 1); // -1 back se array shuru karega, i ki jo value hogi us se ek remove kr dega
}
GuestLists.forEach((GuestList) => {
  console.log(`Dear ${GuestList}, you are invited`);
});

// Method 2: TO remove an element from the array through pop method, pop()
let NewGuestLists: string[] = ["Arham", "Asad", "Saad", "Fahad"];
for (let i = NewGuestLists.length - 1; i >= 0; i--) {
  NewGuestLists.pop();
}
console.log(NewGuestLists);
