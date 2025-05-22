const numeros = [1, 2, 3]
const numerosDobrados = []

for (let i = 0; i < numeros.length; i++) {
    numerosDobrados[i] = numeros[i] * 2
}
console.log(numeros)
console.log(numerosDobrados)

//push

const alunos = ['Lucas', 'João', 'Maria']

alunos.push('Ana')
console.log(alunos)

//unshift - move para o início
alunos.unshift('Pedro')
console.log(alunos)

//pop - remove o último elemento
let ultimoAluno = alunos.pop()
console.log(ultimoAluno)
console.log(alunos)

//shift - remove o primeiro elemento
let primeiroAluno = alunos.shift()
console.log(primeiroAluno)
console.log(alunos)

//sort()

const notas = [9.1, 8.8, 7.6, 9]
notas.sort((a, b) => a - b)
console.log(notas)

//splice()

 numeros.splice(0, 4, -5,-7,-3,-2)
 console.log(numeros)

 //concat ()

    const alunos1 = ['Lucas', 'João', 'Maria']
    const alunos2 = ['Pedro', 'Ana', 'Carlos']
    const alunos3 = alunos1.concat(alunos2)
    console.log(alunos3)


    // for...of

    const num = [1, 2, 3]
    const numerosDobro = []

    for (let numero of num) {
        numerosDobro.push(numero * 2)
    }
    console.log(numerosDobro)

    // for...in passsa por cada elemento volta o índice
    const pessoa = {
        nome: 'Lucas',
        idade: 25,
        cidade: 'São Paulo'
    }
    for (let chave in pessoa) {
        console.log(chave, pessoa[chave])
    }

    // forEach () - é igual ao for...of mas não é possível usar o break e continue
    const numeros1 = [1, 2, 3]
    numeros1.forEach((numero, indice) => {
        console.log(`Número: ${numero}, Índice: ${indice}`)
    }
    )

    numeros1.forEach((valor) => {
        if (valor % 2 === 0) {
            console.log(valor)
        }
    })

    // map() - retorna um novo array com os valores transformados
    const numeros2 = [1, 2, 3]  
    const numerosDobro1 = numeros2.map(numero => numero * 2)
    console.log(numerosDobro1)

    // filter() - retorna um novo array com os valores filtrados
    const numeros3 = [1, 2, 3, 4, 5]
    const numerosPares = numeros3.filter(numero => numero % 2 === 0)
    console.log(numerosPares)

    // reduce() - reduz um array a um único valor
    const numeros4 = [1, 2, 3, 4, 5]
    const soma = numeros4.reduce((acc, numero) => acc + numero, 0)
    console.log(soma)
