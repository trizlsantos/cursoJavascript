/*function somar (n1, n2){
    return n1 + n2 
}

let soma = somar(3, 4);
console.log(`Soma: ${soma}`);

let n1 = 5, n2 = 2;
soma = somar(n1, n2)
soma = somar(`Soma: ${soma}`)

function mensagem(){
    console.log("Olá mundo")
}

function mensagemPersonalizada(nome){
    console.log(`Olá ${nome}`)
}

function obterAnoAtual(){
    new Date ().getFullYear();
}

function multiplicar(n1, n2) {
    return n1 * n2
}

mensagem();

function calcularArea(largura, altura){
    const area = largura * altura;

    if (area > 20){
        console.log("Ultrapassou o limite!");
    }
    else {
        return area;
    }
}

console.log(calcularArea(2, 3));
console.log(calcularArea(2));
console.log(calcularArea());
console.log(calcularArea(2, 3, 4, 5));
console.log(calcularArea(5, 5));


const mensagem = function (nome){
    return `Olá, ${nome}`;
}

console.log(mensagem("bia"));

function calculo(op) {
    if (op === "+") {
        return function (a, b) {
            return a + b;
        }
    }
    else if (op === "-"){
        return function (a, b){
            return a - b;
        }
    }
}

const somar = calculo("+")
console.log(somar(2, 3));

*/

const somar = (a, b) => {
    return a + b;
}

function calculo(n1, n2, op){
    console.log(op(n1, n2))
}
calculo(2, 3, somar);

function FecharPedido(nome, callback){
    console.log(`Usuário: ${nome}\nFechando pedido...`);
    
    callback()
}

function mensagem(){ 
    console.log("Pedido concluído");
}
