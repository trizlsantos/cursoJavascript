
const nomeInput = document.getElementById("nome");
const comecarBtn = document.getElementById("comecarBtn");
const jogoDiv = document.getElementById("jogo");
const boasVindas = document.getElementById("boasVindas");
const palpiteInput = document.getElementById("palpite");
const tentarBtn = document.getElementById("tentarBtn");
const mensagem = document.getElementById("mensagem");
const fimDiv = document.getElementById("fim");
const resultado = document.getElementById("resultado");
const jogarNovamenteBtn = document.getElementById("jogarNovamenteBtn");
const recorde = document.getElementById("recorde");
const inicioDiv = document.getElementById("inicio");


let numeroAleatorio = Math.ceil(Math.random() * 100);
let tentativas = 0;
let jogadorNome = "";
let melhorJogador = "-";
let menorTentativas = Infinity;

comecarBtn.addEventListener("click", () => {
    jogadorNome = nomeInput.value.trim();
    
    if (jogadorNome === "") {
        alert("Por favor, insira seu nome!");
        return;
    }
    
    inicioDiv.classList.add("hidden");
    jogoDiv.classList.remove("hidden");
    boasVindas.textContent = `Boa sorte, ${jogadorNome}!`;
});


tentarBtn.addEventListener("click", () => {
    let palpite = parseInt(palpiteInput.value);

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        mensagem.textContent = "Digite um número válido entre 1 e 100!";
        return;
    }

    tentativas++;

    if (palpite < numeroAleatorio) {
        mensagem.textContent = "🔼 Tente um número maior!";
    } else if (palpite > numeroAleatorio) {
        mensagem.textContent = "🔽 Tente um número menor!";
    } else {
        jogoDiv.classList.add("hidden");
        fimDiv.classList.remove("hidden");
        
        let desempenhoMsg = "";
        if (tentativas <= 3) {
            desempenhoMsg = "🧠 Gênio da adivinhação!";
        } else if (tentativas <= 6) {
            desempenhoMsg = "🚀 Muito bem!";
        } else {
            desempenhoMsg = "💪 Persistência é tudo!";
        }

        resultado.textContent = `Parabéns, ${jogadorNome}! Você acertou em ${tentativas} tentativas. ${desempenhoMsg}`;
        
        // Atualiza o recorde
        if (tentativas < menorTentativas) {
            menorTentativas = tentativas;
            melhorJogador = jogadorNome;
            recorde.textContent = `🏅 Melhor jogador: ${melhorJogador} (${menorTentativas} tentativas)`;
        }
    }
});


jogarNovamenteBtn.addEventListener("click", () => {
    numeroAleatorio = Math.ceil(Math.random() * 100);
    tentativas = 0;
    mensagem.textContent = "";
    palpiteInput.value = "";
    
    fimDiv.classList.add("hidden");
    inicioDiv.classList.remove("hidden");
});