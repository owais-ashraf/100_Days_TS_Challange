var GuestLists = ["Arham", "Asad", "Saad", "Fahad"];
console.log("we have expanded our table, and inviting more guest");
GuestLists.unshift("Zayan");
GuestLists.splice(2, 0, "Ayan", "Ali");
GuestLists.push("Fazil");
GuestLists.forEach(function (GuestList) {
    console.log("Dear ".concat(GuestList, ", would you like to join"));
});
