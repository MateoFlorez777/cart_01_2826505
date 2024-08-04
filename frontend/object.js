//crear un objeto 
//1. object Literal 
// similar a JSON 
const producto1 = {
  id: 1,
  nombre: "Lenovo Legion",
  precio: 3500000,
  descripcion : "Computador laptop",
  caracteristicas: {
     dimensiones: {
         largo: 50,
         ancho: 30, 
         alto: 1
     },
     fabricacion: {
         pais: "China",
         fechaFabricacion: new Date('2023-09-07')

     }

  }

}
const porducto2 = {
     garantia : "1 año con fabricante",
     idiomas : [
        "español",
        "ingles",
        "Chino"
     ]

}

//fusiones: Operador spread(objetos) ... 
//             extrae los atributos de
//             un objeto  sin necesidad 
//             de crear variables

const Objetocompleto = {
    ...producto1,
    ...porducto2
}
//desestructurar el objeto spread
const{idiomas } = Objetocompleto

console.log(idiomas[1])


//desestructuracion 
//    sintaxis que permiten aislar 
//    en variables separadas 
//    los atributos de un objeto 
//    sacar los atributos de manera individual

const {nombre, descripcion,precio,
    caracteristicas : {dimensiones:{alto},
    fabricacion: {pais}}} = producto1
//console.log(nombre + "\n"+ descripcion + "\n" + precio)
//console.log(producto1)
//console.log(alto)
//console.log(pais)


//2. constructor de objetos 

