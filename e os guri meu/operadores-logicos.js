// ============================================================
//   ATIVIDADE 06 – Operadores Lógicos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-06.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// ============================================================

let lerTeclado = require('readline-sync');


// ------------------------------------------------------------
// EXERCÍCIO 1 – Tabela verdade do &&
// ------------------------------------------------------------
// Para cada combinação abaixo, armazene o resultado em uma variável
// e exiba com template literal no formato:
//   "true && true → <resultado>"
//
// Combinações:
//   a) true && true
//   b) true && false
//   c) false && true
//   d) false && false

// → Seu código aqui:

console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Tabela verdade do ||
// ------------------------------------------------------------
// Para cada combinação abaixo, armazene o resultado em uma variável
// e exiba com template literal no formato:
//   "true || false → <resultado>"
//
// Combinações:
//   a) true || true
//   b) true || false
//   c) false || true
//   d) false || false

// → Seu código aqui:

console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Operador ! (NOT)
// ------------------------------------------------------------
// a) Declare "sistemaAtivo" com valor true.
// b) Declare "modoManutencao" atribuindo o valor invertido de "sistemaAtivo" (usando !).
// c) Declare "lugarVago" com valor false.
// d) Declare "lugarOcupado" com o valor invertido de "lugarVago" (usando !).
// e) Exiba todas as 4 variáveis com template literal mostrando seus valores.

// → Seu código aqui:

let sistemaAtivo = true;
let modoManutencao = !sistemaAtivo
let lugarVago = true
let lugarOcupado = !lugarVago

console.log("Sistema Ativo:", sistemaAtivo);
console.log("Modo Manuntencao: ", modoManutencao);
console.log("Lugar vago: ", lugarVago);
console.log("Lugar Ocupado: ", lugarOcupado)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Combinando && com operadores relacionais
// ------------------------------------------------------------
// a) Pergunte ao usuário seu peso e altura. Armazene os valores em um objeto.
// b) Calcule o IMC: peso / (altura ** 2). Armazene em "imc" (dentro do objeto usuário).
// c) Armazene em "imcAbaixoDoPeso" o resultado de: imc < 18.5
// c) Armazene em "imcNormal" o resultado de: imc >= 18.5 && imc <= 24.9
// d) Armazene em "imcAcimaDoPeso" o resultado de: imc >= 25 && imc <= 29.9
// e) Exiba o IMC e os três resultados booleanos com template literal. Cada imc em um console.log() individual.

// → Seu código aqui:
/*
const usuario = {
    peso: lerTeclado. questionInt('Digite seu peso: '),
    altura: lerTeclado.questionInt('Digite sua altura: '),
    }
let imc = (usuario.peso / usuario.altura ** 2);
let imcAbaixoDoPeso = imc <18.5
let imcNormal = imc >= 18.5 && imc <= 24.9
let imcAcimaDoPeso = imc >= 25 && imc <= 29.9

console.log('Abaixo do peso: ', imcAbaixoDoPeso);
console.log('peso normal: ', imcNormal);
console.log('Acima do peso: ', imcAcimaDoPeso);

console.log("_______________________________");
*/

// ------------------------------------------------------------
// EXERCÍCIO 5 – Combinando || com operadores relacionais
// ------------------------------------------------------------
// a) Declare "notaFinal" com valor 4.8.
// b) Armazene em "precisaRecuperacao" o resultado de:
//    notaFinal >= 4 && notaFinal < 6
// c) Armazene em "reprovado" o resultado de:
//    notaFinal < 4
// d) Armazene em "precisaDeAjuda" o resultado de:
//    precisaRecuperacao || reprovado
// e) Exiba todos os resultados com template literal.

// → Seu código aqui:
/*
let notaFinal = 4.8
precisaRecuperacao = notaFinal >= 4 && notaFinal < 6,
precisaDeAjuda = precisaRecuperacao || reprovado

console.log(`Tirou: ${notaFinal}`);
console.log(`Precisa de recuperacao: `, precisaRecuperacao);
console.log(`Precisa de ajuda: `, precisaDeAjuda);

console.log("_______________________________");
*/

// ------------------------------------------------------------
// EXERCÍCIO 6 – Operador ternário
// ------------------------------------------------------------
// a) Declare "temperatura" com valor 38.2.
// b) Usando o operador ternário, armazene em "diagnostico":
//    Se temperatura >= 37.6 → "Febre detectada"
//    Caso contrário → "Temperatura normal"
// c) Exiba a variável "diagnostico" com template literal mostrando a temperatura e o resultado do diagnóstico.

// → Seu código aqui:

let temperatura = 38.2
let diagnostico = temperatura >= 37.6 || temperatura <= 37.6 
let literal = diagnostico >= 37.6? 'Febre detectada' : `Temperatura Normal`

console.log(literal);






console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Operador ternário
// ------------------------------------------------------------
// a) Declare "velocidade" com valor 110 e "limiteVelocidade" com valor 100.
// c) Usando o operador ternário, armazene em "statusMulta":
//    Se velocidade > limiteVelocidade → "Multa aplicada"
//    Caso contrário                    → "Velocidade regular"
// c) Exiba a variável "statusMulta" com template literal mostrando a velocidade e o resultado da multa.

// → Seu código aqui:
/*
let velocidade = 110
let limiteVelocidade = 100

statusMulta = velocidade > limiteVelocidade? 'Multa aplicada' : 'Velocidade regular',

console.log(statusMulta);
*/
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Operador ternário e questionamento
// ------------------------------------------------------------
// a) Pergunte ao usuário se ele é bolsista (keyInYN()). Armazene em "ehEstudante".
// b) Pergunte ao usuário se ele paga mais que R$ 1000,00 mensais pelo curso.
// b) Usando o operadores ternários, armazene em "mensagem":
//    Se é bolsista e paga mais que R$ 1000,00 → "Desconto aplicado!"
//    Caso contrário → "Desconto não aplicado."
// c) Exiba a variável "mensagem" com template literal.

// → Seu código aqui:
/*
let ehEstudante = lerTeclado.keyInYN(`Voce e bolsista: `)
lerTeclado.keyInYN(`Paga mais de R$1000 mensais:`)

let mensagem = ehEstudante? 'Desconto aplicado' : 'Desconto nao aplicado'

console.log(mensagem);
*/


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 9 – Verificação de acesso com input
// ------------------------------------------------------------
// a) Peça ao usuário e armazene os dados em um objeto:
//    - Sua idade (questionInt()).
//    - Se possui ingresso (keyInYN()).
//    - Se é associado ao clube (keyInYN()).
// b) Armazene e exiba os resultados das seguintes verificações em outro objeto:
//    - "podeEntrarNormal": (idade maior ou igual a 18 e possuiIngresso) ou ehAssociado
//    - "podeEntrarSocio": possuiIngresso e ehAssociado
//    - "precisaAcompanhante": idade menor que 18
//    - "naoPodeEntrar": não possuiIngresso e não ehAssociado
// c) Exiba a mensagem final usando ternário:
//    Se podeEntrarNormal ou podeEntrarSocio → "Entrada liberada!"
//    Caso contrário → "Entrada negada."

// → Seu código aqui:

const usuarioFesta = {
    idade: lerTeclado.questionInt(`Qual a sua idade: `),
    ingresso: lerTeclado.keyInYN(` Possui ingresso: `),
    associado: lerTeclado.keyInYN(`E associado: `)
}
podeEntrarNormal = usuarioFesta.idade <= 18, usuarioFesta.ingresso, usuarioFesta.associado;
podeEntrarSocio = usuarioFesta.ingresso, usuarioFesta.associado;
precisaAcompanhante = usuarioFesta.idade > 18;

console.log(podeEntrarNormal);
console.log(podeEntrarSocio);
console.log(precisaAcompanhante);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Verificação de estoque com objeto
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Nome do produto.
//    - Quantidade em estoque.
//    - Se o produto está ativo no sistema (keyInYN()).
// b) Armazene os dados em um objeto chamado "produto".
// c) Crie as seguintes verificações booleanas:
//    - "temEstoque": quantidade maior que 0
//    - "produtoDisponivel": temEstoque e está ativo
//    - "produtoIndisponivel": não temEstoque || não está ativo
// d) Exiba os resultados com template literal.

// → Seu código aqui:

const usuarioProduto = {
    produto: lerTeclado.question(`Qual o nome do seu produto: `),
    estoque: lerTeclado.questionInt(`Quanto ha em estoque: `),
    sistema: lerTeclado.keyInYN(`Ele esta no sistema:`)
}
let temEstoque = estoque >0
let produtoDisponivel = temEstoque

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 11 – Verificação de permissões
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - Se ele é administrador (keyInYN())
//    - Se ele está logado (keyInYN())
//    - Se a conta está ativa (keyInYN())
// b) Armazene as respostas em um objeto chamado "usuario".
// c) Crie as seguintes verificações:
//    - "acessoSistema": logado e contaAtiva
//    - "acessoAdmin": acessoSistema e ehAdmin
//    - "acessoNegado": não logado ou não contaAtiva
// d) Exiba todos os resultados.

// → Seu código aqui:

let usuario = {
    ehAdmin: guri.keyInYN('Você é administrador?'),
    logado: guri.keyInYN('Você está logado?'),
    contaAtiva: guri.keyInYN('Sua conta está ativa?')
};

// Verificações
let acessoSistema = usuario.logado && usuario.contaAtiva;
let acessoAdmin = acessoSistema && usuario.ehAdmin;
let acessoNegado = !usuario.logado || !usuario.contaAtiva;

// Exibição
console.log('\n=== DADOS DO USUÁRIO ===');
console.log(`Administrador: ${usuario.ehAdmin ? 'Sim' : 'Não'}`);
console.log(`Logado: ${usuario.logado ? 'Sim' : 'Não'}`);
console.log(`Conta ativa: ${usuario.contaAtiva ? 'Sim' : 'Não'}`);

console.log('\n=== VERIFICAÇÕES ===');
console.log(`Acesso ao sistema: ${acessoSistema ? 'Permitido' : 'Negado'}`);
console.log(`Acesso de administrador: ${acessoAdmin ? 'Permitido' : 'Negado'}`);
console.log(`Acesso negado: ${acessoNegado ? 'Sim' : 'Não'}`);


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 12 – Sistema simples de login
// ------------------------------------------------------------
// a) Crie um objeto "credenciaisSistema" contendo:
//    usuario: "admin"
//    senha: "1234"
// b) Pergunte ao usuário:
//    - usuário
//    - senha
// c) Crie as verificações:
//    - "usuarioCorreto": usuarioDigitado estritamente igual a usuario
//    - "senhaCorreta": senhaDigitada estritamente igual a senha
//    - "loginValido": usuarioCorreto e senhaCorreta
// d) Usando ternário, exiba:
//    Se loginValido → "Login realizado com sucesso!"
//    Caso contrário → "Usuário ou senha incorretos."

// → Seu código aqui:

let credenciaisSistema = {
    usuario: 'admin',
    senha: '1234'
};


let usuarioDigitado = guri.question('Digite o usuário: ');
let senhaDigitada = guri.question('Digite a senha: ');


let usuarioCorreto = usuarioDigitado === credenciaisSistema.usuario;
let senhaCorreta = senhaDigitada === credenciaisSistema.senha;
let loginValido = usuarioCorreto && senhaCorreta;


console.log(
    loginValido
)
console.log("_______________________________");
