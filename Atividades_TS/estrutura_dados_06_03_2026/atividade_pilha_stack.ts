import leia from 'readline-sync';
import { Stack } from "./Stack";

const pilha = new Stack<string>();
let opcao: number;

do{
    console.log("\n 1 - Adicionar um novo livro na pilha");
    console.log("\n 2 - Listar todos os livros da Pilha");
    console.log("\n 3 - Retirar um livro da pilha");
    console.log("\n 0 - Finalizar");

    opcao = leia.questionInt("\nDigite uma opcao: ");

    switch(opcao){

        case 1:
            const nomeLivro = leia.question("\nDigite o nome do Livro: ");
            pilha.push(nomeLivro);
            console.log("\nLivro adicionado na pilha!");
            break;

        case 2:
            if (pilha.isEmpty()){
            console.log("\nNão há livros na pilha!");
            }
            else{
            console.log("\nLivros na pilha:");
            pilha.printStack();
            }
            break;

        case 3:
            if (pilha.isEmpty()){
            console.log("\nNão há livros na pilha!");
            }
            else{
            const livroRetirado = pilha.pop();
            console.log(`\nO Livro ${livroRetirado} foi retirado da pilha!`);
            }
            break;

        case 0:
            console.log("Programa Finalizado!");
            break;

        default:
            console.log("Opcao Invalida!");
            
    }

} while (opcao !==0);
