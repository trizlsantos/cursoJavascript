// let numero = -25;

// if(numero === 0){
    // console.log("eh zero")
// }

// else if (numero > 0) {
  //   console.log("eh positivo")
// } else {
 //   console.log("eh negativo")
// }

/* let nota = 7;


[7, 10] -> aprovado
[4, 6] -> recuperação
[0, 3] -> reprovado


if(nota >= 7 && nota <=10) {
    console.log("Aprovado")
}
else if(nota >= 4 && nota <= 6){
    console.log("Recuperação")
}
else{
    console.log("Reprovado")
}
*/


/* let opcao = 3;

switch (opcao) {
    case 1:
        console.log("adicionar livro...");
        break;
    case 2:
        console.log("Removendo livro...");
        break;
    case 3:
         console.log("listando livro...");
         break;
    case 4:
         console.log("Buscando livro")
        break;
    default:
        console.log("opção invalida")
        break;
}
*/

//Falsy: undefined, null, NaN, 0, ***
// Truthy: numero 1=0, [], {}, ""

/* for (let contador = 0; contador <= 100; contador++){
    console.log(contador);
}

let qtdNumeros = parseInt(prompt("quantos numeros?"));

for (let contador = 0; contador < qtdNumeros; contador++) {
    let qtdPares = 0, qtdImpares = 0, soma = 0;
    let numero = parseInt(prompt("Digite um número: "))

    if (numero % 2 == 0){
        qtdPares++;
    }
    else{
        qtdImpares++; 
    }

    soma = soma + numero;
}

console.log(`Pares: ${qtdPares}`);
console.log(`Impares: ${qtdImpares}`);
*/

while (true) {
    let numeroSorteado = Math.ceil(Math.random() * 10);

    if (numeroSorteado === 3) {
        console.log("saindo...");
        break; 
    }

    console.log(numeroSorteado); 
}

