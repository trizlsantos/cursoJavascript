// Exercício 1 - Cadastro de Usuário

function usuario(nome, idade, email){
    this.nome = nome;
    this.idade = idade;
    this.email = email;
}
 
const usuario1 = new usuario("bia", 17, "bia@gmail.com" )
console.log(usuario1) 

//Exercício 2 - Atualizar Idade
function usuario2(nome, idade, email){
    this.nome = nome;
    this.idade = idade;
    this.email = email;
}
    const usuario3 = new usuario2("Marcos", 19, "marquinhos@hotmail.com" )
    usuario2.idade = 25
    console.log(usuario2.idade);


//Exercício 3 - Explorador de Objetos
function explorarObjeto(nome, idade, cidade){
     this.nome = nome;
     this.idade = idade;
     this.cidade = cidade;
}
// keys()
let chaves = Object.keys(explorarObjeto);
console.log(chaves);

// values()
let valores = Object.values(explorarObjeto);
console.log(valores);

// entries()
let chaveValor = Object.entries(explorarObjeto);
console.log(chaveValor);

// Iteração
for (let chave in explorarObjeto) {
    console.log(`chave: ${explorarObjeto[chave]}`);
}

//Exercício 4 - Catálogo de Produtos

