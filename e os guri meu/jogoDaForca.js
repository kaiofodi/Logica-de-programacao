//=================================================================
//                    JOGO DA FORCA - AVALIATIVO
//=================================================================
// Desenvolver um jogo da forca

const guri = require('readline-sync');

const palavra = 'VSCODE'

const forca = [
`
 +---+
 |   |
     |
     |
     |
     |
=========`,
`
 +---+
 |   |
 O   |
     |
     |
     |
=========`,
`
 +---+
 |   |
 O   |
 |   |
     |
     |
=========`,
`
 +---+
 |   |
 O   |
/|   |
     |
     |
=========`,
`
 +---+
 |   |
 O   |
/|\\  |
     |
     |
=========`,
`
 +---+
 |   |
 O   |
/|\\  |
/    |
     |
=========`,
`
 +---+
 |   |
 O   |
/|\\  |
/ \\  |
     |
=========`
];

// Comecei fazendo o bonequinho da forca e escolhendo a minha palavra

function mostrarJogo(letrasDescobertas, letrasTentadas, erros) {
    console.clear();
    console.log(forca[erros]);
    console.log('Palavra:', letrasDescobertas.join(' '));
    console.log('Letras tentadas:', letrasTentadas.join(', '));
}

// Utilizo uma função para mostrar as o que aparecerá no terminal.

function pedirLetra() {
    return guri.question('Digite uma letra: ').toUpperCase();
}
// Outra função para apenas pedir a letra que o usuario deseja

function revelarLetra(palavra, letra, letrasDescobertas) {
    let acertou = false;

    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] === letra) {
            letrasDescobertas[i] = letra;
            acertou = true;
        }
    }

    return acertou;
}

// Essa função é utilizada para verificar se o usuario acertou a letra e onde ela está localizada na palavra.

function venceu(letrasDescobertas) {
    return !letrasDescobertas.includes('_');
}
// Apenas uma função para verificar se ainda há alguma '_' escondido

function jogar() {
    let letrasDescobertas = Array(palavra.length).fill('_');
    let letrasTentadas = [];
    let erros = 0;

    while (erros < 6 && !venceu(letrasDescobertas)) {

        mostrarJogo(letrasDescobertas, letrasTentadas, erros);

        let letra = pedirLetra();

        if (letrasTentadas.includes(letra)) {
            console.log('Você já tentou essa letra!');
            guri.question('Pressione ENTER para continuar...');
            continue;
        }

        letrasTentadas.push(letra);

        if (!revelarLetra(palavra, letra, letrasDescobertas)) {
            erros++;
            console.log('Errou!');
        } else {
            console.log('Acertou!');
        }

        guri.question('Pressione ENTER para continuar...');
    }

    console.clear();

    if (venceu(letrasDescobertas)) {
        console.log('🎉 PARABÉNS! VOCÊ VENCEU!');
    } else {
        console.log(forca[6]);
        console.log('💀 VOCÊ PERDEU!');
    }

    console.log(`A palavra era: ${palavra}`);
}

// E a ultima função para o usuário poder jogar. 

jogar();

// E puxo a função 'jogar'
