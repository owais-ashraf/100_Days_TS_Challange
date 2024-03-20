function makeShirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I Love to Code"; }
    console.log("Please give me ".concat(size, " size t-shirt with a message ").concat(message));
}
makeShirt();
makeShirt("medium");
makeShirt("small", "Coding Only");
