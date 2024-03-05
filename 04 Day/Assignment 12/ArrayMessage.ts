let friendNames : string[] = ["Ozil","Asad","Ali","Fahad","Saad"];
for (let i = 0; i<friendNames.length; i++){
    console.log("Hello", friendNames[i], "You are invited for a Dinner");
}

for (let friendName of friendNames){
    console.log(`Hello ${friendName}, you are invited for a dinner`)
}
