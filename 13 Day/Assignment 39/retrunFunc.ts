function fullName (CityName : string = "Karachi", country : string = "Pakistan"){
    return `${CityName} ${country}`
}
console.log(fullName("Berlin", "Germany"));
console.log(fullName("Tokyo", "Japan"));
