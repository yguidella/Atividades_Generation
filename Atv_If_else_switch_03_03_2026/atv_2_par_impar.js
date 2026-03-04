const leia = require('readline-sync');

let numero;

numero = leia.questionInt("Digite um numero: ");

if (numero % 2 == 0 && numero >= 0) {
    console.log("O Numero " + numero + " e par e positivo!");
} 
else if (numero % 2 == 0 && numero < 0) {
    console.log("O Numero " + numero + " e par e negativo!");
} 
else if (numero % 2 != 0 && numero >= 0) {
    console.log("O Numero " + numero + " e impar e positivo!");
} 
else {
    console.log("O Numero " + numero + " e impar e negativo!");
}