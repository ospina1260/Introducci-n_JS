//==== Conceptos de Variables ====
//=== let, const y var ===
//=== var era la forma de declarar variables en versiones anteriores a ES6, pero tiene problemas de alcance (scope) y hoisting. Por eso se recomienda usar let y const.
//=== let permite declarar variables que pueden cambiar de valor.
//===const declara constantes cuyo valor no puede cambiar una vez asignado.


//==== Ejercicio 1: variables y tipos de datos básicos ====

let ciudad = "Madrid";
let Poblacion = 3300000;
let esCapital = true;
console.log(ciudad, Poblacion, esCapital);

//==== Ejercicio 2: concatenación de strings ====

let Animal = "Perro";
let raza = "Labrador";
let edadAnimal = 5;
console.log ("Mi " + Animal + " es un " + raza + " de " + edadAnimal + " años");

//==== Ejercicio 3: Operadores matemáticas básicas ===

let num1 = 10;
let num2 = 5;
let suma = num1 + num2;
let resta = num1 - num2;
console.log("Suma:" + suma, "Resta:", resta);

//=== Ejercicio 4: Uso de console.log con varias salidas

let nombreProducto = "Lapto";
let Precio = 1200;
let Disponible= true

console.log("Producto:", nombreProducto);
console.log("Precio:", Precio);
console.log("¿Esta disponble?", Disponible);

//=== Ejercicio 5: concatenación de salidas separadas ==

let marcaCoche = "Toyota";
let modelo = "Corolla";
let año = 2020;

console.log("Marca:", + marcaCoche );
console.log("Modelo:", + modelo);
console.log("año:", + año);
console.log("Vehiculo:", marcaCoche, modelo, año);