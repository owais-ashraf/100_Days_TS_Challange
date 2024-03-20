let Magicians : string[] = ["Asad", "Saad", "Ali"]
function My_Array(Magicians){
    Magicians.forEach(Magician => {
        console.log(`The great ${Magician}`) ;
    })
}

My_Array(Magicians)


function GreatArray(Magicians){
    for (let i = 0; i < Magicians.length; i++) {
        Magicians[i] = Magicians[i] + " the great";
        console.log(Magicians[i])
    }
}
GreatArray(Magicians)