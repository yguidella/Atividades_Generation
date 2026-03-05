import leia from 'readline-sync';

let idade
let genero
let dev

let totalBackend = 0;
let totalFrontendMulheres = 0;
let totalMobileHomens40 = 0;
let totalFullStackNaoBinarios30 = 0;
let totalPessoas = 0;
let somaIdades = 0;

const generos = [
    " ", 
    "Mulher Cis",
    "Homem Cis",
    "Nao Binario",
    "Mulher Trans",
    "Homem Trans",
    "Outros"
];

const devs = [
    " ",
    "Backend",
    "Frontend",
    "Mobile",
    "Fullstack"
];

let continuar = true;

while (continuar) {
    idade = leia.questionInt("\nDigite a idade do colaborador: ");
    console.log("Idade digitada:", idade);

    genero = leia.questionInt(`
    \nEscolha a identidade de genero:\n
    1 - Mulher Cis 
    2 - Homem Cis
    3 - Nao Binario
    4 - Mulher Trans
    5 - Homem Trans
    6 - Outros
    \nDigite o numero correspondente:
    `);

    while (genero < 1 || genero > 6) {
    console.log("\nOpcao invalida! Digite um numero de 1 a 6");
    genero = leia.questionInt("\nDigite novamente: ");
    }
    
    console.log("\nGenero selecionado:", generos[genero]);

    dev = leia.questionInt(`
    \nEscolha o tipo de pessoa desenvolvedora:
    1 - Backend
    2 - Frontend
    3 - Mobile
    4 - Fullstack
    \nDigite o numero correspondente:
    `)

    while (dev < 1 || dev > 4) {
    console.log("\nOpcao invalida! Digite um numero de 1 a 4");
    dev= leia.questionInt("\nDigite novamente: ");
    }

    console.log("\nTipo de desenvolvedor(a/e): ", devs[dev]);
    
    totalPessoas++;
    somaIdades += idade;   

    if(dev === 1) {
    totalBackend++;
    }

    if((genero === 1 || genero === 4) && dev === 2) {
    totalFrontendMulheres++;
    }

    if((genero === 2 || genero === 5) && dev === 3 && idade > 40) {
    totalMobileHomens40++;
    }

    if(genero === 3 && dev === 4 && idade < 30) {
    totalFullStackNaoBinarios30++;
    }

    let resposta = leia.question("\nDeseja cadastrar outro colaboradore? (S/N): ").toUpperCase();
    if(resposta === "N") {
        continuar = false;
    }  

}

if (totalPessoas > 0){

    let media = somaIdades / totalPessoas;

    console.log("\nResultados da pesquisa de colaboradores");
    console.log("\nTotal Backend: ", totalBackend);
    console.log("Total Mulheres Cis e Trans Frontend: ", totalFrontendMulheres);
    console.log("Total Homens Cis e Trans Mobile > 40: ", totalMobileHomens40);
    console.log("Total Nao Binarios Fullstack < 30: ", totalFullStackNaoBinarios30);
    console.log("Total de pessoas participantes: ", totalPessoas);
    console.log("Media de idade: ", Math.round(media));
}

else {
    console.log("Nenhum colaborador foi cadastrado!");
}
