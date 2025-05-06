// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.
const prompt = require('prompt-sync')()

let nums = []

for (i=0; i<2; i++) {
 const num = prompt("digite um número: ")
 nums.push(num)
}

console.log(`Os números em ordem crescente são: ${nums.sort((a, b) => a - b)}`)
