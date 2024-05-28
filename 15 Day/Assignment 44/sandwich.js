function sandwich_list() {
    var list = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        list[_i] = arguments[_i];
    }
    console.log("Making a sandwich with: ".concat(list.join(), "."));
}
console.log(sandwich_list("Bread"));
console.log(sandwich_list("Bread", "egg"));
console.log(sandwich_list("Bread", "Egg", "Tomoto", "Chikcen"));
