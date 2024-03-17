let FavPlaces : string[] = ["New Zealand", "Iceland", "Japan", "Switzerland", "Norway"];
console.log("Original Order :", FavPlaces); //console as it is as the original array made 
console.log("Alphabetical Order:", [... FavPlaces].sort()); //this made with spread operator and sort to sort the array
console.log("Alphabetical Order:", [... FavPlaces].sort().reverse()); //reversly sort the array
console.log("Reverse Order :" FavPlaces.reverse(),); //reverse the array



