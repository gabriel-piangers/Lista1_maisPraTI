// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

const prompt = require(`prompt-sync`)()

const massa = Number(prompt("peso(kg): "))
const altura = Number(prompt("altura(m): "))

const IMC = massa / (altura*altura)
let categoria = null
if(!IMC) {
    console.log('Entrada inválida')
} else{
    console.log(`IMC: ${IMC}`)

    if(IMC <= 18.5) {
        categoria = 'Abaixo do peso'
    } else if (IMC <= 24.9) {
        categoria = 'peso ideal' 
    } else if (IMC <= 29.9) {
        categoria = 'Excesso de peso' 
    } else if (IMC <= 34.9) {
        categoria = 'Obesidade classe 1' 
    } else {
        categoria = 'Obesidade clase 2'
    }

    console.log(`Categoria: ${categoria}`)
}

