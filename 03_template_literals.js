//=== ejemplo 1===

let nombre = "Juan";
let edad = 30;

console.log("Hola, me llamo", nombre, "y tengo", edad, "años");
console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);

let a = 5;
let b = 3;

//=== ejemplo 2 ===

console.log("Resultado: "+ a + b);
console.log("Resultado: " + (a + b));
console.log(`Resultado: ${a +b}`);

let Producto = "Mouse";
let Cantidad = 2;
let Precio = 15000;

//=== ejemplo 3 ===

console.log(`Producto: ${Producto}
Cantidad: ${Cantidad}
Precio unitario: ${Precio}
total a pagar: ${Cantidad * Precio}`);


//=== Ejercicio 6: usar los Tempares literales ===
let Animal = "Perro";
let raza = "Labrador";
let edadAnimal = 5;
console.log (`Mi ${Animal} es un ${raza}  de ${edadAnimal} años`);

//=== Ejercicio 7 ===

let Nombre = "Juan";
let formación = "Estudiante";
let ficha = 153;
let Ciudad = "Medelli";

console.log(`Hola mi nombre es ${Nombre} soy un ${formación} mi numero de ficha es ${ficha} y soy de la ciudad de ${Ciudad}.`)

/* Ejercicio 8: */

let productos = "Cloro";
let cantidad = 5;
let precio = 5000;

console.log(`Productos: ${productos}
cantidad: ${cantidad}
precio unitario: $${precio}
total a pagar: $${cantidad * precio}.`)

/* Ejercicio 9: */

let ciudad = "Bogotá";
let temperatura = 14;
console.log(`La temperatura en ${ciudad} es de ${temperatura} °C`);