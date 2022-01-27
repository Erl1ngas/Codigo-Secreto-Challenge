var botonEncriptar = document.querySelector("#btn-encriptar");

var botonDesencriptar = document.querySelector("#btn-desencriptar");

botonEncriptar.addEventListener("click",encriptar);
botonDesencriptar.addEventListener("click",desencriptar);


function encriptar(){

var textoInicial = document.getElementById("input-texto").value;

var frase = "";

for(i=0;i< textoInicial.length; i++){
    if(textoInicial[i] == "a"){
        frase = frase + "ai"
    } else if  (textoInicial[i] == "e"){
        frase = frase + "enter"
    } else if (textoInicial[i] == "i"){
        frase = frase + "imes"
    } else if (textoInicial[i]== "o"){
        frase = frase + "ober"
    } else if (textoInicial[i] == "u"){
        frase = frase + "ufat"
    } else {
        frase = frase + textoInicial[i]
    }
    
}

document.querySelector("#msg").value = frase;

}

function desencriptar(){
    
var textoFinal = document.getElementById("input-texto").value;
textoFinal = textoFinal.replace(/ai/gi,"a");
textoFinal = textoFinal.replace(/enter/gi,"e"); 
textoFinal = textoFinal.replace(/imes/gi,"i"); 
textoFinal = textoFinal.replace(/ober/gi,"o");
textoFinal = textoFinal.replace(/ufat/gi,"u");
document.querySelector("#msg").value = textoFinal;

}

function botonCopiar(){
    var text = document.querySelector("#msg").value;
    navigator.clipboard.writeText(text).then(function() {
    
},  function(err) {
    console.error("Error al copiar", err);
});

}






