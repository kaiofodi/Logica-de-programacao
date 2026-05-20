//============================================
//    ATIVIDADE AVALIATIVA: JOGO DA VELHA
//============================================

let guri = require('readline-sync');

// Desenvolver um tabuleiro de jogo da velha em JavaScript...

console.log('BEM-VINDOS AO JOGO DA VELHA');


const jogoDaVelha = [   // comeca-se com um tabuleiro 3x3 vazio.
    ["-",  "-",  "-"],
    ["-",  "-",  "-"],
    ["-",  "-",  "-"],
];
let jogador = 'x';
let i;
let j;

console.table(jogoDaVelha);

// utilizo um for e seguido de um while, para perguntar ao jogador qual posicao ele gostaria, com linha[i] e coluna[j]
// e se caso a posicao ja tenha sido selecionada antes, tem o else fazendo com que repita a pergunta.
for(let i = 1; jogoDaVelha <= 5; i++){
    } while(true){
        i = guri.questionInt(`Jogador ${jogador} - Digite a linha (0 a 2): `);
        j = guri.questionInt(`Jogador ${jogador} - Digite a coluna (0 a 2): `);
        if (jogoDaVelha[i][j] === "-") {
        break;
    } else {
      console.log("Posição já ocupada! Escolha outra.");
    }
  }
// aqui digo que o jogo da velha nos valores que o jogador escolheu, armazenando na tentativa do jogador
jogoDaVelha[i][j] = jogador
// so um .table para atualizar o tabuleiro    
console.table(jogoDaVelha)

//aqui so alterno entre os jogadores
jogador = jogador === 'x' ? 'o' : 'x'

for(let i = 1; jogoDaVelha <= 5; i++){
    } while(true){
        i = guri.questionInt(`Jogador ${jogador} - Digite a linha (0 a 2): `);
        j = guri.questionInt(`Jogador ${jogador} - Digite a coluna (0 a 2): `);
        if (jogoDaVelha[i][j] === "-") {
      break;
    } else {
      console.log("Posição já ocupada! Escolha outra.");
    }
  }
jogoDaVelha[i][j] = jogador
    
console.table(jogoDaVelha)

jogador = jogador === 'x' ? 'o' : 'x'

//====================== So repeticao do codigo ======================
for(let i = 1; jogoDaVelha <= 5; i++){
    } while(true){
        i = guri.questionInt(`Jogador ${jogador} - Digite a linha (0 a 2): `);
        j = guri.questionInt(`Jogador ${jogador} - Digite a coluna (0 a 2): `);
        if (jogoDaVelha[i][j] === "-") {
      break;
    } else {
      console.log("Posição já ocupada! Escolha outra.");
    }
  }
jogoDaVelha[i][j] = jogador
    

console.table(jogoDaVelha)

jogador = jogador === 'x' ? 'o' : 'x'

for(let i = 1; jogoDaVelha <= 5; i++){
    } while(true){
        i = guri.questionInt(`Jogador ${jogador} - Digiti (0 a 2): `);
        j = guri.questionInt(`Jogador ${jogador} - Digite a coluna (0 a 2): `);
        if (jogoDaVelha[i][j] === "-") {
      break;
    } else {
      console.log("Posição já ocupada! Escolha outra.");
    }
  }
jogoDaVelha[i][j] = jogador
                      
console.table(jogoDaVelha)

jogador = jogador === 'x' ? 'o' : 'x'

for(let i = 1; jogoDaVelha <= 5; i++){
    } while(true){
        i = guri.questionInt(`Jogador ${jogador} - Digite a linha (0 a 2): `);
        j = guri.questionInt(`Jogador ${jogador} - Digite a coluna (0 a 2): `);
        if (jogoDaVelha[i][j] === "-") {
      break;
    } else {
      console.log("Posição já ocupada! Escolha outra.");
    }
  }
jogoDaVelha[i][j] = jogador

jogador = jogador === 'x' ? 'o' : 'x'


console.table(jogoDaVelha)




