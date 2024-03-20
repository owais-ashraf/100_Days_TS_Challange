function fullName(CityName, country) {
    if (CityName === void 0) { CityName = "Karachi"; }
    if (country === void 0) { country = "Pakistan"; }
    return "".concat(CityName, " ").concat(country);
}
console.log(fullName("Berlin", "Germany"));
console.log(fullName("Tokyo", "Japan"));
