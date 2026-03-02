const leia = require('readline-sync');

let salariobruto;
let adicionalnoturno;
let horasextras;
let descontos;
let salarioliquido;

salariobruto = leia.questionFloat("Digite o Salario Bruto: R$");
adicionalnoturno = leia.questionFloat("Digite o valor do Adicional Noturno: R$");
horasextras = leia.questionFloat("Digite o valor das Horas Extras: R$");
descontos = leia.questionFloat("Digite o valor dos Descontos: R$");

salarioliquido = salariobruto + adicionalnoturno + (horasextras * 5) - descontos;

console.log ("O seu Salario Liquido é R$" + salarioliquido);