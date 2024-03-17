var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var FavPlaces = ["New Zealand", "Iceland", "Japan", "Switzerland", "Norway"];
console.log("Original Order :", FavPlaces); //console as it is as the original array made 
console.log("Alphabetical Order:", __spreadArray([], FavPlaces, true).sort()); //this made with spread operator and sort to sort the array
console.log("Alphabetical Order:", __spreadArray([], FavPlaces, true).sort().reverse()); //reversly sort the array
console.log(FavPlaces.reverse(), "Reverse Order"); //reverse the array
