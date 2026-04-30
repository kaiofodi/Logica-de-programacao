// ============================================================
//   DESAFIOS (para quem já terminou as atividades 02 e 02-2) – Arrays e Objetos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Acessar e alterar elementos de array
// ------------------------------------------------------------
// const frutas = ['maçã', 'banana', 'laranja', 'uva'];
// a) Acesse o primeiro e o terceiro elemento e exiba com console.log().
// b) Substitua o segundo elemento por 'abacaxi' usando atribuição direta.

// → Seu código aqui:
const frutas = ['maçã', 'banana', 'laranja', 'uva'];
frutas[1] = 'abacaxi'

console.log(`${frutas[0]} e ${frutas[2]}`);
console.log(frutas[1]);
console.log(frutas);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Criar novos arrays por seleção
// ------------------------------------------------------------
// const letras1 = ['a', 'b', 'c', 'd', 'e', 'f'];
// a) Crie um novo array contendo apenas o primeiro, o terceiro e o sexto elementos.
// b) Crie outro array que contenha os dois últimos elementos.
// Observação: Utilize o valor de um array dentro de outro, exemplo: array2[array1[3], array[5]]

// → Seu código aqui:
const letras1 = ['a', 'b', 'c', 'd', 'e', 'f'];

console.log(letras1[0], letras1[2], letras1[5]);
console.log(letras1[4], letras1[5]);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Batata?
// ------------------------------------------------------------
// const letras2 = ['a', 'b', 'c', 'd', 'e', 't'];
// a) Crie um novo array que retorne a palavra "batata" ao ser exibido no console.

let letras2 = ['a', 'b', 'c', 'd', 'e', 't'];
letras2 = 'batata'

console.log(letras2);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Objetos: acessar e adicionar propriedades
// ------------------------------------------------------------
//const pessoa = { 
//  nome: 'Junin',
//  idade: 22,
//  endereco: {
//    rua: 'Avenida Brasil'
//  } 
//};
// a) Acesse e exiba a propriedade 'nome' e 'cidade' do objeto 'pessoa'.
// b) Adicione uma nova propriedade 'curso' com valor 'Programação' ao objeto 'pessoa'.

// → Seu código aqui:
const pessoa = { 
  nome: 'Junin',
  idade: 22,
  endereco: {
    rua: 'Avenida Brasil'
  } 
}
pessoa.curso = 'Programacao' 

console.log(`Nome: ${pessoa.nome}, rua: ${pessoa.endereco.rua}`);
console.log(pessoa);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Objetos aninhados e arrays dentro de objetos
// ------------------------------------------------------------
const perfil = {
  usuario: 'ana123',
  dados: { 
    nome: 'Ana',
    idade: 19,
    interesses: ['música', 'fotografia', 'viagens']
  }
};
// a) Exiba o nome da pessoa cadastrada em 'perfil'.
// b) Exiba o segundo interesse da pessoa.
// c) Altere o primeiro interesse para 'arte' por atribuição direta.
// d) Exiba o nome, a idade e a lista de interesse da pessoa.

// → Seu código aqui:

perfil.dados.interesses[0] = 'artes'

console.log(perfil.dados.nome);
console.log(perfil.dados.interesses[1]);
console.log(perfil.dados);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Criar um catálogo (array de objetos e objeto indexado)
// ------------------------------------------------------------
// Crie um array 'produtos' contendo 3 produtos, onde cada produto é um objeto contendo:
//    id(number), nomeDoProduto(string) e preço(number).
// Crie um objeto 'catalogo' onde as chaves são os ids dos produtos (1, 2, 3)
//    e os valores são o nome dos produtos correspondentes.

// → Seu código aqui:

const produtos = [
    {produto1: 'teclado', preco1: 100, id1: 1},
    {produto2: 'mouse', preco2: 50, id2: 2},
    {produto3:'microfone', preco3: 200, id3: 3}
]
const catalogo = {
    1: produtos[0].produto1,
    1: produtos[1].produto2,
    1: produtos[2].produto3,
}
console.log(produtos);
console.log(catalogo);




console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Estrutura composta: tarefas simples
// ------------------------------------------------------------
// Defina um array de tarefas com 3 objetos: { id, titulo, concluida(boolean) }.
// a) Marque a tarefa de id 2 como concluída por atribuição direta.
// b) Crie um novo array contendo apenas as tarefas que não estão concluídas
// c) Exiba o título de todas as tarefas do objeto.
// d) Exiba o título de todas as tarefas do array.

// → Seu código aqui:


console.log("_______________________________");