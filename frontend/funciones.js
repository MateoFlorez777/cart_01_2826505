//funcion:
//bloque de instrucciones 
//que se ejecutan al invocarse
// tiene dos momentos -declaracion - invocacion 

//primer ejemplo de funcion
//declaracion de funcion 
function saludo(nombre,identificacion = 44435567){

console.log (`Hola genio ${nombre} ${identificacion}`)
}
//invocar,ejecutarla  
saludo("Juan")

//segunda  manera
 const saludo2 = function(){
    console.log (`Hola desde saludo 2`)
 }
 saludo2()

 //tercera manera
 const saludo3 = () =>{
    console.log(`saludo desde funcion arrow`)
 }
saludo3()