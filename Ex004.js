// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require(`prompt-sync`)()

console.log('')
const op = Number(prompt('Escolha uma opção(1 - 3): '))

switch (op) {
    case 1:
        console.log('Bom dia!')
        break
    case 2: 
        console.log('Boa Tarde!')
        break
    case 3: 
        console.log('Boa noite!')
        break
    default:
        console.log('Insira uma opção válida')
}