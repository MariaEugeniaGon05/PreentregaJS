//declaracion de variables
let num1 = parseInt(prompt("dime un monto"));
let metodoPago = prompt(
  "¿Que metodo de pago utilizará? efectivo, tarjeta o transferencia"
);
let efectivo = 0.8;
let credito = 0.9;
let transfer = 1;

// metodo con condicional if

function contado(num1) {
  let resultado = num1 * efectivo;
  alert(`el monto total de ${num1} pagando con efectivo es de $${resultado}`);
}

function tarjeta(num1) {
  let resultado = num1 * credito;
  alert(`el monto total de ${num1} pagando con tarjeta es de $${resultado}`);
}

function transferencia(num1) {
  let resultado = num1 * transfer;
  alert(
    `el monto total de ${num1} pagando con transferencia es de $${resultado}`
  );
}

if (metodoPago === "efectivo") {
  contado(num1);
}

if (metodoPago === "tarjeta") {
  tarjeta(num1, credito);
}

if (metodoPago === "transferencia") {
  transferencia(num1, transfer);
} else {
  alert("no ingresaste ningún metodo de pago, vuelve a intentar");
}
