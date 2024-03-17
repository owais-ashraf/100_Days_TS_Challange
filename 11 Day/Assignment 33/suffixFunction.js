function getOrdinalSuffix(num) {
    if (num >= 11 && num <= 13) {
        return "th"; // Special case for 11th, 12th, 13th
    }
    switch (num % 10) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
}
function appendOrdinalSuffix(num) {
    var suffix = getOrdinalSuffix(num);
    return "".concat(num).concat(suffix);
}
// Test the function for numbers from 1 to 20
for (var i = 1; i <= 20; i++) {
    console.log(appendOrdinalSuffix(i));
}
