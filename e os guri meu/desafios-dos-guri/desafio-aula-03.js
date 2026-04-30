// ============================================================
//   DESAFIOS (para quem já terminou a atividade 03) – Input e Output em JavaScript
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
// DESAFIO 1 – Cadastro completo
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados:
//    nome, idade, profissão, cidade, se gosta de JavaScript, lista de comida favoritos e lista de pessoa(s) com que mora (nome e idade).
//    pense em qual tipo de dado cada resposta representa para armazena-los corretamente.
// b) Crie um objeto "cadastro" com todas essas propriedades.
// c) Exiba o objeto com console.table().
// d) Exiba também uma mensagem usando template literal com todos os dados, ex:
//    "Nome: <nome>. Idade: <idade> anos. Profissão: <profissão> em <cidade>. Gosta de JS: <sim/não> ...."

// → Seu código aqui:
/*let cadastro ={
 nomeUsuario: lerTeclado.question('Digite seu nome: '),
 idadeUsuario: lerTeclado.questionInt('Diga sua idade: '),
 profissaoUsuario: lerTeclado.question('Com o que trabalha: '),
 cidadeUsuario: lerTeclado.question('Cidade onde mora: '),
 js: lerTeclado.keyInYN('Gosta do JavaScript (Sim) : (Nao): '),
 comidaUsuario: lerTeclado.question('Diga suas tres comidas favoritas: '),
 casaUsuario: lerTeclado.question('Mora com alguem? Se sim quantas e quais os nomes delas e suas idades: ')

}

console.table(cadastro);
console.log(`Nome: ${cadastro.nomeUsuario} | Idade: ${cadastro.idadeUsuario} anos | Profissao: ${cadastro.profissaoUsuario} em ${cadastro.cidadeUsuario} | Gosta de Js: ${cadastro.js}`);
*/

console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Dois amigos
// ------------------------------------------------------------
// a) Peça os dados de 2 pessoas diferentes (nome, idade e cidade de cada uma).
// b) Crie um objeto para cada pessoa com essas propriedades.
// c) Crie uma array chamada "amigos" contendo os dois objetos.
// d) Exiba a array com console.table().
// e) Exiba somente o nome e a idade do 2º usuário.
// f) Exiba somente o endereço completo do 3º usuário.
// g) Exiba somente o nome e a rua do 1º usuário.

// → Seu código aqui:
/*
let pessoa1 = {
    nomePessoa1: lerTeclado.question('Diga seu nome: '),
    idadePessoa1: lerTeclado.questionInt('Diga sua idade: '),
    cidadePessoa1: lerTeclado.question('Diga onde cidade onde mora:')
}

let pessoa2 = {
    nomePessoa2: lerTeclado.question('Diga seu nome: '),
    idadePessoa2: lerTeclado.questionInt('Diga sua idade: '),
    cidadePessoa2: lerTeclado.question('Diga onde cidade onde mora:')
}
let amigos = [pessoa1, pessoa2];

console.table(amigos);
console.log(pessoa2.idadePessoa2);
console.log(pessoa1.nomePessoa1, pessoa1.cidadePessoa1);
*/


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Pedido de restaurante
// ------------------------------------------------------------
// a) Informe ao usuário (com console.info) que ele vai montar um pedido.
// b) Exiba um menu (quanto mais estilizado melhor!) com as opções de entrada, prato principal, sobremesa e bebidas.
// b) Peça ao usuário que escolha:
//    - Uma entrada
//    - Um prato principal
//    - Uma sobremesa
//    - Duas bebidas (uma de cada vez)
// c) Crie um objeto "pedido" com as propriedades: entrada, pratoPrincipal, sobremesa e listaBebidas.
// d) Exiba o pedido com console.table().
// e) Exiba também no console a mensagem:
//    "Seu pedido: Entrada: <entrada>, Prato Principal: <pratoPrincipal>, Sobremesa: <sobremesa>, Bebida 1: <bebida1>, Bebida 2: <bebida2>. Bom apetite!"

// → Seu código aqui:
/*
console.info('Faca seu pedido')

let pedido = {
    entradaUsuario: lerTeclado.question('Escolha a sua entrada: '),
    principalUsuario: lerTeclado.question('Escolha o seu prato principal: '),
    sobremesaUsuario: lerTeclado.question('Escolha a sua sobremesa: '),
    bebidaUsuario: lerTeclado.question('Escolha as suas bebidas (uma de cada vez): '),
    bebidasUsuario: lerTeclado.question('Escolha as suas bebidas (uma de cada vez): ')
}
console.table(pedido);

console.log(`Seu pedido foi realizado com sucesso: entrada: ${pedido.entradaUsuario} | Prato principal: ${pedido.principalUsuario} | Sobremesa: ${pedido.sobremesaUsuario} e suas bebidas: ${pedido.bebidaUsuario} e ${pedido.bebidasUsuario}`);
*/
console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Perfil de jogador
// ------------------------------------------------------------
// a) Peça ao usuário: apelido, jogo favorito e horas totais jogadas (aproximadas)
// b) Pergunte se ele joga em time (sim/não).
// c) Crie um objeto "perfil" com todas as propriedades:
//    apelido, jogoFavorito, horasTotaisJogadas, jogaEmTime.
// d) Exiba o perfil com console.table().
// e) Use console.warn() para exibir: "Lembre-se que jogar não é problema, o problema é colocar o jogo como prioridade."

// → Seu código aqui:
/*let perfil = {
    apelidoUsuario: lerTeclado.question('Qual o seu apelido dentro de um jogo: '),
    favoritoUsuario: lerTeclado.question('Qual seu jogo favorito: '),
    horasUsuario: lerTeclado.questionFloat('Quantas horas jogadas: '),
    grupoUsuario: lerTeclado.keyInYN('Voce geralmente joga em time (Yes) : (No): ')
}

console.table(perfil);
console.warn("Lembre-se que jogar não é problema, o problema é colocar o jogo como prioridade.")
console.log("_______________________________");
*/

// ------------------------------------------------------------
// DESAFIO 5 – Comparador de dados
// ------------------------------------------------------------
// a) Peça o nome e a cidade favorita de 3 pessoas diferentes.
// b) Crie um objeto para cada pessoa com as propriedades: nome e cidadeFavorita.
// c) Exiba um dos objetos com console.table().
// d) Crie uma array "viajantes" com os 3 objetos.
// e) Exiba a array com console.table().
// f) Exiba com console.info() quantos viajantes estão na lista (use .length).
// g) Exiba com console.log() a cidade favorita do 2º viajante.
// h) Exiba com console.log() o nome do 1º viajante.

// → Seu código aqui:
/*
let viajantes1 = {
    nomeViajante1: lerTeclado.question('Diga seu nome: '),
    cidadeFavorita1: lerTeclado.question('Qual a sua cidade favorita: ')
}
let viajantes2 = {
    nomeViajante2: lerTeclado.question('Diga seu nome: '),
    cidadeFavorita2: lerTeclado.question('Qual a sua cidade favorita: ')
}
let viajantes3 = {
    nomeViajante3: lerTeclado.question('Diga seu nome: '),
    cidadeFavorita3: lerTeclado.question('Qual a sua cidade favorita: ')
}

let viajantes = [viajantes1, viajantes2, viajantes3]

console.table(viajantes)
console.info(viajantes.length)
console.log(viajantes2.cidadeFavorita2);
console.log(viajantes1.nomeViajante1);
*/


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 6 – Cardápio de Restaurante
// ------------------------------------------------------------
//
// Monte a estrutura de dados de um restaurante.
// Todos os dados do passo A devem ser coletados via terminal (usando a lib readline-sync).
//
// PASSO A:
//   • Crie um objeto "restaurante" com:
//       - nome (string)
//       - tipoCozinha (string)   ex: "Italiana", "Japonesa"
//       - nota (number)          ex: 8.7
//       - aberto (boolean)
//       - endereco → objeto com: rua, numero, bairro, cidade
//       - cardapio → array com pelo menos 4 objetos de pratos, cada um com:
//           • nomePrato (string)
//           • preco     (number)
//           • vegano    (boolean)
//
// PASSO B: Acessos e exibições
//   • Exiba o nome do restaurante e sua nota.
//   • Exiba o endereço completo em uma única frase (rua, numero, bairro, cidade). ex. "O restaurante <nome> está localizado na <rua>, <numero>, <bairro>, <cidade>".
//   • Exiba o nome e o preço do 1º prato do cardápio.
//   • Exiba se o 3º prato é vegano ou não, usando template literal. ex. "O prato <nomePrato> é vegano: <vegano>".
//
// PASSO C: Alterações
//   • Altere o preço do 2º prato para um valor diferente.
//   • Adicione um novo prato ao cardápio usando push().
//   • Altere "aberto" para false.
//
// PASSO D: Relatório do cardápio
//   • Usando console.log() e template literals, exiba:
//       - Nome do restaurante, tipo de cozinha e nota
//       - Status: aberto ou fechado
//       - Quantos pratos há no cardápio (.length)
//       - Nome, preço e se é vegano de CADA prato (um prato por linha)
//
// → Seu código aqui:

const restaurante = {
    nomeRestaurante: 'la casa de pizza',
    tipoCozinha: 'italiana',
    notaRestaurante: 9.5,
    abertoRestaurante: true,
    enderecoRestaurante: {
        rua: 'Rua 25 de Julho',
        numero: 157,
        bairro: 'Vila Nova',
        cidade: 'Jaragua do Sul'
    },
    cardapioRestaurante: {
        prato01: ['pizzas', 79, false],
        prato02: ['nhoque', 50, true],
        prato03: ['macarrao', 35, false],
        prato04: ['lasanha', 80, false]
    }
} 

restaurante.cardapioRestaurante.prato02[1] = 25
restaurante.cardapioRestaurante.prato05 = ['orecchiette', 65, false]
restaurante.abertoRestaurante = false

console.log(restaurante.nomeRestaurante, restaurante.notaRestaurante);
console.log(`Restaurante: ${restaurante.nomeRestaurante} fica na rua: ${restaurante.enderecoRestaurante.rua} numero: ${restaurante.enderecoRestaurante.numero} no bairro: ${restaurante.enderecoRestaurante.bairro} na cidade de: ${restaurante.enderecoRestaurante.cidade}`);
console.log(`O prato de ${restaurante.cardapioRestaurante.prato01[0]} e seu preco e: ${restaurante.cardapioRestaurante.prato01[1]}`);
console.log(`O prato de ${restaurante.cardapioRestaurante.prato03[0]} e vegano: ${restaurante.cardapioRestaurante.prato03[2]}`);

console.log(`Nome do restaurante: ${restaurante.nomeRestaurante}, 
    Tipo de cozinha: ${restaurante.tipoCozinha}
    Nota: ${restaurante.notaRestaurante}
    Status: ${restaurante.abertoRestaurante}
    Quantos pratos há no cardápio: ${Object.keys(restaurante.cardapioRestaurante).length}
    Cardapio:
    Nome: ${restaurante.cardapioRestaurante.prato01}
    Nome: ${restaurante.cardapioRestaurante.prato02}
    Nome: ${restaurante.cardapioRestaurante.prato03}
    Nome: ${restaurante.cardapioRestaurante.prato04}
    Nome: ${restaurante.cardapioRestaurante.prato05}
    `);



console.log("_______________________________");