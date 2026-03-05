import leia from 'readline-sync';

let nome
let idade
let primeiraDoacao

nome = leia.question("Informe o seu nome: ");
idade = leia.questionInt("Informe a sua idade: ");
primeiraDoacao = leia.question("Esta e a sua primeira doacao? Por favor responda sim/nao ");

if(
    (idade >= 18 && idade <= 59) ||
    (idade >= 60 && idade <= 69 && primeiraDoacao == "nao")
   
)   {
    console.log(nome + ", voce esta apto para doar sangue!");
} 
else{
    console.log(nome + ", voce nao esta apto para doar sangue!");
}
