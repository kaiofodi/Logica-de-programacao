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

}


function usuario() {
    usuarioBanco.push({
            NomeCompleto: guri.question('Digite seu nome completo: '),  
            DataNascimento: guri.question('Digite a sua data de nascimento completa: ', new Date()),
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
    
            },
            saldo: guri.questionFloat('Digite o valor do seu saldo inicial: '),
            extrato: [],
    });
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
        1 - Criar nova conta
        2 - Acessar minha conta
        0 - Sair`)
        
        return escolhaValor(0, 2)
    }

function MenuPrincipal(){
    console.log(`
    ===========================
      BEM-VINDO AO NU!ZE
    =========================== 
     Selecione uma das opções:
      1 - Realizar Deposito
      2 - Realizar Saque
      3 - Tirar duvidas com o nu!bot
      4 - Realizar Transferencia
      5 - Exibir Extrato Completo
      0 - Sair`)
    
    return escolhaValor(0, 5)
}

function Validar(min, max, ValorEscolhido){
    if (ValorEscolhido < min || ValorEscolhido > max) return true
    return false
}

function escolhaValor(min, max, valorEscolhido){
    let valor = guri.questionInt('Digite a opcao desejada: ')
    while (Validar(min, max, valor)) {
        console.log('Valor invalido, tente novamente!')
        valor = guri.questionInt('Digite a opcao desejada: ')
    }
    return valor
}

inicializar()

function inicializar(){
    let escolha; 
    do{
        escolha = MenuInicial()
        
        switch (escolha) {
            case 1:
                cadastro()
                console.log('Acessar minha conta')
                break;
            case 2:
                console.log('Acessar minha conta')
                Acesso()
                break;
            case 0:
                console.log('Saindo do sistema...')
                break;
        }
    } while (escolha != 0)
}
function Acesso() {
    let cpfoucnpj = guri.question('Digite seu cpf ou cnpj para acessar sua conta: ')
    let usuarioEncontrado = usuarioBanco.find(usuario => usuario.cpf === cpfoucnpj || usuario.cnpj === cpfoucnpj);
    if (usuarioEncontrado) {
        console.log(`Bem-vindo, ${usuarioEncontrado.NomeCompleto}!`)
        inicializarConta(usuarioEncontrado)
    } else {
        console.log('Usuario não encontrado')
    }
}

function Deposito(loginusuario) {
    let valorDeposito = guri.questionFloat('Digite o valor do deposito: ')
    while (valorDeposito <= 0) {
        console.log('Valor invalido, tente novamente!')
        valorDeposito = guri.questionFloat('Digite o valor do deposito: ')
    }
    loginusuario.saldo += valorDeposito
    console.log(`Deposito de R$${valorDeposito.toFixed(2)} realizado com sucesso! Novo saldo: R$${loginusuario.saldo.toFixed(2)}`)
    loginusuario.extrato.push({ tipo: 'Deposito', valor: valorDeposito, data: new Date() })
}
function Saque(loginusuario) {
    let valorSaque = guri.questionFloat('Digite o valor do saque: ')
    while (valorSaque <= 0) {
        console.log('Valor invalido, tente novamente!')
        valorSaque = guri.questionFloat('Digite o valor do saque: ')
    }
    loginusuario.saldo -= valorSaque
    console.log(`Saque de R$${valorSaque.toFixed(2)} realizado com sucesso! Novo saldo: R$${loginusuario.saldo.toFixed(2)}`)
    loginusuario.extrato.push({ tipo: 'Saque', valor: valorSaque, data: new Date() })
}

function Transferencia(loginusuario) {
    let valorTransferencia = guri.questionFloat('Digite o valor da transferencia: ')
    while (valorTransferencia <= 0) {
        console.log('Valor invalido, tente novamente!')
        valorTransferencia = guri.questionFloat('Digite o valor da transferencia: ')
    }
    ted = valorTransferencia * (taxaBanco.ted / 100)
    let totalTransferencia = valorTransferencia + ted
    let doc = valorTransferencia * (taxaBanco.doc / 100)
    let totalTransferenciaDoc = valorTransferencia + doc
    let cpfOuCnpj = guri.question('Digite o cpf ou cnpj do destinatario: ')
    let usuarioDestinatario = usuarioBanco.find(usuario => usuario.cpf === cpfOuCnpj || usuario.cnpj === cpfOuCnpj);
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
    investimento = valorInvestimento * (taxaBanco.investimento / 100)
    let totalInvestimento = valorInvestimento + investimento
}

function Extrato(loginusuario) {
    console.log('Extrato Completo')
    console.log(`Saldo atual: R$${loginusuario.saldo.toFixed(2)}`)
}

function Ajudachat() {
    let pergunta = guri.question('Digite sua pergunta: ')
    console.log('Aguarde um momento, estamos processando sua pergunta...')
    console.log('Resposta: Esta é uma resposta automatica do nu!bot. Para mais informações, entre em contato com nosso suporte.')
   
}

function Cashback() {
    let valorCashback = guri.questionFloat('Digite o valor do cashback: ')
    while (valorCashback <= 0) {
        console.log('Valor invalido, tente novamente!')
        valorCashback = guri.questionFloat('Digite o valor do cashback: ')
    }
    loginusuario.saldo += valorCashback;

}

function RecargaCelular() {
    let valorRecarga = guri.questionFloat('Digite o valor da recarga: ')
    while (valorRecarga <= 0) {
        console.log('Valor invalido, tente novamente!')
        valorRecarga = guri.questionFloat('Digite o valor da recarga: ')
    }
}

function inicializarConta(loginusuario) {
    let escolha;
    do {
        escolha = MenuPrincipal();

        switch (escolha) {
            case 1:
                Deposito(loginusuario);
                break;
            case 2:
                Saque(loginusuario);
                break;
            case 3:
                Ajudachat(loginusuario);
                break;
            case 4:
                Transferencia(loginusuario);
                break;
            case 5:
                Extrato(loginusuario);
                break;
            case 0:
                console.log('Saindo do sistema...')
                break;
        }
    } while (escolha != 0)
}

//let objeto(conta, limites, tipo, infos pessoais,).
