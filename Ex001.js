// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

const prompt = require('prompt-sync')()

const num = Number(prompt('Digite 1 número: '))

if (!num) {
    console.log("Digite um número válido")
} else if(num%2 === 0) {
    console.log("Número par")
} else {
    console.log("Numero impar")
}

