var Magicians = ["Asad", "Saad", "Ali"];
function My_Array(Magicians) {
    Magicians.forEach(function (Magician) {
        console.log("The great ".concat(Magician));
    });
}
My_Array(Magicians);
function GreatArray(Magicians) {
    for (var i = 0; i < Magicians.length; i++) {
        Magicians[i] = Magicians[i] + " the great";
        console.log(Magicians[i]);
    }
}
GreatArray(Magicians);
