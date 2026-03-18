// ============================================================
//   ATIVIDADE 02-2 – Objetos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Criando objetos
// ------------------------------------------------------------
// a) Crie um objeto "aluno" com as propriedades: nome, idade, curso.
// b) Exiba o nome do aluno usando notação ponto.

// → Seu código aqui:

const aluno = {
    nome:"Kaio",
    idade:19,
    curso:"Desenvolvimento de Sistemas"
    }

console.log(aluno)
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Aninhamento e acesso
// ------------------------------------------------------------
// a) Adicione uma propriedade "endereco" ao objeto com cidade e rua.
// b) Exiba a cidade

// → Seu código aqui:

aluno.endereco = "Jaraguá do Sul, Rua Joaquim Francisco de Paulo";

console.log(aluno)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Habilidades (array dentro do objeto)
// ------------------------------------------------------------
// a) Adicione uma propriedade "habilidades" (array) ao objeto "aluno".
// b) Exiba a primeira habilidade.

// → Seu código aqui:

aluno.habilidades = ["trabalhador", "cozinha"]

console.log(aluno.habilidades[0])
console.log(aluno)
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Notas e média
// ------------------------------------------------------------
// a) Adicione uma propriedade "notas", sendo esse um array de números.
// b) Exiba em uma única frase, o nome do aluno e suas notas.

// → Seu código aqui:


aluno.notas = [9, 8, 5, 6]

console.log(`O aluno ${aluno.nome} tirou as seguintes notas ${aluno.notas} e passou de ano`)
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Objetos aninhados e alteração
// ------------------------------------------------------------
// a) Adicione uma propriedade "responsavel" que é um objeto com nome e parentesco (mãe ou pai ou irmão, etc).
// b) Exiba o nome do responsável.
// c) Altere o nome do responsável e mostre que o objeto foi atualizado.

// → Seu código aqui:

aluno.responsavel = "Camila, irmã do aluno"
console.log(aluno)

aluno.responsavel = "Karina, outra irmã do aluno"
console.log(aluno)

console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 6 – Lista de alunos (array de objetos)
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" e adicione o objeto "aluno".
// b) Crie outros dois objetos com dados de outros alunos.
// c) Adicione os outros alunos na lista de alunos.
// c) Exiba o nome do segundo aluno da lista.

// → Seu código aqui:

 aluno.listaDeAlunos = [aluno]

console.log(aluno)
let aluno1 = {
    nome1:"Mateus",
    idade1:18,
    curso1:"Analista de Sistemas"
}
let aluno2 = {
    nome2:"Fernando",
    idade2:21,
    curso2:"Engenheiro de Software"
}

aluno.listaDeAlunos = [aluno, aluno1, aluno2]
let listaDeAlunos = [aluno, aluno1, aluno2]
console.log(listaDeAlunos[1])
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Objetos e Arrays
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" que contenha 3 alunos. Cada aluno deve ser um objeto (não uma variável que contem um objeto).
// b) Cada objeto aluno deve conter nome(string), idade(number) e notas(array de numbers).
// c) Exiba o nome e as notas de cada aluno.


// → Seu código aqui:

let aluno3 = {
    nome3:"Gabriel",
    idade3:20,
    notas: [3,6,9,10]
}

let aluno4 = {
    nome4:"Paulo",
    idade4:23,
    notas1:[2,4,6,1]
}

let aluno5 = {
    nome5:"Pablo",
    idade5:24,
    notas2: [4,4,5,7]
}
let ListaAlunos = [aluno3, aluno4, aluno5]
console.log(ListaAlunos)

console.log("_______________________________");
