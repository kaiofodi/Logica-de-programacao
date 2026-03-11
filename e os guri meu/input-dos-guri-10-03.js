// ============================================================
//   ATIVIDADE 03 – Input e Output em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Lembre-se de criar uma variável para utilizar o readline-sync
//     let lerTeclado = require('readline-sync');
// Para executar:
//     node <nomeDoArquivo>.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados não serão solicitados novamente.
// ============================================================
let lerTeclado = require('readline-sync');

// ------------------------------------------------------------
// EXERCÍCIO 1 – Explorando os métodos do console
// ------------------------------------------------------------
// a) Use console.log() para exibir a mensagem: "Iniciando o programa..."
// b) Use console.info() para exibir uma mensagem informando sobre o que é a atividade atual.
// c) Use console.warn() para exibir um aviso de que o usuário sempre precisa iniciar o programa com node e o nome do arquivo.
// d) Use console.error() para exibir uma mensagem de erro aleatória de sua escolha.

// → Seu código aqui:

/*
console.log('Iniciando o programa');
console.info('Info: atividade sobre input');
console.warn('Aviso: Lembrar de sempre iniciar o programa com node e o nome do arquivo');
console.error('Erro: tu errou alguma coisa ai')
*/

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Saudação personalizada
// ------------------------------------------------------------
// a) Peça ao usuário que digite seu nome usando question().
// b) Peça ao usuário que digite sua idade usando questionInt().
// c) Exiba no console uma saudação usando template literal, no formato:
//    "Olá, <nome>! Você tem <idade> anos."

// → Seu código aqui:

/*
const nomeUser = lerTeclado.question('Qual o seu nome: ');
const idadeUser = lerTeclado.questionInt('Quantos anos tem: ');

console.log(`Olá, ${nomeUser}! Você tem ${idadeUser} anos.`)
console.log("_______________________________");
*/

// ------------------------------------------------------------
// EXERCÍCIO 3 – Ficha pessoal
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados: nome, idade e cidade.
// b) Crie um objeto chamado "ficha" com as propriedades: nome, idade e cidade.
// c) Exiba o objeto com console.table().

// → Seu código aqui:
/*
const nameUser = lerTeclado.question("Qual e o seu nome: ")
const years = lerTeclado.questionInt("Quantos anos tens: ")
const city = lerTeclado.question("Qual e a sua cidade: ")

const ficha = [
{Nome: "kaio", idade: 19, cidade: "jaragua do sul"}
]

console.table(ficha)
*/
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Perguntas de sim ou não
// ------------------------------------------------------------
// a) Faça duas perguntas de sim/não ao usuário usando keyInYN().
// b) Armazene as respostas em variáveis.
// c) Exiba as respostas no console usando template literal.

// → Seu código aqui:
/*
const praticaEsporte = lerTeclado.keyInYN("Voce pratica esportes? (y/n) ")
const jogaSinuca = lerTeclado.keyInYN("Joga uma sinuquinha? (y/n)")

console.log(`${praticaEsporte ? 'yes' : 'no'}.`)
console.log(`${jogaSinuca ? 'yes' : 'no'}.`)
*/

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Lista de favoritos
// ------------------------------------------------------------
// a) Peça ao usuário que informe 3 comidas favoritas, uma por vez.
// b) Armazene as 3 respostas em uma array chamada "comidasFavoritas".
// c) Exiba a array com console.table().

// → Seu código aqui:
/*
const comidaUser = lerTeclado.question('Qual suas 03 comidas que mais gosta: ')
let comidasFavoritas = ['cuca', 'churrasco', 'maça']

console.table(comidasFavoritas)
*/
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Apresentação completa
// ------------------------------------------------------------
// a) Peça ao usuário: nome, profissão e cidade.
// b) Armazene estes dados em um objeto 'cadastroPessoal'
// c) Exiba no console uma frase completa com os dados, usando template literal:
//    "Me chamo <nome>. Profissão: <profissão> e moro na cidade de: <cidade>."
// d) Exiba a mesma informação com console.table().

// → Seu código aqui:
/*
const nomeus = lerTeclado.question('Qual e o seu nome: ')
const profissao = lerTeclado.question('Com o que trabalha: ')
const cidade1 = lerTeclado.question("Onde mora: ")

const cadastroPessoal = [
    {nome: "kaio", idade: 19, cidade: "jaras city"}
]

console.log(`Me chamo ${nomeus}. Profissao: ${profissao} e moro na cidade de: ${cidade1}.`)
console.table(cadastroPessoal)
*/
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Lista de objetos
// ------------------------------------------------------------
// a) Através do terminal, capture o dado de 3 usuários fictícios, cada um com as seguintes propriedades:
//    nome(string), idade(number) e endereço(objeto).
//    objeto endereço deve conter as propriedades: cidade(string), rua(string) e numero(number)
// b) Armazene cada usuário em um objeto.
// c) Armazee os objetos em um array 'listaDeUsuarios'
// d) Exiba o array com console.table().
// e) Exiba somente o nome e a idade do 2º usuário.
// f) Exiba somente o endereço completo do 3º usuário.
// g) Exiba somente o nome e a rua do 1º usuário.

// → Seu código aqui:
/*
const user1 = lerTeclado.question('Seu nome qual e: ')
const idade1 = lerTeclado.question('Tens quantos anos: ')
const endereco1 = lerTeclado.question('Qual seu endereco: ')

console.log("_______________________________");

const user2 = lerTeclado.question('Seu nome qual e: ')
const idade2 = lerTeclado.question('Tens quantos anos: ')
const endereco2 = lerTeclado.question('Qual seu endereco: ')

console.log("_______________________________");

const user3 = lerTeclado.question('Seu nome qual e: ')
const idade3 = lerTeclado.question('Tens quantos anos: ')
const endereco3 = lerTeclado.question('Qual seu endereco: ')
*/
/*
const user = {
    nome: lerTeclado.question('Qual seu nome: '),
    idade: lerTeclado.question('Qual a sua idade: '),
    endereco: {
        cidade: lerTeclado.question('Em que cidade mora: '),
        rua: lerTeclado.question('Rua onde mora: '),
        numero: lerTeclado.questionInt('Qual o numero da sua casa: ')
    },
}
const user2 = {
    nome: lerTeclado.question('Qual seu nome: '),
    idade: lerTeclado.question('Qual a sua idade: '),
    endereco: {
        cidade: lerTeclado.question('Em que cidade mora: '),
        rua: lerTeclado.question('Rua onde mora: '),
        numero: lerTeclado.questionInt('Qual o numero da sua casa: '),
    },
}
const user3 = {
    nome: lerTeclado.question('Qual seu nome: '),
    idade: lerTeclado.question('Qual a sua idade: '),
    endereco: {
        cidade: lerTeclado.question('Em que cidade mora: '),
        rua: lerTeclado.question('Rua onde mora: '),
        numero: lerTeclado.questionInt('Qual o numero da sua casa: ')
    }   
} 
    
let listaDeUsuarios = [user, user2, user3]

console.table(listaDeUsuarios)
*/
console.log("_______________________________");



// ------------------------------------------------------------
// EXERCÍCIO 8 – Ranking de notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome de 3 alunos e suas três notas, um por vez.
// b) Armazene cada aluno como um objeto com as propriedades 'nome' e 'notas'.
// c) Guarde os 3 objetos em um array chamado 'turma'.
// d) Exiba o array 'turma' com console.table().
// e) Exiba o nome e a 1ª nota do 2º aluno.
// f) Exiba o nome e a 2ª nota do 3º aluno.
// g) Exiba o nome e a 3ª nota do 1º aluno.

// → Seu código aqui:
/*
const aluno = {
    nome: lerTeclado.question('Seu nome: '),
    notas: { 
        nota: lerTeclado.questionInt('Sua primeira nota: '),
        notas2: lerTeclado.questionInt('Sua segunda nota: '),
        notas3: lerTeclado.questionInt('Sua terceira nota: ')
    }
}
const aluno1 = {
    nome: lerTeclado.question('Qual seu nome: '),
    notas: {
        nota: lerTeclado.questionInt('Sua primeira nota: '),
        notas2: lerTeclado.questionInt('Sua segunda nota: '),
        notas3: lerTeclado.questionInt('Sua terceira nota: ')
    }
}
const aluno2 = {
    nome: lerTeclado.question('Qual e o seu nome: '),
    notas: {
        nota: lerTeclado.questionInt('Sua primeira nota: '),
        notas2: lerTeclado.questionInt('Sua segunda nota: '),
        notas3: lerTeclado.questionInt('Sua terceira nota: ')
    }
}

let turma = [aluno, aluno1, aluno2]

console.table(turma)
console.log(turma[2].notas.notas2);
*/
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Cadastro de produto
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de um produto:
//    - nome (string)
//    - categoria (string)
//    - preço (float)
//    - quantidade em estoque (inteiro)
//    - está disponível para venda? (sim/não, usando keyInYN())
// b) Crie um objeto 'produto' com todas essas propriedades.
//    A propriedade de disponibilidade deve se chamar 'disponivel' e ser boolean (true/false).
// c) Exiba o objeto completo com console.table().
// d) Exiba no console uma frase resumo usando template literal:
//    "Produto: <nome> | Categoria: <categoria> | Estoque: <quantidade> un".

// → Seu código aqui:
/*
const produto = {
    nomeProduto: lerTeclado.question('Qual e o nome do seu produto: '),
    categoriaProduto: lerTeclado.question('Qual a sua categoria: '),
    precoProduto: lerTeclado.questionFloat('Qual o seu preco: '),
    EstoqueProduto: lerTeclado.questionInt('Ha quantos em estoque: '),
    DisponivelProduto: lerTeclado.keyInYN('Esta disponivel: ')
}

console.table(produto);
console.log(`Produto ${produto.nomeProduto} | Categoria: ${produto.categoriaProduto} | Estoque: ${produto.EstoqueProduto} un`);
*/
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Farmacia
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de dois medicamento com as seguintes propriedades:
//    - nome (string)
//    - preco (float)
//    - emEstoque (boolean) - (sim/não, usando keyInYN())
// b) Crie uma lista "estoqueFarmacia" e insira os objetos criados com push().
// c) Exiba a lista com console.table().
// d) Exiba somente o nome e preço do 2 medicamento.
// e) Exiba somente o nome e se está em estoque o 1 medicamento.

const remedio = {
nome: lerTeclado.question('Qual o nome do seu remedio: '),
preco: lerTeclado.questionFloat('Qual o seu preco: '),
emEstoque: lerTeclado.keyInYN('Tem em estoque: ')
}
const remedio1 = {
nome: lerTeclado.question('Qual o nome do seu remedio: '),
preco: lerTeclado.questionFloat('Qual o seu preco: '),
emEstoque: lerTeclado.keyInYN('Tem em estoque: ')
}

let estoqueFarmacia = [remedio, remedio1];

console.table(estoqueFarmacia);
console.log(remedio1.nome)
console.log(remedio1.preco)
console.log(remedio.nome)
console.log(remedio.emEstoque)