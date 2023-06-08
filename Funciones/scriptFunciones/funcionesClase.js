// Sesión de funciones
/*

Hoisting:

Es fundamental en el entendimiento de la forma en que se ejecuta nuestro
código de JS, esto aplica tanto para variables como para funciones.

Como tal, la traducción de Hoisting es elevación, a partir de aquí, su entendimiento es
mucho más intuitivo, lo que hace a grandes rasgos es "elevar" las funciones y variables 
declaradas dentro del código.

Yo puedo invocar una función antes de siquiera declararla.

JS, cuando es ejecutado por el motor JS del navegador primeroo lee e interpreta las variables y las funciones declaradas

*/


/*

Scope : 

El concepto scope hace referencia al alcance que tiene
una variable dentro de un código JS.

var, let y const.

var : global - quiere decir que se puede utilizar o
trabajar con esta variable dentro de cualquier
parte del código

let : porque además de funcionar de manera global
en caso de ser requerida, también puede solo ser
utilizada de manera local.

const : se refiere, por su nombre tan intuitivo,
a la palabra constante, esto quiere decir que su
valor no puede ser reasignado.

El uso de la palabra reservada 'var' no es tan recomendado
por el comportamiento y la poca adaptabilidad de una
variable.

Entonces, se implementan let y const como una 
alternativa mucho más eficiente para determinar el 
Scope o alcance que tiene una variable.

*/

// Funciones, invocación y declaración

//Declaración de una función

/*
palabra reservada - function

nombre de la funcion - nombreFuncion
establecer parametros -recibe de 0 a n parametros y se encasillan
dentro un paréntesis ()

establecer el bloque de código sobre el que vamos a trabajar
lo hacemos mediante llaves {
codigo a ejecutar
}

*/

//Ejemplo de función pero no retorna ningún valor
//No recibe ningún parametro

nuevaFunción();

function nuevaFunción(){
    console.log("Buenos días CH28");
}

nuevaFunción();

function holaMundo(nombre){
    return "Hola " + nombre;
}

function holaMundo(nombre){
    return "Hola " + nombre; // Si retorna un valor
}


//holaMundo("Blanca");/
//console.log(holaMundo("Blanca"));

/*
Elaborar una función que calcule la velocidad de un objeto
- velocidad = distancia / tiempo

- function
- CalcularVelocidad
(distancia, tiempo)

- elaborar el bloque de código

let velocidad = distancia / tiempo
*/

    function calcularVelocidad(distancia, tiempo){ // Inicio
        return "La velocidad calculada es: " + distancia / tiempo + " m/s";
    } // Cierre

    
    console.log(calcularVelocidad(30, 5));
    
// Funciones dentro de JS
/*
Funciones flecha | Funciones fat arrow | Funciones lambda
Son una manera más compacta y sencilla de escribir una función normal

No son lo mismo que una función general, se utilizan en otro tipo de contextos. 
Funciones CallBack que requiere funciones aninimas

Su uso es limitado

Declaración de una función fecha

var, let, const
const - buena práctica utilizar let para declarar funciones flechas o lambda
- nombreFunción
- parámetros 
- establecer el bloque de código o procesos que va a ejecutar esta función.

=> - Fat arrow
*/

/* Inovocacipon de una función flecha
nombreFunciónFlecha();
(); se coloca el parametro
*/

//const  funcionFlecha = parametro => "Hola " + parametro
    //return "Hola " + parametro

    //Función General
    function funcionNormal(parametro){
        return "Hola " + parametro;
    }
    // Funcion Flecha - Arrow Function
//function functionFlecha = "parametro" => "Hola " + parametro

    //Función flecha más general
    const  funcionFlecha = parametro => "Hola " + parametro

//Función flecha con más parametros
const funcionVariosParametro = (datoA, datoB) => {
    let datoC=datoA+datoB
    return "La suma de datoA + datoB =" + datoC;

} 


//Funciones flecha sin recibir un parametro

const funcionSinParametros = () => {
    return"Función flecha que no recibe parametros";
    }


/*

Funciones anonimas
Funciones CallBack - Que reciben otras funciones como parametros

Promesas

Funciones async - await

*/


// Función flecha ára calcular la velocidad
  
const calcularVelocidadFlecha = (distanciaFlecha, tiempoFlecha) => {
        console.log("Distancia =  " + distanciaFlecha + " metros");
    console.log("Tiempo = " + tiempoFlecha + " segundos");
    return "La velocidad calculada es = " + distanciaFlecha / tiempoFlecha + " m/s";
}

// Ejercicios

// -------------------- 1. Calcular el cuadrado de un número.

/*function numeroAlCuadrado(numero1, numero2){
    let cuadrado = numero1 * numero2;
    return " El cuadrado del número es " + cuadrado;
}
console.log(numeroAlCuadrado(5,5));

const flechaAlCuadrado = (numer1, numer2) => {
    let alCuadrado = numer1 * numer2
    return " El cuadrado del número es = " + alCuadrado;
    }
console.log(flechaAlCuadrado(5,5));*/

//-------------------- 2. Escribir un código que convierta de grados celsius a grados farenheit

/*function gradosFarenheit = (gradosC){
    let convertir = (gradosC * 1.8) + 32;
    return " En grados °Farenheit es =" + convertir;  
}
console.log (gradosFarenheit(30));

const gradosFarenheit = (gradosC) => {
    let convertir = (gradosC * 1.8) + 32;
    return " En grados °Farenheit es = " + convertir;  
}
console.log (gradosFarenheit(30));*/

//-------------------- 3. Realizar una función que calcule el valor de Voltaje, recibiendo como entradas o parámetros Resistencia y Corriente.

/* function calcularVoltaje(resistencia, corriente){
    let voltaje = resistencia * corriente
    return " El voltaje es = " + voltaje;
}
console.log(calcularVoltaje(0.09,100));

const calcularVoltaje = (resistencia, corriente) => {
    console.log("Resistencia = " + resistencia + "amperios");
    console.log("Corriente = " + corriente + "ohms");
return " El voltaje es = " + resistencia * corriente + " voltios";
}
console.log(calcularVoltaje(0.09,100));*/

//-------------------- 4. Elaborar una función que calcule el volumen de un cubo, recibiendo como dato de entrada Lado.
/* function calcularVolumen(lado1, lado2, lado3){
    let volumen = lado1 * lado2 * lado3
    return " El volumen es = " + volumen;
}
console.log(calcularVolumen(3,3,3));*/

/* const calcularVolumen = (lado1, lado2, lado3) => {
    let volumen = lado1 * lado2 * lado3
    return "El volumen es =" + volumen;
}
console.log(calcularVolumen(3,3,3)); */

//-------------------- 5. Calcular el área de un triángulo

/*function calcularArea(base, altura){
    let area = base * altura / 2;
    return " El área es = " + area;
}
console.log(calcularArea(10,5));*/

/* const calcularArea = (base, altura) => {
    let area = (base * altura) /2;
    return "El Área es =" + area;
}
console.log(calcularArea(10,5));*/

//-------------------- 6. Calcular el volumen de una esfera V = 4/3 π r³

/*function calcularVolumenE(radio){
    let volumenE = (4/3) * 3.1416, * radio
    return " El volumen de la esfera es = " + volumenE;
}
console.log(calcularVolumenE(8));*/

/* const calcularVolumenE = (radio) => {
    let volumenE = (4/3) * 3.1416 * radio;
    return "El volumen de la esfera es =" + volumenE;
}
console.log(calcularVolumenE(8));*/

//-------------------- 7. Convertir una cadena de texto a mayúsculas, usando el método .toUpperCase()

/* function convertirAMayusculas(texto) {
    return texto.toUpperCase();
}
console.log(convertirAMayusculas());
  
const convertirAMayusculasFlechas = texto => texto.toUpperCase();
    console.log(convertirAMayusculas()); */

