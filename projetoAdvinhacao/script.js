function jogarAdivinhacao() {
    alert("Bem-vindo ao Jogo da Adivinhação! 🎯");

    let melhorJogador = "";
    let menorTentativas = Infinity;

    while (true) {
        let nomeJogador = prompt("Digite seu nome:");
        let numeroSorteado = Math.ceil(Math.random() * 100);
        let tentativas = 0;
        let palpite;

        alert(`Ok, ${nomeJogador}! Pensei em um número entre 1 e 100. Tente adivinhar!`);

        do {
            palpite = Number(prompt("Digite seu palpite:"));
            tentativas++;

            if (palpite < numeroSorteado) {
                alert("O número é maior! 🔼");
            } else if (palpite > numeroSorteado) {
                alert("O número é menor! 🔽");
            } else {
                let mensagemFinal;

                if (tentativas <= 3) {
                    mensagemFinal = "Uau! Você é um gênio da adivinhação! 🧠";
                } else if (tentativas <= 6) {
                    mensagemFinal = "Muito bem! Você foi rápido! 🚀";
                } else {
                    mensagemFinal = "Conseguiu! Persistência é tudo! 💪";
                }

                alert(`${mensagemFinal} Você acertou em ${tentativas} tentativas!`);

                if (tentativas < menorTentativas) {
                    menorTentativas = tentativas;
                    melhorJogador = nomeJogador;
                    alert(`🏆 Novo recorde! ${melhorJogador} é o melhor jogador com ${menorTentativas} tentativas.`);
                }
            }
        } while (palpite !== numeroSorteado);

        let continuar = prompt("Deseja jogar novamente? (sim/não)").trim().toLowerCase();
        if (continuar !== "sim") {
            alert(`Fim do jogo! 🏁 Melhor jogador: ${melhorJogador}, com ${menorTentativas} tentativas.`);
            break;
        }
    }
}

jogarAdivinhacao();
