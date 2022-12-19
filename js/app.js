const videojuegos = [
     {
        pregunta: "¿En que año salio el primer Call of Duty?",
        descripcion: "Call of Duty es una serie de viedojuegos de disparos en primera persona, de estilo bélico, desarrollada principal e inicialmente por Infinity Ward, Treyarch, Sledgehammer Games y en menor proporción Raven Software y distribuida por Activision." 
        opciones:["1950","1780","2004","2022"],
        correcta: 2
     },
     {
        pregunta: "¿Quien es el campeon mundial de Fornite?",
        descripcion: "Fortnite es un videojuego del año 2017 desarrollado por la empresa Epic Games lanzado como diferentes paquetes de software que presentan diferentes modos de juego, pero que comparten el mismo motor de juego y mecánicas."
        opciones:["Adams Smith","Bugha","Faker","Zoky"],
        correcta: 1
     }
     { 
       pregunta:"¿Cuales son los juegos de campaña mas jugados en este año?"
       descripcion:"El modo campaña op campañas a secas, es el modo de juego principal cuyas misiones estan ligadas entre si por una historia, y donde el jugador debe acabar cada mision para continuar a la siguiente.",
       opciones:["Call of Duty, halo, God of war", "Fornite, Resident Evil","Valorant","Dota 2", "Lol"]
       correcta:0
     },
     {
       pregunta:"¿Cual es el juego movil más conocido?",
       descripcion:"Un videojuego para móviles es un videojuego que es desarrollado para jugarse en telefonos moviles, PDA, telegonos inteligentes y dispositivos moviles",
       opciones:["Dota 2","Angry Birds","Free Fire","Roblox"],
       correcta:2
     },
]


//Variables -> que van a cambiar 

const titulo= document.querySelector("#subContenedor__titulo");
const pregunta= document.querySelector("#subContenedor__pregunta");
const descripcion= document.querySelector("#subContenedor__descripcion");
const cajaOpciones= document.querySelector("#subContenedor__cajaOpciones");
const respuesta= document.querySelector("#subContenedor__elemento");
const barraProgreso= 

window.IniciarAplicacion():

//FUNCIONES
function IniciarAplicacion(){
console.log("Aplicacion iniciada");
}

function cargaPreguntasDescripcion(){ //Ayuda a que se visualicen las preguntas y descripcion
  let indice = 0 //desde donde inicia (desde una pregunta)
  pregunta.textContent = videojuegos[indice].descripcion;
}
function cargaOpciones(){
    let indice =0:
    for (let i =0 i < videojuegos{indice}.opciones.legth;i++){
    const boton = document.createElement("BUTTON");
    boton.textContent = videojuegos[indice].opciones[i];
    boton.classList.add("subContenedor__opcion"); 
    cajaOpciones.appendChild(boton);
    console.log(boton)
  }
}
function verificarRespuesta(indice,correcta){
    if(indice == correcta){
    
    }
}