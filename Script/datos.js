//TIPOS DE DATOS Y VARIABLES EN JS
/*

Declaración de variables
    
    *var: tipo de dato que puede cambiar más adelante. Utilizamos esta palabra reservada para VARIABLES GLOBALES- se pueden usar a lo largo de todo el código.

    *let: Utilizamos esta palabra para VARIABLES LOCALES- Se utilizan en un bloque especifico de código.

    *const: Esta palabra reservada la utilizamos para datos o información que NO PUEDEN CAMBIAR SU VALOR.

    var nombreDeVariable = x;


    */
//TIPOS DE DATO NÚMERICO (NUMBER)

    /*Los tipos de Dato númerico se expresan sin comillas. Se pueden trabjar enteros, decimales, positivos, negativos
    */

    var edad = 24;
    var altura = 1.65;
    var anhoDeNacimiento = 1998;
    var diaDeLaSemana =5;

    var edadTexto ="22";


    /*Covertir datos*/
    var nuevaEdad = Number(edadTexto);

//TIPO DE DATO CADENA DE TEXTO (STRING)  
   /* Los tipos de datos string o cadenas de texto utilizan comillas dobles o sencillas para asignar un valor.
    */
    
    var nombre = "Paulina";
    var cuidad = "CDMX";
    var colorFav= 'azul';

    var edadString = String (edad);

// TIPO DE DATO BOOLEANO (BOOLEANO)

    /*Solo arrojan dos resultados
    true
    false 
    */


    var esRegio = false;
    var escuchaMusica = true;

    var condición = Boolean(10<5);

    var nuevaVaribale = null;


//RETO

    var Familia = "Pichardo";
    var Abuela = "Juana";
    var Abuelo = "Juano";
    var Madre = "Monica";
    var Padre = "Pedro";
    var Hermana = "Emily";
    var Hermano ="Jafet";
    var Tia = "Phi";
    var Tio = "Sergio";
    var Tio2 = "Malo";


    var linea1DelMetro = 1;
    var linea2DelMetro = 2;
    var linea3DelMetro = 3;
    var linea4DelMetro = 4;
    var linea5DelMetro = 5;
    var linea6DelMetro = 6;
    var linea7DelMetro = 7;
    var linea8DelMetro = 8;
    var linea9DelMetro = 9;
    var linea10DelMetro = 10;

    
    var tatuajes = false;
    var dormirMucho = true;
    var péliculasDeTerror = false;
    var HorasDeSueño = Boolean(6<8);
    var tengo4Hermanos = true;
    var aguaDeTamarindo = false;
    var gustoPorLeer = true;
    var miedoAlasArañas = true;
    var numeroDeHombresYMujeres = Boolean (12<6);
    var enchiladas = true;



    const pi  = 3.1416;

///////////////////////////////////////////////////////////////


//Arrays y objetos

/* 
Array conocido como Arreglo, es un tipo de dato que peretence a JS en el cual almcena una colección de elementos de manera ordenada. 

Primer elemento = indice 0.
Hasta n cantidad de  indices.

*/
    var ejemploArray = ["Saludos", "Que onda"];
    var otroArray = [34, 565, 117, 6, 321];

/*
Objetos, los encontramos como Object
Son tipos de dato similares a los Arrays, sin embargo NO SON LOS MISMOS, y su estructura y semántica inidican el motor de JS del navegador como trabajar en estos elementos. 

    key= llave
    value = valor
    No tiene orden 

*/
    var ejemploDeObjeto = {

        nombre: "Paulina",
        apellido: "Ensastiga",
        edad: 24,
        esEgresada: true,
    }