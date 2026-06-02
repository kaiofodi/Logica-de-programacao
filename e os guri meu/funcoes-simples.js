// ============================================================
// ATIVIDADE 14 – Funções Simples
// ============================================================
//
// IMPORTANTE: nesta atividade, NÃO use parâmetros nem return.
// As funções devem apenas executar um bloco de código.
//
// ============================================================

let guri = require('readline-sync');

// ------------------------------------------------------------
// EXERCÍCIO 1 – Primeira função
// ------------------------------------------------------------
// a) Crie uma função 'saudacao' que exibe 3 linhas no console:
//    "Olá!"
//    "Bem-vindo(a) ao curso de JavaScript."
//    "Bons estudos!"
// b) Chame a função 2 vezes.

// → Seu código aqui:
function saudacao() {
    console.log('Hello world!');
    console.log('Bem-vindo(a) ao curso de JavaScript');
    console.log('Bons estudos!');
}

saudacao()
saudacao()

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Função que organiza
// ------------------------------------------------------------
// a) Crie uma função 'linha' que exibe:
//    "----------------------------------------"
// b) Crie uma função 'titulo' que exibe:
//    "         RELATÓRIO MENSAL              "
// c) Crie uma função 'cabecalho' que CHAMA, em ordem:
//    linha(), titulo(), linha().
// d) Chame cabecalho() uma vez.

// → Seu código aqui:
function linha() {
    console.log("----------------------------------------");
    
}
function titulo() {
    console.log('         RELATÓRIO MENSAL              ');
    
}
function cabecalho() {
    linha();
    titulo();
    linha()
}

cabecalho();

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Calculadora de informações
// ------------------------------------------------------------
// a) Crie uma função 'meusDados' que pergunta ao usuário:
//    - Nome
//    - Idade
//    - Cidade
// b) Crie uma função 'exibirDados' que recebe exibe os dados e exibe um cartão no formato:
//    -------------------------
//    Nome:   <nome>
//    Idade:  <idade>
//    Cidade: <cidade>
//    -------------------------
// c) Pergunte os dados de 2 usuários e os guarde em um objeto.
// d) Exiba os dados dos 2 usuários.
//
// ATENÇÃO: APÓS CRIADA, DIGITAR/CHAMAR A FUNÇÃO APENAS UMA VEZ
// PENSE EM UMA LÓGICA QUE EVITE DIGITAR A FUNÇÃO MAIS DE UMA VEZ
// Após finalizar, me chame para eu verificar a lógica - questão importante

// → Seu código aqui:
/*function meusDados() {
    let nome = guri.question('Digite seu nome: ');
    let idade = guri.questionInt('Digite a sua idade: ');
    let cidade = guri.question('Digite a sua cidade: ')

    return {
        nome: nome,
        idade: idade,
        cidade: cidade
    }
}
function exibirDados(nome, idade, cidade) {
    console.log('-------------------------');
    console.log("Nome: " + nome);
    console.log("Idade: " + idade);
    console.log("Cidade: " + cidade);
    console.log('-------------------------');
}

let dados = meusDados();
exibirDados(dados.nome, dados.idade, dados.cidade);
*/
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Sorteio de número
// ------------------------------------------------------------
// a) Crie uma função 'sortear' que:
//    - Gera um número aleatório de 1 a 100
//      (Math.floor(Math.random() * 100) + 1).
//    - Exibe: "Número sorteado: <n>"
// b) Execute a função 5 vezes - tente fazer sem digitar a função 5 vezes.

// → Seu código aqui:

function sortear() {
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1
    console.log(`Numero sorteado: ${numeroAleatorio}`);
}

for(let i = 0; i < 5; i++){
    sortear()
}


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Tabela de multiplicação
// ------------------------------------------------------------
// a) Crie uma função 'tabuadaDoCinco' que exibe a tabuada do 5 inteira:
// (pense em uma lógica para não precisar digitar todos os valores)
//    5 x 1 = 5
//    5 x 2 = 10
//    ...
//    5 x 10 = 50
// b) Crie uma função 'tabuadaDoSete' análoga, para o 7.
// c) Chame as duas funções.

// → Seu código aqui:

function tabuadaDoCinco() {
    for(let i = 1; i <= 10; i++){
        console.log(`5 x ${i} = ${i*5}`);
    }
}
function tabuadaDoSete() {
    for(let i = 1; i <= 10; i++){
        console.log(`7 x ${i} = ${i*7}`);
    }
}

tabuadaDoCinco();
console.log('-------------------------')
tabuadaDoSete();

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Conversão fixa
// ------------------------------------------------------------
// a) Crie uma função 'converterTemperatura' que:
//    - Pergunta uma temperatura em Celsius.
//    - Calcula em Fahrenheit: F = C * 1.8 + 32.
//    - Exibe: "<C>°C equivalem a <F>°F".
// b) Chame a função 3 vezes.

// → Seu código aqui:
/*
function converterTemperatura() {
    let temperatura = guri.questionFloat('Qual a temperatura em Celsius: ')
    let Fahrenheit = temperatura * 1.8 + 32
    console.log(`${temperatura} °C equivalem a ${Fahrenheit} °F`);   
}

converterTemperatura();
converterTemperatura();
converterTemperatura();
*/
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Listando informações
// ------------------------------------------------------------
// a) Utilizando o vetor:
//    const filmes = ["Matrix", "Interestelar", "Origem", "Senhor dos Anéis"];
// b) Crie a função 'listarFilmes' que percorre o vetor 'filmes' com for
//    e exibe cada um no formato: "<i+1> - <filme>".
// c) Chame listarFilmes() duas vezes.

// → Seu código aqui:

const filmes = ["Matrix", "Interestelar", "Origem", "Senhor dos Anéis"];

function listarFilmes() {
    for( let i = 0; i < filmes.length; i++){
        console.log(`${i + 1} - ${filmes}`);
        
    }
}

for(let i = 0; i < 2; i++){
    listarFilmes()
}
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Dividindo um programa em partes
// ------------------------------------------------------------
// Vamos criar um "mini sistema de boas-vindas" composto por 4 funções:
//
// a) 'limparTela'      → exibe 30 linhas em branco (console.log("")).
// b) 'banner'          → exibe um banner com 3 linhas (exiba qualquer informação dentro de "-----------").
// c) 'pedirNome'       → pergunta o nome do usuário e exibe "Olá, <nome>!".
// d) 'rodape'          → exibe "Sistema desenvolvido por <seu nome>".
//
// Em seguida, monte o programa principal (outra função) chamando, em ordem:
//    limparTela(); banner(); pedirNome(); rodape();
// E chame a função principal.

// → Seu código aqui:
/*
function SistemaBoasVindas() {
    function limparTela() {
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
        console.log('');
    }
    function banner() {
      console.log('-----------');
      console.log('EAE TROPA BLZ');
      console.log('-----------');
      
    }
    function pedirNome() {
        let nome = guri.question('Diga seu nome: ')
        console.log(`Ola, ${nome}!`);
        return {
            nome
        }
    }
    function rodape() {
        console.log(`Sistema desenvolvido por ${pedirNome().nome}`);
        
    }
    
    limparTela();
    banner();
    pedirNome();
    rodape();
}

SistemaBoasVindas();
*/
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Menu organizado em funções
// ------------------------------------------------------------
// Você vai criar um menu onde CADA opção é uma função separada.
//
// a) Crie as funções:
//    - 'opcaoSomar'       → pede 2 números e exibe a soma.
//    - 'opcaoSubtrair'    → pede 2 números e exibe a subtração.
//    - 'opcaoMultiplicar' → pede 2 números e exibe a multiplicação.
//    - 'opcaoDividir'     → pede 2 números, trata divisão por zero e exibe o resultado.
//    - 'exibirMenu'       → exibe as opções no console.
//
// b) Usando do...while + switch, monte o menu chamando a função
//    correspondente em cada case. Encerre quando o usuário digitar 0.

// → Seu código aqui:
function opcaoSomar() {
     let numero = guri.questionInt('digite um numero: ')
     let numeros = guri.questionInt('digite um numero: ')
     let soma = numero + numeros
     console.log(soma);
     
}
function opcaoSubstituir() {
    let numero = guri.questionInt('digite um numero: ')
    let numeros = guri.questionInt('digite um numero: ')
    let subtrair = numero - numeros
    console.log(subtrair);
    
}
function opcaoMultiplicar() {
    let numero = guri.questionInt('digite um numero: ')
    let numeros = guri.questionInt('digite um numero: ')
    let multiplicação = numero * numeros
    console.log(multiplicação);
    
}
function opcaoDividir() {
    let numero = guri.questionInt('digite um numero: ')
    let numeros = guri.questionInt('digite um numero: ')
    let divisao = numero / numeros
    console.log(divisao);
    
}
function Exibirmenu(){
console.log('1 - Soma.');
console.log('2 - Subtracao.');
console.log('3 - Multiplicacao.');
console.log('4 - Divisao');
}

Exibirmenu();

let opcao;
do {
    opcao = guri.questionInt('Escolha apenas uma opcao: ')
    break;
    switch(opcao) {
        case 1:
            console.log(opcaoSomar());
            break;
        case 2:
            console.log(opcaoSubstituir());
            break;
        case 3:
            console.log(opcaoMultiplicar());
            break;
        case 4:
            console.log(opcaoDividir());
            break;
        default:
            console.log('Numero invalido');
    }
} while (opcao !== 0);

console.log("_______________________________");