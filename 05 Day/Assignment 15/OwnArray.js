var GuestLists = ["Arham", "Asad", "Saad", "Fahad"];
console.log("".concat(GuestLists[3], " will not make it to Dinner"));
var NotComing = GuestLists[3]; //you can also put name from the array 
var newGuest = "Hadi";
GuestLists[GuestLists.indexOf(NotComing)] = newGuest;
GuestLists.forEach(function (GuestList) {
    console.log("Dear ".concat(GuestList, ", would you like to join"));
});
