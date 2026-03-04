import leia from 'readline-sync';

let codigo;
let quantidade;
let produto;
let preco = 0;
let total;

console.log("Bem vindo a Lanchonete Guidella!\n");

console.log("Codigos dos produtos para realizar seu pedido!\n")

console.log("1 - Cachorro Quente - R$ 10.00\n");
console.log("2 - X-Salada - R$ 15.00\n");
console.log("3 - X-Bacon - R$ 18.00\n");
console.log("4 - Bauru - R$ 12.00\n");
console.log("5 - Refrigerante - R$ 8.00\n");
console.log("6 - Suco de Laranja - R$ 13.00\n");

codigo = leia.questionInt("Codigo do Produto: ");
quantidade = leia.questionInt("Quantidade: ");

switch (codigo) {
    case 1:
        produto = "Cachorro Quente";
        preco = 10.00;
        break;

    case 2:
        produto = "X-Salada";
        preco = 15.00;
        break;

    case 3:
        produto = "X-Bacon";
        preco = 18.00;
        break;

    case 4:
        produto = "Bauru";
        preco = 12.00;
        break;

    case 5:
        produto = "Refrigerante";
        preco = 8.00;
        break;

    case 6:
        produto = "Suco de Laranja";
        preco = 13.00;
        break;

    default:
        console.log("Codigo invalido!");
}


total = quantidade * preco;

console.log("Produto: " + produto);
console.log("Valor total do pedito: R$ " + total.toFixed(2));