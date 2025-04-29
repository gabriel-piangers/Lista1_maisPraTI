// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
//    "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require(`prompt-sync`)()

const nota = Number(prompt(`digite sua nota (0-10): `))
let situacao = null

if(nota) {
   if (nota >= 6) situacao = `Aprovado`
   else if (nota >= 4) situacao = `Recuperação`
   else situacao = 'Reprovado'
}

if(situacao) {
    console.log(situacao)
}
