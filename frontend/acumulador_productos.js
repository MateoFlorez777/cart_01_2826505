let producto= [
    {
        id: 1,
        nombre: "Lenovo Legion",
        precio:{
            decompra: 1500000,
            minimodeventa:700000,
        },
        descripcion : "Computador laptop",
        tipodeproducto : "computador",
        modelo: "rx7",
        obtenerprecio: function(){
            return this.precio.decompra;
    
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
        nombre: "Nintendo swicht lite",
        precio:{
            decompra: 1200000,
            minimodeventa:600000,
        },
        descripcion : "Consola portable",
        tipodeproducto : "Consola",
        modelo: "lite",
        obtenerprecio: function(){
            return this.precio.decompra;
    
        },
        caracteristicas: {
           dimensiones: {
               largo: 15,
               ancho: 30, 
               alto: 2
           },
           fabricacion: {
               pais: "japon",
               fechaFabricacion: new Date('2020-02-01')
      
           }
       
        }
      
      },

      {
        id: 3,
        nombre: "impods 12",
        precio:{
            decompra: 150000,
            minimodeventa:20000,
        },
        descripcion : "audifonos inalambricos",
        tipodeproducto : "auriculares",
        modelo: "in12",
        obtenerprecio: function(){
            return this.precio.decompra;
    
        },
        caracteristicas: {
           dimensiones: {
               largo: 7,
               ancho: 35, 
               alto: 1
           },
           fabricacion: {
               pais: "Colombia",
               fechaFabricacion: new Date('2022-03-05')
      
           }
       
        }
      
    },


    {
        id: 4,
        nombre: "xbox one",
        precio:{
            decompra: 1300000,
            minimodeventa:850000,
        },
        descripcion : "Consola de videojuegos",
        tipodeproducto : "consola",
        modelo: "one",
        obtenerprecio: function(){
            return this.precio.decompra;
    
        },
        caracteristicas: {
           dimensiones: {
               largo: 40,
               ancho: 25, 
               alto: 2
           },
           fabricacion: {
               pais: "EE.UU",
               fechaFabricacion: new Date('2022-03-08')
      
           }
       
        }
      
    },

    {
        id: 5,
        nombre: "alexa",
        precio:{
            decompra: 350000,
            minimodeventa:100000,
        },
        descripcion : "asistente virtual",
        tipodeproducto : "ia",
        modelo: "amazon",
        obtenerprecio: function(){
            return this.precio.decompra;
    
        },
        caracteristicas: {
           dimensiones: {
               largo: 6,
               ancho: 3, 
               alto: 1
           },
           fabricacion: {
               pais: "Madagascar",
               fechaFabricacion: new Date('2021-03-05')
      
           }
       
        }
      
    }
      

]



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

let costototal = 0;

costototal = producto.reduce((acumulador, producto) => {
    return acumulador + producto.precio.decompra
}, 0)

console.log(costototal)