let GuestLists : string[] = ["Arham", "Asad", "Saad", "Fahad"]; //made a Array 
console.log("we have expanded our table, and inviting more guest");
GuestLists.unshift("Zayan"); //yeah Array me first Index me add kr dega
GuestLists.splice(2,0, "Ayan", "Ali"); /*splice add bh krta hai aur delete bh to 2nd Index se add karega 
0 matlab kuch bh del nh ho ga, */
GuestLists.push("Fazil"); //add an element in the end of array
GuestLists.forEach(GuestList => {
console.log(`Dear ${GuestList}, would you like to join`);
});