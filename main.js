/* Ejercicio 1 – Calculadora de Promedio y Rendimiento
Pide al usuario cuatro notas (del 0 al 100).
Calcula el promedio y muestra un mensaje según el resultado:

“Excelente” si el promedio es mayor o igual a 90

“Bueno” si es mayor o igual a 75

“Regular” si es mayor o igual a 60

“Insuficiente” en caso contrario

Instrucciones:
Usa if-else-if y operadores lógicos para determinar el mensaje.
Muestra el resultado con console.log() o alert().
*/ 

alert(`Ejercicio 1
    Escribir 4 notas del 1 al 100`);
let nota1=parseFloat(prompt("Escriba la primera nota:"));
let nota2=parseFloat(prompt("Escriba la segunda nota:"));
let nota3=parseFloat(prompt("Escriba la tercera nota:"));
let nota4=parseFloat(prompt("Escriba la cuarta nota:"));
let promedio= (nota1+nota2+nota3+nota4)/4;

console.log("-------------Ejercicio 1-----------------");


if (promedio>=90) {
    console.log("Su promedio es "+promedio+", por tanto es:Excelente");
} else if (promedio>=75) {
    console.log("Su promedio es "+promedio+", por tanto es:Bueno");
} else if (promedio>=60) {
    console.log("Su promedio es "+promedio+", por tanto es:Regular");
} else if (promedio<60 && promedio >=0) {
    console.log("Su promedio es "+promedio+", por tanto es:Insuficiente");
} else{
    console.log("Las notas ingresadas son incorrectas");
}


console.log("------------------------------");



/*
Ejercicio 2 – Calculadora de Tarifa de Transporte
El programa debe pedir al usuario:

Su edad

Si es estudiante (“sí” o “no”)

La distancia que recorrerá (en kilómetros)

Reglas del costo:

Menores de 18 pagan 50% del precio base

Estudiantes pagan 75% del precio base

Mayores de 60 pagan 40% del precio base

Si el viaje es mayor a 30 km, se agrega un 10% adicional al total

Instrucciones:
Usa condiciones anidadas (if, else if, else) y operadores lógicos para determinar el costo final.*/

console.log("-------------Ejercicio 2-----------------");
alert(`Ejercicio 2
    Calculadora de tarifa de transporte`);

let edad= parseInt(prompt("Ingrese su edad"));
let estudiante=prompt(`¿Usted es estudiante? (si/no)`).toLowerCase();
let distancia=parseFloat(prompt("¿Que distancia recorrerá? (en Kilómetros)"));
let precioBase= 100;
let costoFinal=0;


if (estudiante === "si" || estudiante === "sí") {
    if (edad<18) {
        costoFinal=precioBase*0.5;
    } else if (edad>60) {
        costoFinal=precioBase*0.4;
    } else {
        costoFinal=precioBase*0.75;
    }
} else {
    if (edad<18) {
        costoFinal=precioBase*0.5;
    } else if (edad>60) {
        costoFinal=precioBase*0.4;
    } else {
        costoFinal=precioBase*1;
    }
}

if (distancia>30) {
    costoFinal*=1.10;
} 

console.log("El costo final que debe pagar es de: "+costoFinal.toFixed(2));



console.log("--------------------------------------");



/*Ejercicio 3 – Menú de Conversión de Unidades
Muestra un menú con 4 opciones:

Convertir de Celsius a Fahrenheit

Convertir de Fahrenheit a Celsius

Convertir de Metros a Kilómetros

Convertir de Kilómetros a Metros

El usuario debe elegir una opción y escribir el valor a convertir.
El programa mostrará el resultado correspondiente.

Instrucciones:
Usa switch-case para realizar las conversiones y prompt() para las entradas.*/

console.log("-------------Ejercicio 3-----------------");
alert(`Ejercicio 2
    Menú de conversion de unidades`);

let opcion=parseInt(prompt(`Elija una de as opciones (Escribiendo el número):
    1)Convertir de Celsius a Fahrenheit

    2)Convertir de Fahrenheit a Celsius

    3)Convertir de Metros a Kilómetros

    4)Convertir de Kilómetros a Metros`)) ;

    let celsius=0;
    let fahrenheit=0;
    let metros=0;
    let kilometros=0;
switch (opcion) {
    case 1:
        celsius=parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));
        fahrenheit=(celsius * 9/5) + 32;
        console.log("La temperatura en grados Fahrenheit es: "+fahrenheit.toFixed(2)+"°F");
        break;
    case 2:
        fahrenheit=parseFloat(prompt("Ingrese la temperatura en grados Fahrenheit: "));
        celsius=(fahrenheit -32) *5/9;
        console.log("La temperatura en grados Celsius es: "+celsius.toFixed(2)+"°C");
        break;
    case 3:
        metros=parseFloat(prompt("Ingrese el valor en Metros: "));
        kilometros=metros/1000;
        console.log("El valor convertido en Kilometros es: "+kilometros.toFixed(3)+" Km");
        break;
    case 4:
        kilometros=parseFloat(prompt("Ingrese el valor en Kilometros: "));
        metros=kilometros*1000;
        console.log("El valor convertido en metros es: "+metros.toFixed(3)+" Mts");
        break;

    default:
        console.log("Opción invalida");
        break;
}




console.log("--------------------------------------");




/*Ejercicio 4 – Sistema de Descuentos en una Tienda
El usuario debe ingresar:

El precio total de su compra

Si tiene tarjeta de cliente frecuente (“sí” o “no”)

Reglas:

Si el total es mayor a 500, aplica un 10% de descuento

Si además tiene tarjeta, aplica un 5% adicional

Si el total es menor o igual a 100, aplica un recargo del 5%

El programa debe mostrar el precio final y un mensaje indicando qué descuento se aplicó.

Instrucciones:
Utiliza operadores de asignación y condiciones anidadas para determinar el total.*/

console.log("-------------Ejercicio 4-----------------");
alert(`Ejercicio 4
    Sistema de Descuentos de una Tienda`);

    let precioTotal=parseFloat(prompt("Ingrese el precio total de su compra"));
    let tarjetaVip=prompt(`¿Usted tiene tarjeta de cliente frecuente?(si/no)`).toLowerCase();
    let precioFinal=0;
if (precioTotal>500) {
precioFinal=precioTotal*0.9;
    if (tarjetaVip==="si" || tarjetaVip==="sí") {
        precioFinal*=0.95;
        console.log(`El precio final es de: ${precioFinal.toFixed(2)}
            Descuentos aplicados:
            Compra mayor a 500: 10%
            Tarjeta de cliente frecuente: 5%`);
    } else {
        console.log(`El precio final es de: ${precioFinal.toFixed(2)}
            Descuentos aplicados:
            Compra mayor a 500: 10%`);
    }
} else if (precioTotal<=100 && precioTotal>0) {
    precioFinal=precioTotal*1.05;
    if (tarjetaVip==="si" || tarjetaVip==="sí") {
        precioFinal*=0.95;
        console.log(`El precio final es de: ${precioFinal.toFixed(2)}
            Recargo:
            Compras menor o igual a 100: 5%
            Descuentos aplicados:
            Tarjeta de cliente frecuente: 5%`);
    } else {
        console.log(`El precio final es de: ${precioFinal.toFixed(2)}
            Recargo aplicado:
            Compras menor o igual a 100: 5%`);
    }
} else if (precioTotal==0) {
    console.log("Usted no ha comprado nada :)");
} else if (precioTotal<0) {
    console.log("No se admiten precios negativos -_-");
}




console.log("--------------------------------------");




/*Ejercicio 5 – Calculadora de Edad y Etapa de Vida
Pide al usuario:

.Su año de nacimiento

.El año actual

Calcula su edad y muestra un mensaje según el rango:

Menor de edad: menos de 18 años

Adulto joven: entre 18 y 30 años

Adulto: entre 31 y 59 años

Adulto mayor: 60 años o más

BONUS:
Pregunta además si ya cumplió años este año (“sí” o “no”) y ajusta la edad si es necesario.

Instrucciones:
Usa operadores de comparación, if-else-if, y parseInt() para convertir los datos numéricos. */


console.log("-------------Ejercicio 5-----------------");
alert(`Ejercicio 5
    Calculadora de Edad y Etapa de vida`);

let nacimiento= parseInt(prompt("Ingrese su año de nacimiento"));
let yearActual= parseInt(prompt("Ingrese el año actual"));
let cumple= prompt("¿Ya cumplió años este año? (si/no)").toLowerCase();

if (cumple==="si" || cumple==="sí") {
    edad=yearActual-nacimiento;
} else if (cumple==="no"){
    edad= (yearActual-nacimiento)-1;
}else{
    edad=0
}
    

if (edad>=60) {
    console.log(`Usted tiene ${edad} años de edad
        *Mayor de edad` );
} else if (edad>=31 && edad<=59) {
    console.log(`Usted tiene ${edad} años de edad
        *Adulto` );
} else if (edad>=18 && edad<=30) {
    console.log(`Usted tiene ${edad} años de edad
        *Adulto joven` );
} else if (edad<18 && edad>0) {
    console.log(`Usted tiene ${edad} años de edad
        *Menor de edad` );
} else if (edad==0) {
     console.log("Datos de la tercera pregunta incorrectos");
} else{
    console.log("Datos incorrectos, vuelva a intentarlo :)");
}
   


    console.log("--------------------------------------");