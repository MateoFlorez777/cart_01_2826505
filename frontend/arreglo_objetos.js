let carrito= [
{
    id: 1,
    nombre: "Lenovo Legion",
    precio: 3500000,
    descripcion : "Computador laptop",
    obtenerprecio: function(){
        return `nombre:${nombre}`

    },
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
  
  },
  
   {
    id: 2,
    nombre: "nintendo",
    precio: 150000,
    descripcion : "Consola de video juegos",
     obtenerprecio: function(){
        return `nombre:${nombre}`
     },   
    caracteristicas: {
       dimensiones: {
           largo: 20,
           ancho: 10, 
           alto: 2
       },
       fabricacion: {
           pais: "Japon",
           fechaFabricacion: new Date('2023-09-07')
       }
    }
}
,
{
    
    id: 3, 
    nombre: "celular",
    precio: 480000,
    descripcion : "Telefono movil",
     obtenerprecio: function(){
        return `nombre:${nombre}`
     },
    caracteristicas: {
        dimensiones: {
            largo: 15,
            ancho: 7, 
            alto: 2,
        },
        fabricacion: {
            pais: "Japon",
            fechaFabricacion: new Date('2023-09-07')

        }
    }
  

}
]





 




//primera manera de recorrer un arreglo en javascript 
/*for (articulo of carrito){
    const { nombre,precio } = articulo
    console.log(nombre,precio)

    //Desestructurando la variable articulo que es un objeto 
    //solo mostrar el nombre y precio del articulo 


    let mensaje = `nombre del producto: ${nombre} , de precio: ${precio}`

    
    console.log(mensaje)



}*/

//recorrer arreglos con foreach
//solo funciona con un Array 
//callback: un parametro en una funcion de tipo fuction
//que se ingresan a una funcion 
// (metodo)

 /*carrito.forEach((articulo) => {
        const {nombre,caracteristicas: {dimensiones: {alto},  fabricacion: {pais}}, 
        }  = articulo 
        console.log(pais);
    })*/

//desestructuracion de fabricacion
//map:crear un nuevo arreglo
//apartir del original 
const nombresProducto = carrito.map((producto)=>{
    return producto.nombre

    console.log(nombresProducto)

})

//find: encuentra el primer ekemento

//que cumpla la condicional 

let articuloChino = carrito.filter((articulo) => {
    return articulo.caracteristicas.
    dimensiones.
    pais === "Taiwan"
});

console.log(articuloChino)


//splice para borrar un elemento del carrito:
//quitar el celular
//¿cual es el indice del producto a quitar? 2

//carrito.splice(2, 1, nombresProducto);
//console.log(carrito)

//añadir un elemento con el spread
//operator 
carrito = [ ...carrito ,
    nombresProducto];   