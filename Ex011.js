// Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const prompt = require('prompt-sync')()
let soma = 0
for (i=0; i<5; i++) {
 const num = Number(prompt("Digite um número: "))
 soma += num
}

console.log(`A soma total é: ${soma}`)