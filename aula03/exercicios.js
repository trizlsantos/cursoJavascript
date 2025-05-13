// Exercicio 02 - faixa étaria

/* let idade = parseInt(prompt("qual a sua idade?"))

if (idade >= 65) {
    console.log("Você é um idoso")
}

else if(idade >= 18){ 
    console.log("Você é um adulto")
}

else if(idade >= 13){
    console.log("Você é um adolescente")

} else {
    console.log("Você é uma criança")
}
    */


// Exercício 4 - Calculadora Simples 1

/* let num1 = parseInt(prompt("Digite um número inteiro"));
let num2 = parseInt(prompt("Digite o segundo número inteiro"));
let operacao = parseInt(prompt("Escolha uma operação:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão"));

switch (operacao) {
    case 1:
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case 2:
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case 3:
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        break;
    case 4:
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
        break;
    default:
        console.log("Operação inválida. Escolha 1 para soma, 2 para subtração, 3 para multiplicação ou 4 para divisão.");
        break;
}
*/

//Exercicio 5 - Imprimindo Intervalo

let valorInicial = parseInt(prompt("Digite o valor inicial"))
let valorFinal = parseInt(prompt("Digite o valor final"))

for(let contador = valorInicial; contador < valorFinal; contador++){
    console.log(contador)
}