const leia = require('readline-sync');

let salario;
let abono;
let novosalario;

salario = leia.questionInt("Digite o valor do seu Salario: R$");
console.log("Seu salário é: R$" + salario);

abono = leia.questionInt("Digite o valor do Abono Salarial: R$");

novosalario = salario + abono;

console.log("Seu novo salário é R$" + novosalario);