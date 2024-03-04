var myText = "this world is not for beginners";
console.log(myText);
console.log(myText.charAt(0).toUpperCase() + myText.slice(1));
var lowerText = myText.toLowerCase();
console.log(lowerText);
var newText = myText.toUpperCase();
console.log(newText);
var words = myText.split(' ');
for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}
myText = words.join(' ');
console.log(myText);
