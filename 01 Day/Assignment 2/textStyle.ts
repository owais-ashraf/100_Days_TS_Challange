let myText : string = "this world is not for beginners";
console.log(myText);
console.log(myText.charAt(0).toUpperCase() + myText.slice(1));
let lowerText : string = myText.toLowerCase();
console.log(lowerText)
let newText : string = myText.toUpperCase();
console.log(newText)
let words = myText.split(' ');
for (let i = 0; i<words.length; i++){
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}
myText = words.join(' ');
console.log(myText);


