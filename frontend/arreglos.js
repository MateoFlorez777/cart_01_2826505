//Array: unico tipo de coleccion 
        // que existe en JS


const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "abril",
    "mayo",
    "junio",
   3,
   true
]    
const meses2 = [
    "julio",
    "agosto",
    "septiembre"
]

//fusion spread 
const mesesTotal = [ ...meses , ...meses2, "octubre "] 
console.log(mesesTotal)


// desestructuracion(arreglos-array)
//asignar a variables individuales,
//los valores (elementos) en el array 
//diferencias con la de objetos
// - las variables a desestructurar
// no necesariamente deben corresponder 
// con los elementos del array 
// - es posicional 
//ej: 

//trabajar con array methods:
console.log (`el arreglo de meses tiene: ${ mesesTotal.length}meses`);
console.log(meses)
//trabajar con el includes
console.log(mesesTotal.includes("enero"))



