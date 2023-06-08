//Sesión de Funciones

/*
Hoisting: 
    Es fundamental en el entendimineto de la forma en que se ejecuta nuestro codigo de JS, esto aplica tanto para varibales como para funciones.

    Como tal, la traducción de Hoisting es elevación, a partir de aquí, su entendimiento es mucho más intuitivo, lo que hace a gradnes rasgos es "elevar" las funciones y variables declaradas dentro del código.

    Yo puedo invocar una función antes de siquiera declararla. 

    JS, cuando es ejecutado por el motor de JS del navegador primero lee e interpreta las variables y las funciones declaradas. 

 Scope:
    Hace referencia al alcance que tiene una variable dentro de un código JS
    var, let y const
    *var : alcance global, se puede utilizar o trabajar con esta variable dentro de cualquier parte del código.
    *let : alcance global y  en caso de ser rquerida tambien puede ser solo utilizada de manera local. 

    const: se refiere, a la palabra constante, su valor no puede ser reasignado 
    
    El uso de la palabra reservada 'var' no es tan recomendada por el compartamiento y la poca adaptabilidad de una variable.

    Entonces, se implementan let y const como para una alternativa mucho más eficiente para determianr el Scope o alcance que tiene una variablee


 */

 //Funciones, invocación y declaración

//Declaración de una función

/*
    palabra reservada - function
    Nombre de la funcion -nombreFunción
    Establecer parametros - recibe de 0 a n parametros y dentro del paréntesis()



    Establecer el bloque de código sobre el que vamos a trabajar
    lo hacemos mediante llaves {
    codigo a ejecutar
}
*/

//Ejemplo de función pero no retorna ningún valor

 function nuevaFuncion(){
    console.log("Buenos días CH28")
 }
nuevaFuncion();
 

//Ejemplo de unción que si retorna un valor

//No recibe ningun parametro
function holaMundo(nombre){
    return "Hola" + nombre; //si retorna un valor
}

//console.log(holaMundo("Fernando"));

/*
Elaborar una función que calucle la velocidad de un objeto

    -velocidad = distancia/tiempo

    -funcrion

    *calcularVelocidad
    (distancia, tiempo)

    *elborar  el bloque de código


    */

    function calcularVelocidad (distancia, tiempo,){ //input
        let velocidad = distancia/tiempo;
        return "La velocidada es: " + velocidad +" m/s";  //output
    }//cierre 

    console.log(calcularVelocidad(30, 5));

//Funciones dentro de JS

/*
Funciones flecha | Fat arrow | Funciones lambda

Funciones anonimas
Funciones CallBack- Que reciben otras funcioness como parametros

Promesas 
Funciones async - await

*/

/* Funciones flecha, son una manera más compacta y sencilla de escirbir una función normal
No son lo mismo que una función general, se utiliza en ptrp ripo de contextos

Funciones CallBack que requieren funciones anonimas.

Uso es limitado.

Declaración de una función flecha

var, let, const

const - buena práctica para declarar funciones flecha o lambda


- nombreFuncion 

- parámetros 

-Establecer el bloque de código o procesos que va a ejecitar esta función 

=> Fat arrow
que valor esperamos que nos de de vuelta.

invocaión de una función flecha()

(); se coloca el parametro

*/
//Función general
function funcionNormal (parametro){
    return "Hola " + parametro

}

//Función flecha - Arrow function 
const funcionFlecha = parametro => "Hola  " + parametro;

//Funciones flecha con más parámetros

const funcionVariosParametros = (datoA, datoB) => {
    let datoC = datoA + datoB;
    return "La suma de datoA + DatoB = "+ datoC; 
}

//Función flecha sin recibir un parámetros
    const funcionSinParametros = () => {
    return "Funcion flecha que no recibe parametros";
    }

////////
//Funcion flecha para calcular la velocidad

    const calcularVelocidadFlecha = (distanciaFlecha, tiempoFlecha) =>{

        console.log ("Distancia " + distanciaFlecha + " metros ");
        console.log ("Tiempo " + tiempoFlecha + " segundos ");
        return  "La velocidad calcualda es = " + distanciaFlecha/tiempoFlecha + "m/s";
        
    }  

/************Ejercicios **********************/
//Realizar una función que realice o satisfaga los siguientes escenarios. Realizar en manera de función general y función flecha.

/*
1.Calcular el cuadrado de un numero

2. Escribir un código que convierta de grados celsius
a grados farenheit

3. Realizar una función que calcule el valor de
Voltaje, recibiendo como entradas o parámetros
Resistencia y Corriente.

4. Elaborar una función que calcule el volumen de
un cubo, recibiendo como dato de entrada Lado.

5. Calcular el área de un triángulo

6. Calcular el volumen de una esfera

7. Convertir una cadena de texto a mayúsculas, usando el método .toUpperCase()

*/


// 1. Función general
function cuadrado (parametro){
    return "El cuadrado de " + parametro + " es igual a " + parametro * parametro;
}

//1. Función flecha

const cuadradoFlecha = parametro => {
    return "El cuadrado de " + parametro + " es igual a " + parametro * parametro;

}

//2. Grados
function grados (gcelsius){
    return gcelsius + "°C" +  " es igual a " + ((1.8 * gcelsius)+32) + "°F";
}

//2. Grados Flecha

const gradosF = (gradosC)=>{
    console.log (gradosC + "°C");
    return gradosC +  "°C " + " = " + ((1.8 * gradosC)+32) + "°F"; 
}

/*3. General.  Realizar una función que calcule el valor de
Voltaje, recibiendo como entradas o parámetros
Resistencia y Corriente.
*/

function voltaje(resistencia, corriente) {
    return "El voltaje es " + resistencia * corriente;
    
}

// flecha

let voltajeFlecha  = (resistencia, corriente ) => {
    console.log ("Resistencia = " + resistencia + " ohmios");
    console.log ("Corriente = " + corriente + " amperios ");
    return "El voltaje es " + resistencia * corriente
}

/* 4. Elaborar una función que calcule el volumen de
un cubo, recibiendo como dato de entrada Lado. */

function volumenCubo (lado){
    return "El volumen de un cubo es " + (lado*lado*lado);
}

// 4 Flecha

let volumenCuboFlecha = (lado) => {
    return "El volumen de un cubo es " + (lado*lado*lado);
    }

//5. Calcular el área de un triángulo

function areaTrin(base, altura) {
    return "El área del triangulo es "+ ((base*altura)/2);
    
}

// 5 flecha

let areaTrianguloFlecha = (base, altura) => {
    return "El área del triangulo es "+ ((base*altura)/2);

}

// 6. Calcular el volumen de una esfera

 function volumenEsfera(radio) {
    return "El volumen de una esfera es "+ (1.33*3.1413*(radio*radio*radio));
    
 }

//6 Flecha

 let volumenEsferaFlecha = (radio) => {
    return  "El volumen de una esfera es "+ (1.33*3.1413*(radio*radio*radio));
    
 }

 //7. Convertir una cadena de texto a mayúsculas, usando el método .toUpperCase()


 function mayusculas(texto) {
    console.log ((texto.toUpperCase)  )
    
 }

