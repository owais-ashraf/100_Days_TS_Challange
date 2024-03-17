// Method 1: To remove an element from the array
var GuestLists = ["Arham", "Asad", "Saad", "Fahad", "Tahir"]; //made an array
console.log("Due to some issue, I can't invite all of you, inviting only two people"); // console message
GuestLists.shift(); //delete first element from the array
for (var i = GuestLists.length - 1; i > 1; i--) { //-1 starts from the end of an array
    var removeGuest = GuestLists[i];
    console.log("Sorry ".concat(removeGuest, " you are not invited"));
    GuestLists.splice(i, 1); // -1 back se array shuru karega, i ki jo value hogi us se ek remove kr dega
}
GuestLists.forEach(function (GuestList) {
    console.log("Dear ".concat(GuestList, ", you are invited"));
});
// Method 2: TO remove an element from the array through pop method, pop()
var NewGuestLists = ["Arham", "Asad", "Saad", "Fahad"];
for (var i = NewGuestLists.length - 1; i >= 0; i--) {
    NewGuestLists.pop();
}
console.log(NewGuestLists);
