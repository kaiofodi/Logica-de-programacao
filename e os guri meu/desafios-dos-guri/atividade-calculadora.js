let lerTeclado = require('readline-sync');

// ATIVIDADE: Desenvolver uma calculadora.

let numero = lerTeclado.questionFloat('Digite um numero: ')  
let numeros = lerTeclado.questionFloat('Digite outro numero: ')
let operacao = lerTeclado.questionInt(`Digite um numero para operacao: 
1 - Soma 
2 - Subtracao
3 - Multiplicacao 
4 - Divisao
`)
let simbolos = ''
let resultado;

 // Peço ao usuario dois numeros aleatorios e pergunto tambem qual operação ele quer.

 while(operacao < 1 || operacao > 4){
    console.log('Operacao invalida.');
    operacao = lerTeclado.questionInt(`Digite novamente: 
1 - Soma 
2 - Subtracao
3 - Multiplicacao 
4 - Divisao
`)
 }
 
// Aqui utilizo da funcao while, para caso o usuario coloque um numero acima ou abaixo das que estao nas alternativas, de a frase "Operacao invalida", e repita novamente a pergunta.

 let calculo = {
    numero, 
    numeros, 
    operacao, 
    simbolos
}
console.log(calculo);
switch(operacao){
    case 1:    
        resultado = numero + numeros
        simbolos = '+'
        break;
    case 2:
        resultado = numero - numeros
        simbolos = '-'
        break;
    case 3:
        resultado = numero * numeros
        simbolos = '*'
        break;
    case 4:
        resultado = numero / numeros
        simbolos = '/'
        break;
    default:
        console.log('Operacao invalida.');
        
        
}    
if(numeros === 0){
    console.log('Erro! Divisao por 0 nao permitida.');
}

// Coloco tambem que o segundo numero do usuario nao pode ser 0, pois nao ha divisao por 0.

console.log(`${numero} ${simbolos} ${numeros} = ${resultado}`)


