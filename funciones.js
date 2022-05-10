 /* una funcion es un conjunto de iunstrucciones
 * declarar (crearlas)
 * invocar (utilizarlas)
 */

 //Funciones declaradas:
 function saludar(){ // declarando
     console.log("hola")
 }

 //function nombre() {instruccion}


 //invocar
 saludar()

//parametro: es un valor qur va a ingresar un usuario, comodin
 function siguiente(numero){
     console.log(numero+1)
 }
 siguiente(1)
 siguiente(10)

 function saludarConParametro(nombre){
     console.log ("hola "+ nombre)
 }

 saludarConParametro("isa")


 function sumarDos (numero1, numero2){
     let resultado=numero1 + numero2
     return resultado
 }

 function mostrar (visible){
     console.log(visible)
 }

 mostrar(sumarDos(1,2))
 console.log(sumarDos(2,3)) //el console log no puede estar dentro de la funcion cuando la funcion esta haciendo otra cosa, lo tenes que poner por afuera


 function calculadora (numero1, numero2, operacion){
     if(operacion === "+"){
         return numero1 + numero2
     }
     else if(operacion === "-"){
        return numero1 + numero2
    }
    else if(operacion === "*"){
        return numero1 + numero2
    }
    else if(operacion === "/"){
        if (numero2 !==0)
        return numero1 + numero2
        else{
            return " No se puede dividir por cero"
        }
    }
    else {
        return "Ingrese una operacion valida"
    }
 }

 mostrar(calculadora(1,2,"+"))
 mostrar(calculadora(1,2,"-"))
 mostrar(calculadora(1,2,"*"))
 mostrar(calculadora(1,2,"/"))

//SCOPE ambito en el que habitan las variables
 let variableNombre= "isa"//variable global

function nuevoAmbito(){
    let edad=19 //variable local
    let variableNueva
    return edad
}
 function saludarALaVariable(){
     return "Hola " + variableNombre + " " + nuevoAmbito()
     let variableNueva;
 }

 mostrar(saludarALaVariable())

 //funciones anonimas o funciones expresadas

 let suma = function(a,b){
     return a + b
 }

 let resta = function(a,b){
    return a - b
}

mostrar(suma(1,2))
mostrar(resta(3,2))

// diferencia de declaradas vs expresadas

mostrar(duplicarDeclarada(4)) //con las declaradas no pasa nada puede ser antes o despues
// mostrar(duplicarExpresada(5))  va a dar error porque esta antes de la inicializacion

function duplicarDeclarada (numero){
    return nuemro*2
}

let duplicarExpresada = function (numero){
    return nuemro*2
}

mostrar(duplicarExpresada(5))


//funcion flecha
// si fuese normal: funcion multiplicar (a,b) {return a*b}

let multiplicar = (a,b)=> a*b // mas de 1 parametro--> va con parentesis
let siguienteFlecha = numero => numero+1
mostrar(multiplicar(2,2))
mostrar (siguienteFlecha(1))

// ejercicio: calcular costo total de productos y/o servicios seleccionados por el usuario
function calcularCostos (eleccion1, elccion2, eleccion3){
    let costoTotal;
    servicio1=1000
    servicio2=2000
    servicio3= 3000
if(eleccion1=="limpieza de cutis" || elccion2=="limpieza de cutis"|| eleccion3 == "limpieza de cutis") {
    costoTotal = cpstoTotal + servicio1;
    console.log(costoTotal)
}
if(eleccion1=="uñas esculpidas" || elccion2=="uñas esculpidas"|| eleccion3 == "uñas esculpidas") {
costoTotal = cpstoTotal + servicio2;
}
if(eleccion1=="semipermanente" || elccion2=="semipermanente"|| eleccion3 == "semipermanente") {
costoTotal = cpstoTotal + servicio3;
}

return costoTotal
}
mostrar(calcularCostos("limpieza de cutis", "uñas esculpidas", "semipermanente"))


/* array: conjunto de valores
variable: un espacio en memoria


cantidad de elementos en el array n-1


let profesor=["isa", 29, "profesor", true]
console.log(profesor.length)
for (let i=0; i<3; i++){
    console.log(profesor[i])
}

profesor.push("el mejor")
console.log(profesor)
profesor.unshift("mutea la compu")
console.log(profesor)

.pop() ultima
.shift() primero

*/

