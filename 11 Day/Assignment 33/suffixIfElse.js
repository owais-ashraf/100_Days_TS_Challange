for (var i = 1; i <= 30; i++) {
    if (i % 10 && i >= 11 && i <= 13) {
        console.log("".concat(i, "th"));
    }
    else if (i % 10 === 1) {
        console.log("".concat(i, "st"));
    }
    else if (i % 10 === 2) {
        console.log("".concat(i, "nd"));
    }
    else if (i % 10 === 3) {
        console.log("".concat(i, "rd"));
    }
    else {
        console.log("".concat(i, "th"));
    }
}
