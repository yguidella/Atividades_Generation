import readlinesync = require("readline-sync");

const numeros = new Set<number>();

for (let i = 0; i < 10; i++) {
    const num = readlinesync.questionInt("Digite um numero: ");
    numeros.add(num);
}