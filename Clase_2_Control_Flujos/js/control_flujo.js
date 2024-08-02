/* if(numberX == 5){
    console.log("vas a ver este mensaje");
}else{
    console.log("vas a ver este mensaje porque no es 5");
}
*/

let color = prompt ("Ingrese el color que quiera traducir").toUpperCase();

if(color === "ROJO"){
    alert("RED");
}else if(color === "AZUL"){
    alert("BLUE");
}else if(color === "NEGRO"){
    alert("COLOR");
}else{
    alert("UNKNOW COLOR");
};

switch(color){
    case "ROJO":
        alert("RED");
        break;
    case "AZUL":
        alert("BLUE");
        break;    
    case "VERDE":
        alert("GREEN");
        break;
    default:
        alert("UNKNOWN COLOR")
        break;
}

console.log(color);

const language = prompt("Ingrese el idioma que hablaremos puede ser: ESP, ENG, GER, ITA, FRA").toUpperCase();

if(idioma === ESP){
    alert("Buen Dia")
}else if(){

}else if(){
    
}else if(){
    
}else if(){
    
}