import readlinesync = require("readline-sync");

const cores: Array<string> = [];

for (let i = 0; i < 5; i++) {
    const cor = readlinesync.question("Digite uma cor: ");
    cores.push(cor);
}

console.log("\nListar todas as cores: ");
for (let cor of cores) {
    console.log(cor);
}

const coresOrdenadas = [...cores].sort();

console.log("\nOrdenar as cores:");
for (let cor of coresOrdenadas) {
    console.log(cor);
}