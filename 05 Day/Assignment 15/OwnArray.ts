let GuestLists : string[] = ["Arham", "Asad", "Saad", "Fahad"]; 
console.log(`${GuestLists[3]} will not make it to Dinner`);
let NotComing = GuestLists[3]; //you can also put name from the array 
let newGuest = "Hadi";
GuestLists[GuestLists.indexOf(NotComing)] = newGuest;
GuestLists.forEach(GuestList => {
console.log(`Dear ${GuestList}, would you like to join`);
});