let magicians: string[] = ["Alice", "David", "Chris"];

function make_great(magicians: string[]): string[] {
    let greatMagicians = [];
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} the Great`);
    });
    return greatMagicians;
}
console.log("Original magicians:");
console.log(magicians);
let newGreatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log(newGreatMagicians); 
