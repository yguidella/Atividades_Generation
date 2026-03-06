import leia from 'readline-sync';
import { Queue } from "./Queue";

const fila = new Queue<string>();

let opcao: number;

do{

console.log("\n 1 - Adicionar Cliente na fila");
console.log("\n 2 - Listar Clientes na fila");
console.log("\n 3 - Chamar e retirar Cliente da fila");
console.log("\n 0 - Finalizar");

opcao = leia.questionInt("Digite uma opcao: ");

switch(opcao){
    case 1:
    const nomeCliente = leia.question("\nDigite o nome do cliente: ");
    fila.enqueue(nomeCliente);
    console.log("\nCliente Adicionado!");
    break;

    case 2:
    if (fila.isEmpty()){
        console.log("\nNão há clientes na fila!");
    }
    else{
        console.log("\nFila de Clientes: ");
        fila.printQueue();
    }
    break;

    case 3:
    if (fila.isEmpty()){
        console.log("\nNão há clientes na fila!");
    }
    else{
        const clienteChamado = fila.dequeue();
        console.log(`\nO cliente ${clienteChamado} foi chamado e retirado da fila!`);
    }
    break;

    case 0:
    console.log("Programa Finalizado!");
    break;

    default:
    console.log("Opcao Invalida!");
}

} while (opcao !== 0);




