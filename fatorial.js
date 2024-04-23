const fatorial = 5;
let resultado = 0;

resultado = fatorial * (fatorial - 1)*(fatorial - 2)*(fatorial - 3)*(fatorial - 4);
console.log("0 resultado é: " + resultado)


const fatorial1 = 6;
let resultadoq = 0;

resultadoq = fatorial1 * (fatorial1 - 1)*(fatorial1 - 2)*(fatorial1 - 3)*(fatorial1 - 4)*(fatorial1 - 5);
console.log("0 resultado é: " + resultadoq)

const fatorial2 = 10;
let resultadot = 0;

resultadot = fatorial2 * (fatorial2 - 1)*(fatorial2 - 2)*(fatorial2 - 3)*(fatorial2 - 4)*(fatorial2 - 5)*(fatorial2 - 6)*(fatorial2 - 7)*(fatorial2 - 8)*(fatorial2 - 9);
console.log("0 resultado é: " + resultadot)

const fatorial3 = 345;
let i = 0;
let resultado1 = 0;

resultado1 = fatorial3;
console.log(resultado1 + "!");
for (i = 1; i < fatorial3; i++) {
        console.log(resultado1 + "=" +resultado1+"* ("+fatorial3+ " - " + i +")");

        resultado = resultado1 * (fatorial3 - i);
        console.log(resultado1 + " = " + i);
    
}
