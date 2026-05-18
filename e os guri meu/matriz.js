// ============================================================
//   ATIVIDADE 13 – Estruturas de Dados: Matriz
// ============================================================

let guri = require('readline-sync');

// ------------------------------------------------------------
// EXERCÍCIO 1 – Lendo uma matriz
// ------------------------------------------------------------
// a) Declare a matriz:
//    const m = [
//      [10, 20, 30],
//      [40, 50, 60],
//      [70, 80, 90],
//    ];
// b) Exiba: número de linhas e número de colunas.
// c) Exiba o elemento central (m[1][1]).
// d) Exiba o canto inferior direito (use .length).

// → Seu código aqui:
/*
const matrix = [
     [10, 20, 30],
     [40, 50, 60],
     [70, 80, 90],
    ];

console.log(`Linhas: ${matrix.length}`);
console.log(`Colunas: ${matrix[0].length}`);
console.log(matrix[1][1]);
console.log(matrix[2][2].length);
*/
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Percorrendo com for aninhado
// ------------------------------------------------------------
// a) Declare a matriz:
//    const m = [
//      [1, 2, 3, 4],
//      [5, 6, 7, 8],
//      [9, 10, 11, 12],
//    ];
// b) Usando dois for aninhados, exiba cada elemento no formato:
//    "m[i][j] = <valor>"
// c) Calcule e exiba a SOMA de todos os elementos da matriz.

// → Seu código aqui:
const matriz = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
];
let soma = 0;

for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz.length; j++){
        soma += matriz[i][j];
    }
}

console.log(`A soma da matriz e: ${soma}.`);

    
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior e menor valor
// ------------------------------------------------------------
// a) Utilizando a matriz:
//  const m = [
//      [12,  7, 25],
//      [ 3, 18,  9],
//      [31, 14, 22],
//  ];
// b) Usando for aninhado, encontre o MAIOR e o MENOR valor da matriz.
// c) Exiba também a posição (linha, coluna) onde cada um está.

// → Seu código aqui:

const m = [
    [12,  7, 25],
    [ 3, 18,  9],
    [31, 14, 22],
    ];

let maior = m[0][0];
let menor = m[0][0];
let MaiorColuna = 0;
let MaiorLinha = 0;
let MenorColuna = 0;
let MenorLinha = 0;

for(let i = 0; i < m.length; i++){
    for(let j = 0; j < m[0].length; j++){
    if(m[i][j] > maior){
        maior = m[i][j]
        MaiorColuna = i;
        MaiorLinha = j;
    }
    if(m[i][j] < menor){
        menor = m[i][j]
        MenorColuna = i;
        MenorLinha = j;
        } 
    }
}

console.log(`Maior valor da matriz: ${maior}
Menor valor da matriz: ${menor}`);
console.log(`Posicao da maior: linha: ${MaiorLinha} e coluna: ${MaiorColuna}.
Posicao da menor: linha: ${MenorLinha} e coluna: ${MenorColuna}.`);


console.log("_______________________________");


// -c-----------------------------------------------------------
// EXERCÍCIO 4 – Soma das linhas e das colunas
// ------------------------------------------------------------
// a) Use a mesma matriz do Exercício 3.
// b) Exiba a soma de cada LINHA: "Linha <i>: <soma>"
// c) Exiba a soma de cada COLUNA: "Coluna <j>: <soma>"
// d) Exiba a soma da DIAGONAL principal (m[i][i]).

// → Seu código aqui:
/*
const m2 = [
    [12,  7, 25],
    [ 3, 18,  9],
    [31, 14, 22],
];

for(let i = 0; i < m2.length; i++){
    let somaLinha = 0;
    for(let j = 0; j < m2[i].length; j++){
        somaLinha += m2[i][j];
    }
    console.log(`Linha: ${i}: ${somaLinha}.`);
}

for(let j = 0; j < m2[0].length; j++){
    let somaColuna = 0;
    for(let i = 0; i < m2.length; i++){
        somaColuna += m2[i][j];
    }
    console.log(`Coluna ${j}: ${somaColuna}.`);
}
*/
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Preenchendo uma matriz dinamicamente
// ------------------------------------------------------------
// a) Pergunte ao usuário quantas linhas e quantas colunas terá a matriz.
// b) Usando dois for aninhados, peça cada valor:
//    "Digite m[<i>][<j>]: "
// c) Exiba a matriz final com console.table().

// → Seu código aqui:

let ColunasUsuario = guri.questionInt('Quantas colunas tera sua matriz: ');
let LinhaUsuario = guri.questionInt('Quantas linhas tera sua matriz: ')
let matrixUsuario = [];

for(let i = 0; i < LinhaUsuario; i++){
    let linhaUsuario = [];
    for(let j = 0; j < ColunasUsuario; j++){
        linhaUsuario.push(0);
    }
    matrixUsuario.push(linhaUsuario);
}

console.table(matrixUsuario);
console.log("_______________________________");