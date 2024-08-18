
//Declaracion de variables que se ejecutaran

const textArea = document.querySelector(".texto");
const imgAnalizador = document.querySelector(".analizador");
const loader = document.querySelector(".loader");
const tituloResultado = document.querySelector(".titulo-resultado");
const resultadoTexto = document.querySelector(".texto-resultado");
const botonEncriptar = document.querySelector(".btn-encriptar");
const botonDesencriptar = document.querySelector(".btn-desencriptar");
const botonCopiar= document.querySelector(".rcopiar");

//Variables de encriptacion 
const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

//Funcion para realizar el Encriptado

function EncriptarMensaje (mensaje){
    let mensajeEncriptado = "";
    for (let i = 0; i < mensaje.length; i++){
        let letra = mensaje[i];
        let encriptar = letra;
        for (let j = 0; j < llaves.length; j++){
            if (letra === llaves[j][0]){
                encriptar= llaves[j][1]; //Reemplaza la letra por el texto a encriptar
            break; //Finaliza el bucle de for principal
            }
        }
        mensajeEncriptado += encriptar;
    }
    return mensajeEncriptado;
}

//Funcion para realizar el Desencriptado

function DesencriptarMensaje (mensaje){
    let mensajeDesencriptado = mensaje;
    for(let i = 0; i< llaves.length; i++){
        let regex = new RegExp(llaves [i][1], 'g');
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves [i][0]);
    }
    return mensajeDesencriptado;
}


//Ocultar elementos dinamicos
textArea.addEventListener("input", (e) => {
    imgAnalizador.style.display = "none";
    loader.classList.remove("hidden");
    tituloResultado.textContent = "Capturando mensaje";
    resultadoTexto.textContent = "";

});


//Funcion del boton encriptar
botonEncriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = EncriptarMensaje(mensaje);
    resultadoTexto.textContent = mensajeEncriptado;
    botonCopiar.classList.remove("hidden");
    tituloResultado.textContent = "El resultado es:";
    //resultadoTexto.textContent = mensajeEncriptado
});

//Funcion del boton desencriptar 
botonDesencriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = DesencriptarMensaje(mensaje);
    resultadoTexto.textContent = mensajeDesencriptado;
    tituloResultado.textContent = "El resultado es:";
});

//Funcion del boton copiar
botonCopiar.addEventListener("click", () => {
    let textoCopiado = resultadoTexto.textContent;
    navigator.clipboard.writeText(textoCopiado).then(()=>{
        imgAnalizador.style.display="block";
        loader.classList.add("hidden");
        tituloResultado.textContent = "El texto se copio con exito";
        botonCopiar.classList.add("hidden");
        resultadoTexto.textContent="";
    })
})