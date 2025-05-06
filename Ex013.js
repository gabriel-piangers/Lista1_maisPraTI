// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require('prompt-sync')()

const nums = []

while (true) {
    const num = Number(prompt('Digite um número (0 - Interromper): '))
    if(num == 0) {
        break
    } else {
        if(num) {
            nums.push(num)
        } else {
            console.log('Entrada inválida')
        }
    }
}

const soma = nums.reduce((acc, num) => acc + num, 0)
console.log(`Média: ${soma/nums.length}`)
