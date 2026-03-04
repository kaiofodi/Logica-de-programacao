
// ============================================================
//   ATIVIDADE 01.1 – Variáveis e Tipos Primitivos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================

// ------------------------------------------------------------
// EXERCÍCIO 1 – Apresentação criativa
// ------------------------------------------------------------
// Crie variáveis para nome, idade e hobby favorito.
// Monte uma frase usando template literal que se apresente e diga o que gosta de fazer.

// → Seu código aqui:

let nome = "kaio"
let idade = 19
let hobby = "Gosto de jogar no computador"
let String = `Olá Mundo! Me chamo ${nome}, tenho ${idade} e meu hobby quando há tempo seria ${hobby}`

console.log(String)
console.log("______________________________")



// ------------------------------------------------------------
// EXERCÍCIO 2 – Frase sobre clima
// ------------------------------------------------------------
// Crie variáveis para cidade e temperatura atual (número).
// Use template literal para criar uma frase como:
// "Hoje em <cidade> está fazendo <temperatura>°C, perfeito para ..."

// → Seu código aqui:

let cidade = "Jaraguá do Sul"
let temperatura = 25
let Temp = `Hoje em ${cidade} está fazendo ${temperatura} graus Celsius, perfeito para dar um tomar um terere`


console.log(Temp)
console.log("______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 3 – Tipos primitivos em frases
// ------------------------------------------------------------
// Crie uma variável de cada tipo primitivo: string, number, boolean, undefined, null.
// Para cada uma, exiba uma frase usando template literal que diga o valor e o tipo.

// → Seu código aqui:

let strings = "motoca"
let number = 160
let boolean = false
let undefined
let object = null
let templiteral = `Eu tenho uma ${strings}, com ${number} cilindradas, e ela gasta muito ${boolean}, ${undefined} e ${object}` 

console.log(typeof "motoca")
console.log(typeof 160)
console.log(typeof false)
console.log(typeof undefined)
console.log(typeof null)

console.log(templiteral)
console.log("______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 4 – Mini história
// ------------------------------------------------------------
// Crie variáveis para personagem, idade, cidade e missão.
// Monte uma frase usando template literal contando uma mini história com esses dados.

// → Seu código aqui:

let persona = "Senju"
let idade1 = 35
let cidadela = "Tokyo"
let missao = "Conquistar territorio"
let literal = `Em uma pequena aldeia vivia ${persona}, uma mulher que tem ${idade1} anos e desde pequena foi treinada a lutar e então foi lhe dada uma ${missao} em ${cidadela}`

console.log(literal)
console.log("______________________________")

// ------------------------------------------------------------
// EXERCÍCIO 5 – Mensagem motivacional
// ------------------------------------------------------------
// Crie uma variável com seu nome e outra com um objetivo para este ano.
// Use template literal para criar uma mensagem motivacional personalizada.

// → Seu código aqui:

let name = "Kaio"
let objetivo = "Futura área de trabalho"
let litera = `${name}, eu sei que tá dificil conciliar trabalho com estudos mas lembra do teu ${objetivo}`

console.log(litera)
console.log("______________________________")


// ------------------------------------------------------------
// EXERCÍCIO 6 – Menu
// ------------------------------------------------------------
// Utilizando apenas console.log(), reproduza o menu que esta na imagem "exemplo-menu-atividade-01-2" anexa junto a esta atividade

// → Seu código aqui: 

console.log("==================================")
console.log("SISTEMA DO USUÁRIO")
console.log("==================================")
console.log("1 - Ver Perfil")
console.log("2 - Editar Perfil")
console.log("3 - Configurações")
console.log("4 - Notificações")
console.log("5 - Relatórios")
console.log("6 - Ajuda")
console.log("7 - Sobre o Sistema")
console.log("0 - Sair")
console.log("==================================")
console.log("Digite o número da opção desejada")
console.log("==================================")