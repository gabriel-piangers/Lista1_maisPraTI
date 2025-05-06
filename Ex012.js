// Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

const prompt = require("prompt-sync")()

const num = Number(prompt("Digite um número: "))

if (num) {
  for (i = 1; i <= 10; i++) {
    console.log(i * num)
  }
} else {
  console.log("Entrada inválida")
}
