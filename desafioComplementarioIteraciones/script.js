// Numeros de fibonacci 

// Primera forma de realizar numeros de fibonacci
let titulo1 = document.write(`<h1>Numeros de fibonacci</h1>`);
let titulo2 = document.write (`</h2>Primero forma de realizar los numeros de fibonacci</h2> <br>`);
let num1 = 0;
let num2 = 1;

const numero = parseInt(prompt("Cuantas repeticienos desea realizar?"))

while (isNaN(numero)) {
    numero = parseInt(prompt("Cuantas repeticienos desea realizar?"))
}

for (let i = 0; i < numero; i++) {
    let num3 = 0;
    num3 = num1;
    num1 = num2;
    num2 = num1 + num3;

    document.write(`${num1} + ${num3} = ${num2}<br>`);
}

// Segunda forma de realizar numeros de fibonacci
titulo2 = document.write (`<br></h2>Segunda forma de realizar los numeros de fibonacci</h2> <br>`);
const fib = [0,1];

for (let i = 2; i < numero + 2; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    document.write (`${fib[i - 1]} + ${fib[i - 2]} = ${fib[i]} <br>`);
}