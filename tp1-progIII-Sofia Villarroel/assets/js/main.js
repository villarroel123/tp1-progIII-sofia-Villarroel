import {data} from '/assets/js/datos.js';
console.log(data)

//creo arrays con filter 
const recetasPrincipales=data.filter(receta=>receta.mealType.includes("Lunch") || receta.mealType.includes("Dinner"));
console.log(recetasPrincipales)
const recetasEntradas=data.filter(receta=>receta.mealType.includes("Snack") ||receta.mealType.includes("Appetizer") || receta.mealType.includes("Breakfast"));
console.log(recetasEntradas)
const recetasVegetarianas=data.filter(receta=>receta.tags.includes("Salad") || receta.tags.includes("Vegetarian"))
console.log(recetasVegetarianas)
const recetasInternacionales=data.filter(receta=>receta.tags.includes("Italian")||receta.tags.includes("Asian")||receta.tags.includes("Korean"))
console.log(recetasInternacionales)

recetasPrincipales.forEach(receta => {
    const contPrincipales=document.getElementById("sect-principales");
    const card=createCard(receta,"principales")
    contPrincipales.appendChild(card)
});

recetasEntradas.forEach(receta=>{
    const contEntradas=document.getElementById("sect-entradas")
    const card=createCard(receta,"entradas")
    contEntradas.appendChild(card);
})
recetasVegetarianas.forEach(receta=>{
    const contVegetarianas=document.getElementById("sect-vegetarianas");
    const card=createCard(receta,"vegetarianas");
    contVegetarianas.appendChild(card);
})

function createCard(arr,estilo){
    const articulo=document.createElement("article");
    const contenedor=document.createElement("div");
    const datos=document.createElement("div");
    const imagen=document.createElement("img");
    const titulo=document.createElement("h4");
    const dificultad=document.createElement("p");
    const calificacion=document.createElement("p");
    const boton=document.createElement("button");

    imagen.src=arr.image;
    titulo.textContent=arr.name;
    dificultad.textContent=arr.difficulty;
    calificacion.textContent=arr.rating;
    boton.textContent="See more"

    //clases
    articulo.classList.add(estilo)
    datos.classList.add(`card-${estilo}`)
    //agrego
    contenedor.appendChild(imagen);
    datos.appendChild(titulo);
    datos.appendChild(dificultad);
    datos.appendChild(calificacion);
    datos.appendChild(boton);
    contenedor.appendChild(datos)
    articulo.appendChild(contenedor)

  boton.addEventListener("click", () => {
    window.location.href = `details.html?id=${arr.id}`; 
    
});
    return articulo
}



//HEADER
window.addEventListener("scroll",function(){
    const header=document.querySelector("header");
    header.classList.toggle("abajo",this.window.scrollY>0)
})