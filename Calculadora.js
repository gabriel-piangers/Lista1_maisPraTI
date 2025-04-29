const prompt = require("prompt-sync");
const readline = require("readline");

console.log("1 - adição");
console.log("2 - subtração");
console.log("3 - multiplicação");
console.log("4 - divisão");

const leitor = readline.createInterface(process.stdin, process.stdout);

let num1;
let num2;
let op;
leitor.question("Qual operação você quer fazer?", (inOp) => {
  op = parseInt(inOp);
  leitor.question("informe o primeiro número: ", (inN1) => {
    num1 = parseFloat(inN1);
    leitor.question("informe o segundo número: ", (inN2) => {
      num2 = parseFloat(inN2);

      let resultado;

      switch (op) {
        case 1:
          resultado = num1 + num2;
          break;
        case 2:
          resultado = num1 - num2;
          break;
        case 3:
          resultado = num1 * num2;
          break;
        case 4:
          resultado = num1 / num2;
          break;
        default:
          console.log("operação não suportada");
      }

      console.log("resultado: ", resultado);
      leitor.close();
    });
  });
});

// const entrada = prompt()
// console.log(entrada)
