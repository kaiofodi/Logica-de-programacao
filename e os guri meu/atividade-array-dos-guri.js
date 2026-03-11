// ============================================================
//   ATIVIDADE 02 – Arrays (Listas) em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Criando e acessando arrays
// ------------------------------------------------------------
// a) Crie uma array chamada "cores" com pelo menos 4 cores.
// b) Exiba a primeira e a última cor usando índices.

// → Seu código aqui:
let cores = ["ciano", "ocre", "jade", "rubi"]
console.log(cores[0])
console.log(cores[3])

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Métodos básicos
// ------------------------------------------------------------
// a) Adicione uma nova cor ao final de "cores", utilizando as funções de array.
// b) Remova a primeira cor, utilizando as funções de array.
// c) Exiba o array resultante e depois a quantidade de itens armazendos (length).

// → Seu código aqui:

cores.push("roxo")
console.log("push", cores)

cores.shift()
console.log("shift", cores)

console.log(cores.length)
console.log(`A quantidade de cores que há na lista são: ${cores.length}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Números
// ------------------------------------------------------------
// a) Crie um array de números.
// b) Em uma única linha, exiba os valores armazenados nesta lista e a quantidade de números armazenados (quantidade de itens, não a soma)

// → Seu código aqui:

const numeros = [2, 4, 8, 16]

console.log(numeros, numeros.length)
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Todos os tipos
// ------------------------------------------------------------
// a) Crie um array com todos os tipos de dados que você conhece (number, string...).
// b) Em uma única linha, exiba os valores armazenados nesta lista e a quantidade de itens armazenados

// → Seu código aqui:

let tipos = [7, "vacuo", false, undefined, null]

console.log(tipos, tipos.length)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Mudando a lista
// ------------------------------------------------------------
// a) Crie um array com vários dados de vários tipos diferentes.
// b) Exiba a lista.
// c) Remova o primeiro e o último item da lista, utilizando as funções de array.
// d) Exiba a lista novamente.
// e) Adicione um novo item no final e ou no início da lista.
// f) Exiba a lista final.

// → Seu código aqui:

let dados = ["palmeira-real", 14, false]
console.log(dados)

dados.pop()
console.log("pop", dados)
dados.shift()
console.log("shift", dados)

dados.unshift("porco")
console.log("unshift", dados)



console.log("_______________________________");