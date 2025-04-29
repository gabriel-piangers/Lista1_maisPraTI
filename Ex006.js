// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.

const prompt = require(`prompt-sync`)()

const a = Number(prompt('Comprimento do Lado a do trinangulo: '))
const b = Number(prompt('Comprimento do Lado b do trinangulo: '))
const c = Number(prompt('Comprimento do Lado c do trinangulo: '))

if(!a || !b || !c) {
    console.log('Valores inválidos')
} else {
    if(a < b+c && b < a+c && c < a+b) {
        if(a===b===c) console.log('Triângulo Equilatero')
        else if(a===b || a===c || c===b) console.log('Triângulo Isóceles')
        else console.log('Triângulo Escaleno')

    } else {
        console.log('Não se pode formar um triângulo com estes lados')
    }
}
