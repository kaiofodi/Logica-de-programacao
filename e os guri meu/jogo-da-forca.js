//=================================================================
//                    JOGO DA FORCA - AVALIATIVO
//=================================================================
// Desenvolver um jogo da forca

let guri = require('readline-sync');

const forca = [
    `+---+
     |   |
         |
         |
         |
         |
    =========`,
    `+---+
     |   |
     O   |
         |
         |
         |
   =========`,
   `+---+
    |   |
    O   |
    |   |
        |
        |
  =========`,
  `+---+
   |   |
   O   |
  /|   |
       |
       |
 =========`,
 `+---+
  |   |
  O   |
 /|\  |
      |
      |
=========`,
`+---+
 |   |
 O   |
/|\  |
/    |
     |
=========`,
`+----+
 |    |
 O    |
/|\\  |
/ \\  |
      |
=========`
];

const palavra = "VSCODE"
let letrasdes = Array(palavra.length).fill('_')
let tentativas = [];
let erros = 0;


while(erros < 6 && letrasdes.includes('_')) {
    console.clear();

    console.log(forca[erros]);
    console.log('Palavra:', letrasdes.join(' '));
    

    let letra = guri.question('Digite uma letra: ').toUpperCase()

    if(tentativas.includes(letra)) {
        console.log('Voce ja tentou essa letra!');
        guri.question('Aperte ENTER para continuar...')
        continue
    }

    tentativas.push(letra)

    if(palavra.includes(letra)) {
        for(let i = 0; i < palavra.lengt; i++) {
            if(palavra[i] === letra) {
                letrasdes[i] = letra;
            }
        }

        console.log('Parabens!');
        
    } else {
        erros++;
        console.log('Errou!');
        
    }

    guri.question('Aperte ENTER para continuar...')
}

if (!letrasdes.includes('_')) {
    console.log(' PARABENS! VOCE VENCEU!');
    console.log('Palavra:', palavra);
} else {
    console.log(forca[6]);
    console.log('VOCE PERDEU!');
    console.log('A palavra era:', palavra);
}