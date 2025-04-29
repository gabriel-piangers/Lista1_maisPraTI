// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//    adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//    controle if-else.

idade = 16

if(idade < 13) {
    console.log(`criança`)
} else if (idade < 18) {
    console.log(`adolescente`)
} else if (idade < 59) {
    console.log(`Adulto`)
} else {
    console.log(`idoso`)
}