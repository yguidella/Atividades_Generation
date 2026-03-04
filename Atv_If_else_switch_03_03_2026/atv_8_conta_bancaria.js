import leia from 'readline-sync';

let operacao;
let valor;
let saldo = 1000.00;

console.log("Bem-vindo ao Banco Guidella!\n");
console.log("Escolha a operacao desejada:");
console.log("1 - Saldo");
console.log("2 - Saque");
console.log("3 - Deposito\n");

operacao = leia.questionInt("Operacao: ");

switch (operacao) {

    case 1:
        console.log("\nOperacao - Saldo");
        console.log("\nSaldo: R$" + saldo.toFixed(2));
        break;

    case 2:
        console.log("\nOperacao - Saque");
        valor = leia.questionFloat("\nValor: R$");

        if (valor > saldo) {
            console.log("\nSaldo Insuficiente!");
        } else {
            saldo = saldo - valor;
            console.log("\nNovo Saldo: R$" + saldo.toFixed(2));
        }
        break;

    case 3:
        console.log("\nOperacao - Deposito");

        valor = leia.questionFloat("\nValor: R$");

        saldo = saldo + valor;
        console.log("\nNovo Saldo: R$" + saldo.toFixed(2));
        break;

    default:
        console.log("\nOperacao Invalida!");
}