// Exercício 1 - Verificador de Idade


/* 
function verificarIdade(nome = "visitante", idade) {
    if (idade < 0 || idade > 120) {
        alert("Idade inválida");
    } else if (idade >= 18) {
        alert(`Olá, ${nome}! Você é maior de idade.`);
    } else {
        alert(`Olá, ${nome}! Você é menor de idade.`);
    }
}

function iniciarVerificacao() {
    let continuar = confirm("Deseja verificar uma idade?");

    while (continuar) {
        let nome = prompt("Digite seu nome") || "visitante";
        let idade = parseInt(prompt("Digite sua idade"));

        if (!isNaN(idade) && idade >= 0 && idade <= 120) {
            verificarIdade(nome, idade);
        } else {
            alert("Insira uma idade válida.");
        }

        continuar = confirm("Deseja verificar outra idade?");
    }
}
iniciarVerificacao();
*/

// Exercício 2 - Calculadora Simples 2

function calcular (num1 = 0, num2= 0, operacao = "+") {
    
}



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