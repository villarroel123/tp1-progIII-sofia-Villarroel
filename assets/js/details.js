import { data } from '/assets/js/datos.js';

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id'); 
    const recetaBuscada = data.find(receta => receta.id === Number(id));

    const nombre = document.getElementById("receta-name");
    const ingredientes = document.getElementById("ingredientes");
    const instrucciones = document.getElementById("instrucciones");
    const imagen = document.getElementById("receta-img");
    const calificacion = document.getElementById("receta-rating");
    const dificultad = document.getElementById("receta-difficulty"); 

    nombre.textContent = recetaBuscada.name;
    imagen.src = recetaBuscada.image;
    imagen.alt = recetaBuscada.name;
    calificacion.textContent = `Rating: ${recetaBuscada.rating}`;
    dificultad.textContent = `Dificultad: ${recetaBuscada.difficulty}`;
    ingredientes.innerHTML = "";
    instrucciones.innerHTML = "";
    recetaBuscada.ingredients.forEach(item => {
        const elemento = document.createElement("li");
        elemento.textContent = item;
        ingredientes.appendChild(elemento);
    });
    recetaBuscada.instructions.forEach(item => {
        const elemento = document.createElement("li");
        elemento.textContent = item;
        instrucciones.appendChild(elemento);  
    });
});


//HEADER
window.addEventListener("scroll",function(){
    const header=document.querySelector("header");
    header.classList.toggle("abajo",this.window.scrollY>0)
})