// Ejercicio encontrar el máximo

let ingresos: boolean = false;
let numero: number = Number(prompt("ingrese un número"));
let maxNum: number = numero;

while (numero !== 0) {
  ingresos = true;
  if (numero > maxNum) {
    maxNum = numero;
  }

  numero = Number(prompt("ingrese un número"));
}
if (ingresos) {
  console.log("El máximo ingresado es: " + maxNum);
}

/*ejercicio encontrar minimo

let ingresos: boolean = false;
let numero: number = Number(prompt("ingrese un número"));
let minNum: number = numero;

while (numero !== 0) {
  ingresos = true;

  if (numero < minNum) {
    minNum = numero;
  }
  numero = Number(prompt("ingrese un número"));
}
if (ingresos) {
  console.log("El mínimo ingresado es: " + minNum);
}*/
