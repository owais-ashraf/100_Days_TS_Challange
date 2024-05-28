var magicians = ["Alice", "David", "Chris"];
function make_great(magicians) {
    var greatMagicians = [];
    magicians.forEach(function (magician) {
        greatMagicians.push("".concat(magician, " the Great"));
    });
    return greatMagicians;
}
console.log("Original magicians:");
console.log(magicians);
var newGreatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log(newGreatMagicians);
