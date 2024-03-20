function t_shirtMessage(message){
    return message;
}
console.log(t_shirtMessage("Hello World"));

function T_ShirtMessage(size : string, message : string){
    console.log(`please give me ${size} t-shirt, with a message ${message}`);
}
T_ShirtMessage("medium","Eat, Sleep, Code, repeat")