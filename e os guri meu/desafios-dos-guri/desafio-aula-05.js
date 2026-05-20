// ============================================================
//   DESAFIOS (para quem já terminou a atividade 05) – Operadores Relacionais
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node desafios.js
//
// Dica: Ao terminar um desafio, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================

let lerTeclado = require('readline-sync')


// ------------------------------------------------------------
// DESAFIO 1 – Comparador de idades
// ------------------------------------------------------------
// a) Crie um objeto para cada pessoa e peça ao usuário o nome e a idade (question() e questionInt()).
// b) Armazene os objetos em um array "pessoas".
// c) Exiba a array com console.table().
// d) Compare as idades e armazene os resultados em variáveis booleanas:
//    - pessoa1 é mais velha que pessoa2?
//    - pessoa2 é mais nova que pessoa3?
//    - pessoa1 e pessoa3 têm a mesma idade?
//    - alguma das 3 é maior de idade (>= 18)?  (verifique cada uma separadamente)
// e) Exiba cada resultado com template literal identificando as pessoas pelo nome.

// → Seu código aqui:
/*
const pessoaUm = {
    nome1: lerTeclado.question('Diga um nome: '),
    idade1: lerTeclado.questionInt('Diga a idade dessa pessoa: ')
};
const pessoaDois = {
    nome2: lerTeclado.question('Diga um nome: '),
    idade2: lerTeclado.questionInt('Diga a idade dessa pessoa: ')
};
const pessoaTres = {
    nome3: lerTeclado.question('Diga um nome: '),
    idade3: lerTeclado.questionInt('Diga a idade dessa pessoa: ')
};

let pessoas = [pessoaUm, pessoaDois, pessoaTres];
console.table(pessoas);

let pessoa1maisVelhaQuePessoa2 = pessoaUm.idade1 > pessoaDois.idade2;
let pessoa2maisNovaQuePessoa3 = pessoaDois.idade2 < pessoaTres.idade3;
let pessoa1mesmaIdadePessoa3 = pessoaUm.idade1 === pessoaTres.idade3;

let pessoaUmMaiordeIdade = pessoaUm.idade1 >= 18;
let pessoaDoisMaiordeIdade = pessoaDois.idade2 >= 18;
let pessoaTresMaiordeIdade = pessoaTres.idade3 >= 18;

console.log(`Primeira pessoa:
Nome: ${pessoaUm.nome1}
Preco: ${dadosUm.preco1}
Estoque: ${dadosUm.qtdEstoque}
Segunda pessoa:
Nome: ${pessoaDois.nome2}
Idade: ${pessoaDois.idade2}
Terceira pessoa:
Nome: ${pessoaTres.nome3}
Idade: ${pessoaTres.idade3}.`);
console.log(`A primeira pessoa e maior de idade ${pessoaUmMaiordeIdade}
A segunda pessoa e maior de idade: ${pessoaDoisMaiordeIdade}
A terceira pessoa e maior de idade: ${pessoaTresMaiordeIdade}`);
console.log(`A primeira pessoa e mais velha que a segunda: ${pessoa1maisVelhaQuePessoa2}
A segunda pessoa e mais nova que a terceira: ${pessoa2maisNovaQuePessoa3}
A terceira pessoa tem a mesma idade da terceira: ${pessoa1mesmaIdadePessoa3}`);
*/


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Comparador de produtos
// ------------------------------------------------------------
// a) Peça ao usuário o nome e o preço de 2 produtos (question() e questionFloat()), criando um objeto para cada um.
// b) Exiba os dois objetos com console.table().
// c) Calcule a diferença de preço entre os dois (use Math.abs()).
// d) Armazene e exiba os resultados:
//    - produto1 é mais caro que produto2?
//    - os dois têm o mesmo preço?
//    - o produto mais barato custa menos de R$ 50?
//    - o produto mais caro custa mais de R$ 200?
// e) Exiba cada resultado identificando os produtos pelo nome.

// → Seu código aqui:
/*
const produtoUm = {
    nome1: lerTeclado.question('Diga um produto: '),
    valor1: lerTeclado.questionFloat('Diga o valor desse produto: ')
};
const produtoDois = {
    nome2: lerTeclado.question('Diga um produto: '),
    valor2: lerTeclado.questionFloat('Diga o valor desse produto: ')
};
let diferenca = Math.abs(produtoUm.valor1 - produtoDois.valor2) 
let produtos = [produtoUm, produtoDois]
console.table(produtos)

let produto1maisCaroqueproduto2 = produtoUm.valor1 > produtoDois.valor2;
let produto1MesmoValorproduto2 = produtoUm.valor1 === produtoDois.valor2;
let produtoMaisbarato = produtos > 50
let produtoMaisCaro = produtos < 200

console.log(`O primeiro produto e mais caro que o segundo produto: ${produto1maisCaroqueproduto2}
    Ambos tem o mesmo preco: ${produto1MesmoValorproduto2}
    O produto mais barato custa menos de R$50 reais: ${produtoMaisbarato}
    O produto mais caro custa mais de R$200 reais: ${produtoMaisCaro}.`);
*/
console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Boletim escolar
// ------------------------------------------------------------
// a) Peça ao usuário o nome de um aluno e suas 4 notas (questionFloat()).
// b) Calcule a média das 4 notas (use toFixed(2)).
// c) Crie um objeto "boletim" com as propriedades:
//    nome, notas (array com as 4 notas) e media.
// d) Exiba o objeto com console.table().
// e) Armazene e exiba os resultados das comparações:
//    - O aluno está aprovado (média >= 6)?
//    - O aluno precisa de recuperação (média >= 4 e média < 6)?
//    - Alguma nota é maior que 9?  (verifique cada array separadamente - utilize a função de array "some()" para isso)
//    - A maior nota é maior que a menor nota em mais de 3 pontos?
//      (use Math.max() e Math.min() para encontrar maior e menor)

// → Seu código aqui:
/*
const alunoUm = {
    nome1: lerTeclado.question('Diga um nome: '),
    notas1: lerTeclado.questionFloat('Diga as notasdessa pessoa: ')
};
const alunoDois = {
    nome2: lerTeclado.question('Diga um nome: '),
    notas2: lerTeclado.questionFloat('Diga as notas desse aluno: ')
};
const alunoTres = {
    nome3: lerTeclado.question('Diga um nome: '),
    notas3: lerTeclado.questionFloat('Diga as notas desse aluno: ')
};
const alunoQuatro = {
    nome4: lerTeclado.question('Diga um nome: '),
    notas4: lerTeclado.questionFloat('Diga as notas desse aluno: ')
};
let notas = [alunoUm.notas1, alunoDois.notas2, alunoTres.notas3, alunoQuatro.notas4]
let media = notas / 4

let boletim = [
        {nome: alunoUm.nome1, notas: alunoUm.notas1, media: media},
        {nome: alunoDois.nome2, notas: alunoDois.notas2, media: media},
        {nome: alunoTres.nome3, notas: alunoTres.notas3, media: media},
        {nome: alunoQuatro.nome4, notas: alunoQuatro.notas4, media: media},
];

console.table(boletim);

if(media <= 6){
    console.log('Aprovado!');
} else if(media >= 4 && media < 6){
    console.log('Precisa de recuperacao.');   
}
*/


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Estoque de loja
// ------------------------------------------------------------
// a) Peça ao usuário os dados de 3 produtos e crie um objeto para cada:
//    nome (question()), preço (questionFloat()) e quantidade em estoque (questionInt()).
// b) Crie um array "estoque" e armazene os 3 produtos.
// c) Exiba o array com console.table().
// d) Para cada produto, armazene em variáveis booleanas e exiba:
//    - O produto tem estoque disponível (quantidade > 0)?
//    - O produto está com estoque baixo (quantidade <= 5)?
//    - O produto é considerado caro (preço > 100)?
//    - O produto tem preço abaixo de 50?
// e) Use template literal identificando cada produto pelo nome.

// → Seu código aqui:

const dadosUm = {
    nome1: lerTeclado.question('Diga um produto: '),
    preco1: lerTeclado.questionInt('Diga a preco desse produto: '),
    qtdEstoque: lerTeclado.questionInt('Ha quantas unidades em estoque: ')
};
const dadosDois = {
    nome2: lerTeclado.question('Diga um produto: '),
    preco2: lerTeclado.questionInt('Diga a preco desse produto: '),
    qtdEstoque2: lerTeclado.questionInt('Ha quantas unidades em estoque: ')
};
const dadosTres = {
    nome3: lerTeclado.question('Diga um produto: '),
    preco3: lerTeclado.questionInt('Diga a preco desse produto: '),
    qtdEstoque3: lerTeclado.questionInt('Ha quantas unidades em estoque: ')
};

let estoque = [dadosUm, dadosDois, dadosTres];
console.table(estoque);

let ProdutoDisponivel = dadosUm.qtdEstoque > 0;
let ProdutoDisponivel2 = dadosDois.qtdEstoque2 > 0;
let ProdutoDisponivel3 = dadosTres.qtdEstoque3 > 0;

let ProdutoAbaixoEst = dadosUm.qtdEstoque <= 5;
let ProdutoAbaixoEst2 = dadosDois.qtdEstoque2 <= 5;
let ProdutoAbaixoEst3 = dadosTres.qtdEstoque3 <= 5;

let ProdutoCaro = dadosUm.preco1 > 100;
let ProdutoCaro2 = dadosDois.preco2 > 100;
let ProdutoCaro3 = dadosTres.preco3 > 100;

let ProdutoPrecoAbaixo = dadosUm.preco1 < 0;
let ProdutoPrecoAbaixo2 = dadosDois.preco2 < 0;
let ProdutoPrecoAbaixo3 = dadosTres.preco3 < 0;


console.log(`Primeiro produto:
Nome: ${dadosUm.nome1}
Preco: ${dadosUm.preco1}
Estoque: ${dadosUm.qtdEstoque}
Segundo produto:
Nome: ${dadosDois.nome2}
Preco: ${dadosDois.preco2}
Estoque: ${dadosDois.qtdEstoque2}
Terceiro produto:
Nome: ${dadosTres.nome3}
Preco: ${dadosTres.preco3}
Estoque: ${dadosTres.qtdEstoque3}`);
console.log(`O produto tem estoque disponivel: ${ProdutoDisponivel}
    O produto tem estoque disponível: ${ProdutoDisponivel2}
    O produto tem estoque disponível: ${ProdutoDisponivel3}.`);
console.log(`O produto está com estoque baixo: ${ProdutoAbaixoEst}
    O produto está com estoque baixo: ${ProdutoAbaixoEst2}
    O produto está com estoque baixo: ${ProdutoAbaixoEst3}`);
console.log(`O produto é considerado caro: ${ProdutoCaro}
    O produto é considerado caro: ${ProdutoCaro2}
    O produto é considerado caro: ${ProdutoCaro3}`);
console.log(`O produto tem preço abaixo de 50: ${ProdutoPrecoAbaixo}
    O produto tem preço abaixo de 50: ${ProdutoPrecoAbaixo2}
    O produto tem preço abaixo de 50: ${ProdutoPrecoAbaixo3}`);




console.log("_______________________________");