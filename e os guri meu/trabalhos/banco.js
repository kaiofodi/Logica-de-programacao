//=================================================================
//                    BANCO MONETARIO - AVALIATIVO
//=================================================================
// Desenvolver um sistema de banco monetario

let guri = require('readline-sync');

let usuarioBanco = []
let taxaBanco = {
    ted: 10.0,
    doc: 15.0,
    investimento: 0.02,
    atrasoCC: 10.0,
    jurosCCatraso: 2.0
}
/* {
    NomeCompleto: guri.question('Digite seu nome completo: '),  
    DataNascimento: guri.question('Digite a sua data de nascimento completa: '),
    telefone: guri.question('Digite o seu telefone:'),
    email: guri.question('Digite o seu email de contato: '),
    cpf: guri.question('Digite seu cpf: '),
    cnpj: null,
    EnderecoCompleto: {
        CEP: guri.question('Digite seu CEP: '),
        Rua: guri.question('Digite o nome da sua rua: '),
        Complemento: guri.question('Digite um complemento: '),
        Numero: guri.question('Digite o numero da sua casa: '),
        Bairro: guri.question('Digite o nome do seu bairro: '),
        Cidade: guri.question('Digite a sua cidade: '),
        Estado: guri.question('Digite o Estado no qual mora: ')

    }
*/
function usuario() {
    usuarioBanco.push({
            NomeCompleto: guri.question('Digite seu nome completo: '),  
            DataNascimento: guri.question('Digite a sua data de nascimento completa: '),
            telefone: guri.question('Digite o seu telefone:'),
            email: guri.question('Digite o seu email de contato: '),
            cpf: guri.question('Digite seu cpf: '),
            cnpj: null,
            EnderecoCompleto: {
                CEP: guri.question('Digite seu CEP: '),
                Rua: guri.question('Digite o nome da sua rua: '),
                Complemento: guri.question('Digite um complemento: '),
                Numero: guri.question('Digite o numero da sua casa: '),
                Bairro: guri.question('Digite o nome do seu bairro: '),
                Cidade: guri.question('Digite a sua cidade: '),
                Estado: guri.question('Digite o Estado no qual mora: ')
    
            }
    })
}

function cadastro(){
    usuario()
    console.log(`Usuario ${usuarioBanco[usuarioBanco.length-1].NomeCompleto} cadastrado com sucesso!`)
    DadosExibidos(usuarioBanco[usuarioBanco.length-1].cpf)
}

function DadosExibidos(cpfoucnpj){
    for (let i = 0; i < usuarioBanco.length; i++) {
        if (usuarioBanco[i].cpf == cpfoucnpj || usuarioBanco[i].cnpj == cpfoucnpj) {
            console.log(`Nome: ${usuarioBanco[i].NomeCompleto}`)
        } else {
            console.log('Usuario não encontrado')
        }
    }
}

function MenuInicial(){
    console.log(`
    ===========================
      BEM-VINDO AO NU!ZE
    ===========================
      Selecione uma das opções:
      1 - Acessar minha conta
      2 - Criar nova conta
      0 - Sair`)
    
    return escolhaValor(0, 2)
    break;
}

function MenuPrincipal(){
    console.log(`
    ===========================
      BEM-VINDO AO NU!ZE
    =========================== 
     Selecione uma das opções:
      1 - Realizar Deposito
      2 - Realizar Saque
      3 - Realizar Transferencia
      4 - Exibir Extrato Completo
      0 - Sair`)
    
    return escolhaValor(0, 4)
}

function Validar(min, max, ValorEsolido){
    if (ValorEsolido < min || ValorEsolido > max) return true
    return false
}

function escolhaValor(min, max){
    let valor = guri.questionInt('Digite a opcao desejada: ')
    while (Validar(min, max, valor)) {
        console.log('Valor invalido, tente novamente!')
        valor = guri.questionInt('Digite a opcao desejada: ')
    }
    return valor
}

inicializar()

function inicializar(){
    let escolha = MenuInicial()
    do{
        switch (escolha) {
            case 1:
                console.log('Acessar minha conta')
                break;
            case 2:
                cadastro()
                break;
            case 0:
                console.log('Saindo do sistema...')
                break;
        }
    } while (escolha != 0)
}
function Acesso() {
    let cpfoucnpj = guri.question('Digite seu cpf ou cnpj para acessar sua conta: ')
    for (let i = 0; i < usuarioBanco.length; i++) {
        if (usuarioBanco[i].cpf == cpfoucnpj || usuarioBanco[i].cnpj == cpfoucnpj) {
            console.log(`Bem-vindo ${usuarioBanco[i].NomeCompleto}!`)
            MenuPrincipal()
        } else {
            console.log('Usuario não encontrado')
        }
    }
}
function Notificacoes() {
    console.log('Notificacoes')

}
function Deposito() {
    let valorDeposito = guri.questionFloat('Digite o valor do deposito: ')
    while (valorDeposito <= 0) {
        console.log('Valor invalido, tente novamente!')
        valorDeposito = guri.questionFloat('Digite o valor do deposito: ')
    }
}
function Saque() {
    let valorSaque = guri.questionFloat('Digite o valor do saque: ')
    while (valorSaque <= 0) {
        console.log('Valor invalido, tente novamente!')
        valorSaque = guri.questionFloat('Digite o valor do saque: ')
    }
}

function TransferenciaPIXTEDDOC() {
    let valorTransferencia = guri.questionFloat('Digite o valor da transferencia: ')
    while (valorTransferencia <= 0) {
        console.log('Valor invalido, tente novamente!')
        valorTransferencia = guri.questionFloat('Digite o valor da transferencia: ')
    }
}

function Emprestimo() {
    let valorEmprestimo = guri.questionFloat('Digite o valor do emprestimo: ')
    while (valorEmprestimo <= 0) {
        console.log('Valor invalido, tente novamente!')
        valorEmprestimo = guri.questionFloat('Digite o valor do emprestimo: ')
    }
}

function Investimento() {
    let valorInvestimento = guri.questionFloat('Digite o valor do investimento: ')
    while (valorInvestimento <= 0) {
        console.log('Valor invalido, tente novamente!')
        valorInvestimento = guri.questionFloat('Digite o valor do investimento: ')
    }
}

function Extrato() {
    console.log('Extrato Completo')
}

function Ajudachat() {
    console.log('Ajudachat')
}

function Cashback() {
    console.log('Cashback')
}

function RecargaCelular() {
    let valorRecarga = guri.questionFloat('Digite o valor da recarga: ')
    while (valorRecarga <= 0) {
        console.log('Valor invalido, tente novamente!')
        valorRecarga = guri.questionFloat('Digite o valor da recarga: ')
    }
}


//let objeto(conta, limites, tipo, infos pessoais,).
