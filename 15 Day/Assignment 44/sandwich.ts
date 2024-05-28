function sandwich_list(...list){
    console.log(`Making a sandwich with: ${list.join()}.`);
}
console.log(sandwich_list("Bread"));
console.log(sandwich_list("Bread","egg"));
console.log(sandwich_list("Bread","Egg","Tomoto","Chikcen"));