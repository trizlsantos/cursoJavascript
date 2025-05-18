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


// Exercício 2 - Calculadora Simples 2

function calcular(num1 = 0, num2 = 1, operador = "+") {
    switch (operador) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 === 0) return "Erro: Divisão por zero não permitida.";
            return num1 / num2;
        case "%":
            if (num2 === 0) return "Erro: Operação módulo por zero não permitida.";
            return num1 % num2;
        default:
            return "Erro: Operador inválido.";
    }
}

function iniciarCalculadora() {
    while (true) {
        let num1 = parseFloat(prompt("Digite o primeiro número:") || 0);
        let num2 = parseFloat(prompt("Digite o segundo número:") || 1);
        let operador = prompt("Digite o operador matemático (+, -, *, /, %):") || "+";
        
        let resultado = calcular(num1, num2, operador);
        alert(`Resultado: ${resultado}`);
        
        let continuar = prompt("Deseja fazer outro cálculo? (sim ou não):")
        if (continuar !== "sim") {
            alert("Programa encerrado.");
            break;
        }
    }
}

iniciarCalculadora();


// Exercício 3 - Saudação com Horário
const mensagemDeBoasVindas = (nome) => {
    const hora = new Date().getHours();
    let saudacao;

    if (hora >= 6 && hora <= 11) {
        saudacao = "Bom dia";
    } else if (hora >= 12 && hora <= 17) {
        saudacao = "Boa tarde";
    } else if (hora >= 18 && hora <= 23) {
        saudacao = "Boa noite";
    } else {
        saudacao = "Olá";
    }

    return `${saudacao}, ${nome}!`;
};


const nomeUsuario = prompt("Digite seu nome:");
alert(mensagemDeBoasVindas(nomeUsuario));



// Exercício 4 - Cálculo de Desconto

const calcularDesconto = (preco, porcentagemDesconto) => {
    if (isNaN(preco) || isNaN(porcentagemDesconto)) {
        return "Erro: Insira valores numéricos válidos.";
    }
    if (preco < 0 || porcentagemDesconto < 0 || porcentagemDesconto > 100) {
        return "Erro: Valores inválidos. O preço deve ser positivo e o desconto entre 0 e 100.";
    }

    const valorFinal = preco - (preco * (porcentagemDesconto / 100));
    return `O valor final do produto com desconto é: R$ ${valorFinal.toFixed(2)}`;
};

while (true) {
    let preco = parseFloat(prompt("Digite o preço do produto:"));
    let porcentagemDesconto = parseFloat(prompt("Digite a porcentagem de desconto:"));

    alert(calcularDesconto(preco, porcentagemDesconto));

    let continuar = prompt("Deseja calcular o desconto de outro produto? (sim/não)").trim().toLowerCase();
    if (continuar !== "sim") {
        alert("Programa encerrado.");
        break;
    }
}
*/

//Exercício 5 - Mensagem com Atraso
function executarComAtraso(mensagem, callback) {
    setTimeout(() => {
        console.log(mensagem);
        callback();
    }, 2000);
}

const saudacaoFinal = () => {
    console.log("Processo concluído! Tenha um ótimo dia!");
};


executarComAtraso("Carregando dados...", saudacaoFinal);
