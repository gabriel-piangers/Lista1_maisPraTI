// Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

const prompt = require('prompt-sync')()

function fibonacci(n) {
    if(isNaN(n) || n<=0) return false
    
    let prev = 1
    let atual = 1
    for(i=0;i<(n-2);i++) {
        const x = atual
        atual += prev
        prev = x
    }

    return atual
}

const entrada = Number(prompt('Digite um número: '))

const fib = fibonacci(entrada)

if(fib){
    console.log(fib)
} else {
    console.log('Entrada inválida')
}
