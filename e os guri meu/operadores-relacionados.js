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

let lerTeclado = require('readline-sync');


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
let um = 10 === 10
let dois = 10 === "10"
let tres = 0 === false
let quatro = null === undefined
let cinco = "JS" === "JS"

console.log(um);
console.log(dois);
console.log(tres);
console.log(quatro);
console.log(cinco);




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
 
let uns = 5 != 5
let uns1 = 5 !== 5
let dos = 5 != '5'
let dos2 = 5 !== '5'
let tree = 7 != 3
let tree3 = 7 !== 3
let four = true != 1
let four4 = true !== 1


console.log(uns);
console.log(uns1);
console.log(dos);
console.log(dos2);
console.log(tree);
console.log(tree3);
console.log(four);
console.log(four4)

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

let salarioA = 3500
let salarioB = 4200

let salario = salarioA > salarioB
console.log(salario);
let salario1 = salarioA < salarioB
console.log(salario1);
let salario2 = salarioA >= salarioB
console.log(salario2);
let salario3 = salarioA <= salarioB
console.log(salario1);
let salario4 = salarioA === salarioB
console.log(salario4);
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

let estoque = 0
temEstoque = estoque > 0
estoqueZerado = estoque === 0

console.log(estoque)
console.log(temEstoque)
console.log(estoqueZerado)

let temperatura = 36.5
febre = temperatura >= 37.6

console.log(febre)

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
/*
let usuario = lerTeclado.questionInt('Digite dois numeros: ')
usuario1 = usuario > usuario
usuario2 = usuario < usuario
usuario3 = usuario === usuario
usuario4 = usuario >= usuario

console.log(usuario);
console.log(usuario1);
console.log(usuario2);
console.log(usuario3);
console.log(usuario4)
*/
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

let preco = lerTeclado.questionInt('Digite o preco de algum produto: ')
const precoMaximo = 100
let estaDentrodoOrcamento = preco <= precoMaximo
let esteItemEhCaro = preco > precoMaximo

console.log(`Preço informado: R$ ${preco} | 
    Dentro do orcamento ${precoMaximo}? : ${estaDentrodoOrcamento}? 'Sim' : 'Nao' | 
    Item caro R$ ${precoMaximo}? : ${esteItemEhCaro}? 'Sim' : 'Nao'.`)


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


let nomePessoa1 = guri.question('Digite o nome da primeira pessoa: ');
let idadePessoa1 = guri.questionInt('Digite a idade da primeira pessoa: ');

cadastro.push({
    nome: nomePessoa1,
    idade: idadePessoa1
});


let nomePessoa2 = guri.question('Digite o nome da segunda pessoa: ');
let idadePessoa2 = guri.questionInt('Digite a idade da segunda pessoa: ');

cadastro.push({
    nome: nomePessoa2,
    idade: idadePessoa2
});


let pessoa1MaisVelha = idadePessoa1 > idadePessoa2;
let idadesIguais = idadePessoa1 === idadePessoa2;
let pessoa1MaiorDeIdade = idadePessoa1 >= 18;
let pessoa2MaiorDeIdade = idadePessoa2 >= 18;


console.table(cadastro);

console.log(
    `Idade de ${nomePessoa1} é ${idadePessoa1} e ela é ${
        pessoa1MaiorDeIdade ? 'maior de idade' : 'menor de idade'
    }.`
);

console.log(
    `Idade de ${nomePessoa2} é ${idadePessoa2} e ela é ${
        pessoa2MaiorDeIdade ? 'maior de idade' : 'menor de idade'
    }.`
);

console.log(
    `${nomePessoa1} é mais velho(a) que ${nomePessoa2}? ${
        pessoa1MaisVelha ? 'Sim' : 'Não'
    }.`
);

console.log(
    `As idades são iguais? ${
        idadesIguais ? 'Sim' : 'Não'
    }.`
);


console.log(
    idadePessoa1 > idadePessoa2
        ? `${nomePessoa1} é mais velho(a) que ${nomePessoa2}.`
        : idadePessoa2 > idadePessoa1
        ? `${nomePessoa2} é mais velho(a) que ${nomePessoa1}.`
        : `${nomePessoa1} e ${nomePessoa2} têm a mesma idade.`
);

 




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


console.log("_______________________________");