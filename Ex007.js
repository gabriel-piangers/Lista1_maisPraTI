// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require(`prompt-sync`)()

const qtd = Number.parseInt(prompt('Quantidade de maçãs compradas: '))
let total = null

if (qtd && qtd>=0) {
    if (qtd<12) total = qtd * 0.3
    else total = qtd * 0.25

    console.log(`Total: ${total}`)
} else {
    console.log('Entrada inválida')
}