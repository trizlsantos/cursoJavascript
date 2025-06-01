
let dado1 = Math.floor(Math.random() * 6) + 1;
let dado2 = Math.floor(Math.random() * 6) + 1;


document.querySelector(".img1").setAttribute("src", `imagens/dado${dado1}.png`);
document.querySelector(".img2").setAttribute("src", `imagens/dado${dado2}.png`);


let resultado = "";
if (dado1 > dado2) {
    resultado = "🚩 O Jogador 1 Venceu!";
} else if (dado2 > dado1) {
    resultado = "O Jogador 2 Venceu! 🚩";
} else {
    resultado = "Empate!";
}


document.querySelector("h1").textContent = resultado;