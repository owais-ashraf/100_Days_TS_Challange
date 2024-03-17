for (let i = 1; i <=30; i++){
    if(i % 10 && i >=11 && i <=13){ //exception for 11th , 12th , 13th
        console.log(`${i}th`)
    }else if(i % 10 === 1){
        console.log(`${i}st`)
    } else if(i % 10 === 2){
        console.log(`${i}nd`)
    } else if(i % 10 === 3){
        console.log(`${i}rd`)
    } else {
        console.log(`${i}th`)
    }
}