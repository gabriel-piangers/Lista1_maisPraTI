// Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require('prompt-sync')()

const entrada = Number(prompt('Digite um número: '))

if (entrada) {
    for(i = 0; i<10; i++) {
        console.log(entrada)
    }
} else {
    console.log('Entrada inválida')
}