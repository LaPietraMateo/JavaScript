//primera consigna

let numero = 10;

if (numero > 0) {
  console.log("El número es positivo.");
} else if (numero < 0) {
  console.log("El número es negativo.");
} else {
  console.log("El número es cero.");
}


//segunda consigna

let nombres = ["Juan", "María", "Carlos", "Ana", "Pedro"];

for (let i = 0; i < nombres.length; i++) {
  let nombre = nombres[i];
  
  if (nombre.length > 4) {
    console.log(nombre);
  }
}

//tercera consigna

let nombre = prompt("Bienvenido! Por favor, ingresa tu nombre:");

let edad = prompt("Hola " + nombre + ". Cuántos años tienes?");

let experiencia = prompt("Se encuentra usted feliz? (Sí/No)");

alert("Nombre: " + nombre + "\nEdad: " + edad + "\nSe encuentra feliz? " + experiencia);
