// ============================================================
//   ATIVIDADE 05 – Operadores Relacionais em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-05.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Comparando com == e ===
// ------------------------------------------------------------
// Para cada par de valores abaixo, declare duas variáveis e exiba:
//   a) O resultado de == usando template literal: "<a> == <b> → <resultado>"
//   b) O resultado de === usando template literal: "<a> === <b> → <resultado>"
//
// Pares de valores:
//   1) 10 e 10
//   2) 10 e "10"
//   3) 0 e false
//   4) null e undefined
//   5) "JS" e "JS"

// → Seu código aqui:

let um = 10
let dois = 10
console.log(`${um} == ${dois} =`)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Comparando com != e !==
// ------------------------------------------------------------
// Para cada par de valores abaixo, exiba:
//   a) O resultado de != : "<a> != <b> → <resultado>"
//   b) O resultado de !== : "<a> !== <b> → <resultado>"
//
// Pares de valores:
//   1) 5 e 5
//   2) 5 e "5"
//   3) 7 e 3
//   4) true e 1

// → Seu código aqui:

console.log(5 != 5);
console.log(5 !== 5);
console.log(5 != '5');
console.log(5 !== '5');
console.log(7 != 3);
console.log(7 !== 3);
console.log(true != 1);
console.log(true !== 1);





console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior, menor e igual
// ------------------------------------------------------------
// a) Declare "salarioA" com valor 3500 e "salarioB" com valor 4200.
// b) Calcule e armazene em variáveis (booleanas) os resultados de:
//    - salarioA > salarioB
//    - salarioA < salarioB
//    - salarioA >= salarioB
//    - salarioA <= salarioB
//    - salarioA === salarioB
// c) Exiba cada resultado com template literal e verificação ternária no formato:
//    "Salário A (R$ <a>) > Salário B (R$ <b>): <resultado>"

// → Seu código aqui:

let salarioA = 3500;
let salarioB = 4200;

let maior = salarioA > salarioB;
let menor = salarioA < salarioB;
let maiorIgual = salarioA >= salarioB;
let menorIgual = salarioA <= salarioB;
let igual = salarioA === salarioB;

console.log(`Salário A (R$ ${salarioA}) > Salário B (R$ ${salarioB}): ${maior ? 'true' : 'false'}`);
console.log(`Salário A (R$ ${salarioA}) < Salário B (R$ ${salarioB}): ${menor ? 'true' : 'false'}`);
console.log(`Salário A (R$ ${salarioA}) >= Salário B (R$ ${salarioB}): ${maiorIgual ? 'true' : 'false'}`);
console.log(`Salário A (R$ ${salarioA}) <= Salário B (R$ ${salarioB}): ${menorIgual ? 'true' : 'false'}`);
console.log(`Salário A (R$ ${salarioA}) === Salário B (R$ ${salarioB}): ${igual ? 'true' : 'false'}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Armazenando resultados em variáveis
// ------------------------------------------------------------
// a) Declare "estoque" com valor 0.
// b) Armazene em "temEstoque" o resultado de: estoque > 0
// c) Armazene em "estoqueZerado" o resultado de: estoque === 0
// d) Declare "temperatura" com valor 36.5.
// e) Armazene em "febre" o resultado de: temperatura >= 37.6
// f) Exiba cada variável usando template literal.

// → Seu código aqui:

let estoque = 0;

let temEstoque = estoque > 0;
let estoqueZerado = estoque === 0;

let temperatura = 36.5;

let febre = temperatura >= 37.6;

console.log(`Estoque: ${estoque}`);
console.log(`Tem estoque: ${temEstoque}`);
console.log(`Estoque zerado: ${estoqueZerado}`);
console.log(`Temperatura: ${temperatura}°C`);
console.log(`Febre: ${febre}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Comparações com input do usuário
// ------------------------------------------------------------
// a) Peça ao usuário dois números.
// b) Armazene em variáveis o resultado das seguintes comparações:
//    - num1 > num2
//    - num1 < num2
//    - num1 === num2
//    - num1 >= num2
// c) Exiba cada resultado com template literal.

// → Seu código aqui:

const guri = require('guri');

let num1 = guri.questionFloat('Digite o primeiro número: ');
let num2 = guri.questionFloat('Digite o segundo número: ');

let maior = num1 > num2;
let menor = num1 < num2;
let igual = num1 === num2;
let maiorOuIgual = num1 >= num2;

console.log(`${num1} > ${num2}: ${maior}`);
console.log(`${num1} < ${num2}: ${menor}`);
console.log(`${num1} === ${num2}: ${igual}`);
console.log(`${num1} >= ${num2}: ${maiorOuIgual}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Verificação de preço
// ------------------------------------------------------------
// a) Peça ao usuário o preço de um produto.
// b) Defina uma constante "precoMaximo" com valor 100.
// c) Armazene em "estaDentroDoOrcamento" o resultado de: preco <= precoMaximo.
// d) Armazene em "esteItemEhCaro" o resultado de: preco > precoMaximo.
// e) Exiba no console:
//    "Preço informado: R$ <preco>"
//    "Dentro do orçamento (≤ R$ <precoMaximo>)? : <estaDentroDoOrcamento ? "Sim" : "Não">"
//    "Item caro (> R$ <precoMaximo>)? : <esteItemEhCaro ? "Sim" : "Não">"

// → Seu código aqui:

const guri = require('guri');

let preco = guri.questionFloat('Digite o preço do produto: ');

const precoMaximo = 100;

let estaDentroDoOrcamento = preco <= precoMaximo;
let esteItemEhCaro = preco > precoMaximo;

console.log(`Preço informado: R$ ${preco}`);
console.log(`Dentro do orçamento (≤ R$ ${precoMaximo})? : ${estaDentroDoOrcamento ? 'Sim' : 'Não'}`);
console.log(`Item caro (> R$ ${precoMaximo})? : ${esteItemEhCaro ? 'Sim' : 'Não'}`);
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Comparando notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome e a idade de 2 pessoas e armazene como objetos dentro de uma lista "cadastro".
// b) Armazene os resultados das comparações:
//    - idadePessoa1 > idadePessoa2
//    - idadePessoa1 === idadePessoa2
//    - idadePessoa1 >= 18 (maior de idade)
//    - idadePessoa2 >= 18 (maior de idade)
// c) Exiba todos os resultados com template literal e verificação ternária.
//    Exemplo: `Idade da <nomePessoa1> é <idadePessoa1> e ela é ${idadePessoa1 >= 18 ? "maior de idade" : "menor de idade"}.`
// d) Similar ao exemplo acima, verifique e exiba qual pessoa é mais velha.

// → Seu código aqui:

let cadastro = [];

let nome1 = guri.question('Digite o nome da primeira pessoa: ');
let idade1 = guri.questionInt('Digite a idade da primeira pessoa: ');

cadastro.push({
    nome: nome1,
    idade: idade1
});


let nome2 = guri.question('Digite o nome da segunda pessoa: ');
let idade2 = guri.questionInt('Digite a idade da segunda pessoa: ');

cadastro.push({
    nome: nome2,
    idade: idade2
});


let pessoa1MaisVelha = idade1 > idade2;
let idadesIguais = idade1 === idade2;
let pessoa1MaiorIdade = idade1 >= 18;
let pessoa2MaiorIdade = idade2 >= 18;


console.log(`Idade de ${nome1}: ${idade1} anos.`);
console.log(`${nome1} é ${pessoa1MaiorIdade ? 'maior de idade' : 'menor de idade'}.`);

console.log(`Idade de ${nome2}: ${idade2} anos.`);
console.log(`${nome2} é ${pessoa2MaiorIdade ? 'maior de idade' : 'menor de idade'}.`);

console.log(`\n${nome1} é mais velho(a) que ${nome2}? ${pessoa1MaisVelha ? 'Sim' : 'Não'}`);
console.log(`As idades são iguais? ${idadesIguais ? 'Sim' : 'Não'}`);


console.log(
    idade1 > idade2
        ? `${nome1} é mais velho(a) que ${nome2}.`
        : idade2 > idade1
            ? `${nome2} é mais velho(a) que ${nome1}.`
            : `${nome1} e ${nome2} têm a mesma idade.`
);


console.table(cadastro);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Comparando notas (versão avançada)
// ------------------------------------------------------------
// a) Peça ao usuário o nome e três notas de 2 alunos e armazene como objetos dentro de uma lista "alunos".
// b) Calcule a média de cada aluno e armazene em "mediaAluno1" e "mediaAluno2".
// e) Verifique e exiba no console qual aluno obteve a maior média usando template literal e comparador ternário
// c) Compare e exiba no console, qual aluno obteve a primeira maior nota, a segunda e a terceira.
//    Exemplo: `Aluno com primeira maior nota: ${nota1aluno1 > nota1aluno2 ? nomeAluno1 : nomeAluno2}`
// → Seu código aqui:


let alunos = [];


let nomeAluno1 = guri.question('Nome do primeiro aluno: ');
let nota1Aluno1 = guri.questionFloat('Primeira nota: ');
let nota2Aluno1 = guri.questionFloat('Segunda nota: ');
let nota3Aluno1 = guri.questionFloat('Terceira nota: ');

alunos.push({
    nome: nomeAluno1,
    nota1: nota1Aluno1,
    nota2: nota2Aluno1,
    nota3: nota3Aluno1
});


let nomeAluno2 = guri.question('Nome do segundo aluno: ');
let nota1Aluno2 = guri.questionFloat('Primeira nota: ');
let nota2Aluno2 = guri.questionFloat('Segunda nota: ');
let nota3Aluno2 = guri.questionFloat('Terceira nota: ');

alunos.push({
    nome: nomeAluno2,
    nota1: nota1Aluno2,
    nota2: nota2Aluno2,
    nota3: nota3Aluno2
});


let mediaAluno1 = (nota1Aluno1 + nota2Aluno1 + nota3Aluno1) / 3;
let mediaAluno2 = (nota1Aluno2 + nota2Aluno2 + nota3Aluno2) / 3;


console.table(alunos);


console.log(`${nomeAluno1} teve média ${mediaAluno1.toFixed(2)}`);
console.log(`${nomeAluno2} teve média ${mediaAluno2.toFixed(2)}`);


console.log(
    `Aluno com maior média: ${
        mediaAluno1 > mediaAluno2
            ? nomeAluno1
            : mediaAluno2 > mediaAluno1
            ? nomeAluno2
            : 'Empate'
    }`
);


console.log(
    `Aluno com primeira maior nota: ${
        nota1Aluno1 > nota1Aluno2 ? nomeAluno1 :
        nota1Aluno2 > nota1Aluno1 ? nomeAluno2 :
        'Empate'
    }`
);


console.log(
    `Aluno com segunda maior nota: ${
        nota2Aluno1 > nota2Aluno2 ? nomeAluno1 :
        nota2Aluno2 > nota2Aluno1 ? nomeAluno2 :
        'Empate'
    }`
);


console.log(
    `Aluno com terceira maior nota: ${
        nota3Aluno1 > nota3Aluno2 ? nomeAluno1 :
        nota3Aluno2 > nota3Aluno1 ? nomeAluno2 :
        'Empate'
    }`
);

console.log("_______________________________");