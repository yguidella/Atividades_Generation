const leia = require ('readline-sync');

let nota1;
let nota2;
let nota3;
let nota4;
let notafinal;

nota1 = leia.questionFloat("Digite o valor da Nota 1: ");
nota2 = leia.questionFloat("Digite o valor da Nota 2: ");
nota3 = leia.questionFloat("Digite o valor da Nota 3: ");
nota4 = leia.questionFloat("Digite o valor da Nota 4: ");

notafinal = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(`Sua nota final é ${notafinal}`);
