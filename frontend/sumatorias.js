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
    let acumulador = 0

//primera version de la sumatoria
//utilizando ciclo for of

    /*for (p of carrito){
        acumulador = acumulador +
                    p.precio
    }*/


//siguente version
//utilizando forEach
/*carrito.forEach (function(p){
    acumulador = acumulador +
                    p.precio    
})
console.log(acumulador)*/

//ultima version: metodo
//reduce

let sumatoria = carrito.reduce((acumulador,
                         p
        ) => 
    acumulador + p.precio
 ,
0)
console.log(sumatoria)
