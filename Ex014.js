// Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require('prompt-sync')()

const num = Number(prompt('Digite um número: '))
let fatorial = 1
if(!isNaN(num) && num >= 0) {
    for(i=num; i>1; i--) {
        fatorial *= i
    }
    console.log(`Fatorial de ${num}: ${fatorial}`)
} else {
    console.log('Entrada inválida')
}
