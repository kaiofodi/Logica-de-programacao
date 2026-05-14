// ============================================================
//   ATIVIDADE 12 – Estruturas de Dados: Vetor (Array)
// ============================================================

let guri = require('readline-sync');

// Dica: Faça os exercícios utilizando funções de array,
//       mas também tente resolver os desafios sem essas funções

// ------------------------------------------------------------
// EXERCÍCIO 1 – Lendo e exibindo um vetor
// ------------------------------------------------------------
// a) Declare um vetor com 5 cidades de sua escolha.
// b) Exiba a lista de cidades utilizando for().
// c) Exiba a primeira e a última cidade; a última utilizando .length.
// d) Exiba a quantidade total de cidades.

// → Seu código aqui:

let cidades = ['pau dos ferros', 'rolandia', 'crato', 'xique-xique', 'pintopolis']

for(let i = 0; i < cidades.length; i++){
    console.log(cidades);
    console.log(cidades[0]);
    console.log(cidades[cidades.length - 1]);
    console.log(`Total de cidades: ${cidades.length}`);
    break;
}


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Soma e média
// ------------------------------------------------------------
// a) Utilizando o vetor:
// const numeros = [12, 7, 25, 3, 18, 9, 31, 14];
// b) Calcule a SOMA de todos os números.
// c) Calcule a MÉDIA (soma / quantidade).
// d) Exiba: "Soma: <soma> | Média: <média>" (use toFixed(2) na média).

// → Seu código aqui:

const numeros = [12, 7, 25, 3, 18, 9, 31, 14];
let soma = 0;
let media;

for(let i = 0; i < numeros.length; i++){
    soma += numeros[i]
    media = (soma / numeros.length)
}

console.log(`Soma: ${soma} | Media: ${media.toFixed(2)}`)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior e menor
// ------------------------------------------------------------
// a) Utilizando o vetor:
// const temperaturas = [22.5, 19.0, 27.3, 18.7, 30.1, 25.4, 21.8];
// b) Encontre a MAIOR e a MENOR temperatura.
// c) Exiba: "Maior: <maior>°C | Menor: <menor>°C"

// → Seu código aqui:

const temperaturas = [22.5, 19.0, 27.3, 18.7, 30.1, 25.4, 21.8];
let maior = temperaturas[0];
let menor = temperaturas[0]

for(let i = 1; i < temperaturas.length; i++){
    if(temperaturas[i] > maior){
        maior = temperaturas[i]
    } else if(temperaturas[i] < menor){
        menor = temperaturas[i]
    }
}

console.log(`Maior: ${maior}°C | Menor: ${menor}°C.`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Pares e ímpares
// ------------------------------------------------------------
// a) Utilizando o vetor:
// const listaNumeros = [4, 7, 10, 13, 16, 19, 22, 25, 28];
// b) Conte quantos números são pares e quantos são ímpares.
// c) Crie dois vetores: paresVetor[] e imparesVetor[], e adicione os números em cada um.
// d) Exiba:
//    "Pares (<qtd>): <paresVetor>"
//    "Ímpares (<qtd>): <imparesVetor>"

// → Seu código aqui:
/*
const listaNumeros = [4, 7, 10, 13, 16, 19, 22, 25, 28];
const paresVetor = [4, 10, 16, 22, 28];
const imparesVetor = [7, 13, 19, 25];

for(let i = 1; i < listaNumeros.length; i++){
    console.log(`Quantidade de numeros pares: ${[listaNumeros.length]}`);
    console.log(`Quantidade de numeros impares:`);
    break;
}

console.log(`Pares: ${paresVetor.length} = ${paresVetor}
Impares: ${imparesVetor.length} = ${imparesVetor}.`);
*/

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Inversão de vetor
// ------------------------------------------------------------
// a) Utilizando o vetor:
//const vetorOriginal = ["A", "B", "C", "D", "E"];
// b) Usando for(), crie um novo vetor 'vetorInvertido' com os elementos em ordem reversa.
// c) Exiba ambos os vetores:
//    "Original:  <original>"
//    "Invertido: <invertido>"
// d) Inverta o vetorOriginal, mas utilizando função de array,
//    salve o resultado em vetorInvertido2 e exiba o resultado.

// → Seu código aqui:
/*
const vetorOriginal = ["A", "B", "C", "D", "E"];
const vetorInvertido = [];
const vetorInvertido2 = vetorOriginal.slice().reverse();

for(let i = 0; i < vetorOriginal.length; i++){
    vetorInvertido.push(["E", "D", "C", "B", "A"])
    break;
}

console.log(`Original: ${vetorOriginal}
Invertido: ${vetorInvertido}`);
console.log(vetorInvertido2);
*/

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Cadastro dinâmico
// ------------------------------------------------------------
// a) Crie um vetor vazio para produtos;
// b) Pergunte ao usuário quantos produtos deseja cadastrar.
// c) Usando for(), peça o nome de cada produto e adicione ao vetor.
// d) Ao final, também utilizando for() exiba o vetor completo e a mensagem:
//    "<qtd> produtos cadastrados."

// → Seu código aqui:
/*
const produtosVazio = [];
let qtdUsuario = guri.questionInt('Digite quantos produtos deseja cadastrar: ');

for(let i = 0; i < qtdUsuario; i++){
    let produtosUsuario = guri.question('Digite quais produtos deseja cadastrar:')
    produtosVazio.push(produtosUsuario)
    break; 
}

for(let i = 0; i < produtosVazio.length; i++){
    console.log(`Quantidade: ${produtosVazio.length}
    Produtos cadastrados: ${produtosVazio}.`);
    break;
}
*/
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Busca em vetor
// ------------------------------------------------------------
// a) Utilizando o vetor:
// const alunos = ["Ana", "Bruno", "Carla", "Diego", "Eva"];
// b) Pergunte ao usuário o nome de um aluno.
// c) Usando for e break, verifique se o nome existe na lista.
//    - Se existir: "<nome> está matriculado(a) (índice <i>)."
//    - Se não:     "<nome> não foi encontrado(a)."

// → Seu código aqui:

const alunos = ["Ana", "Bruno", "Carla", "Diego", "Eva"];
let alunoUsuario = guri.question('Digite um nome de algum aluno: ')
const estaNaLista = true

for(let i = 0; i< alunos.length; i++){
    console.log(`Existe: ${alunoUsuario} está matriculado(a) ${i}. : Se nao: ${alunoUsuario} não foi encontrado(a).`);
    break
}

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Vetor de objetos
// ------------------------------------------------------------
// a) Utilizando o vetor:
      const livros = [
        { titulo: "Dom Casmurro",       paginas: 256 },
        { titulo: "O Cortiço",          paginas: 304 },
        { titulo: "Memórias Póstumas",  paginas: 208 },
        { titulo: "Capitães da Areia",  paginas: 280 },
      ];
// b) Exiba a lista com console.table().
// c) Usando for, calcule:
//    - Total de páginas de todos os livros.
//    - Média de páginas por livro.
// d) Exiba o título do livro com MAIS páginas.

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Filtro com push
// ------------------------------------------------------------
// a) Utilizando o vetor:
      const idades = [12, 17, 21, 15, 30, 45, 9, 67, 19, 8];
// b) Usando for, separe o vetor acima em dois vetores:
//    - menores[]: pessoas com idade < 18
//    - adultos[]: pessoas com idade >= 18
// c) Exiba:
//    "Menores (<qtd>): <menores>"
//    "Adultos (<qtd>): <adultos>"

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Menu de notas
// ------------------------------------------------------------
// a) Crie um vetor vazio para notas;
// b) Usando do...while e switch, exiba o menu:
//    1 - Adicionar nota
//    2 - Listar notas
//    3 - Estatísticas
//    4 - Remover última
//    5 - Limpar todas
//    0 - Sair
// c) Realize as funções escolhidas até o usuário escolher 0.
// d) Ao sair: "Encerrando. Total de notas registradas: <qtd>"

// → Seu código aqui:


console.log("_______________________________");