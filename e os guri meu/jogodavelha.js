//============================================
//    ATIVIDADE AVALIATIVA: JOGO DA VELHA
//============================================

let guri = require('readline-sync');

// Desenvolver um tabuleiro de jogo da velha em JavaScript...

console.log('BEM-VINDOS AO JOGO DA VELHA');


const jogoDaVelha = [
    ["-",  "-",  "-"],
    ["-",  "-",  "-"],
    ["-",  "-",  "-"],
];
let jogador = 'x';
let i;
let j;

console.table(jogoDaVelha);


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




