let rl = require('readline-sync');

// Criação de usuário base para testes
function criarUsuarioBase(){
    usuarios.push(
        {
            nomeCompleto: "Lucas Eduardo Sasse",
            telefone: "(47)99612-7204",
            cpf: "08471011189",
            cnpj: null,
            enderecoCompleto: {
                cep: "89253500",
                estado: "SC",
                cidade: "Jaragua do Sul",
                bairro: "Centro",
                rua: "dos Bobos",
                numero: "0",
                complemento: "ap. 1050"
            },
            dataNascimento: new Date('1997-12-18'),
            dadosResponsavel: {
                nomeCompleto: null,
                telefone: null,
                enderecoCompleto: {
                    cep: null,
                    estado: null,
                    cidade: null,
                    bairro: null,
                    rua: null,
                    numero: null,
                    complemento: null,
                },
                parentalidade: null
            },
            dependentes: null,
            depositoInicial: 5250.00
        }
    )
}

// Cadastro de novo usuário
function cadastro(){
    criarUsuarioBase()
    console.log(`Usuario ${usuarios[usuarios.length-1].nomeCompleto} Cadastrado!\n`)
    exibirDadosUsuario(usuarios[usuarios.length-1].cpf)
}

// Exibir todos os dados do usuário desejado, via cpf ou cnpj passado
function exibirDadosUsuario(cpfOuCnpj){
    for(let i = 0; i < usuarios.length; i++){
        if (cpfOuCnpj == usuarios[i].cpf || cpfOuCnpj == usuarios[i].cnpj){
            console.log("Dados do Usuario: ", usuarios[i])
        } else{
            console.log(`Usuario de cpf ou cnpj ${cpfOuCnpj} nao encontrado.`);
        }
    }
}

// Exibição do menu inicial, retornando a opcao selecionada
function exibirMenuInicial(){
    console.log(`
    ===========================
      BEM VINDO AO BANCO INDO
    ===========================
      Selecione uma das opcoes:
      1 - Acessar Conta
      2 - Criar Conta
      0 - Sair
    `);
    return escolhaDeValor(0, 2)
}

// Exibição do menu principal do banco, retornando a opcao selecionada
function exibirMenuPrincipal(){
    console.log(`
    ===========================
      BEM VINDO AO BANCO INDO
    ===========================
      Selecione uma das opções:
      1 - Realizar Deposito
      2 - Realizar Saque
      3 - Realizar Transferencia
      4 - Exibir Extrato Completo
      0 - Sair
    `);
    return escolhaDeValor(0, 4)
}

// Validacao de escolha do usuario, esperando os valores minimo e maximo do menu,
// e o valor digitado pelo usuário
function validarEscolha(numMin, numMax, valorEscolhido){
    if(valorEscolhido < numMin || valorEscolhido > numMax) return true
    return false
}

// Questiona opcao de valor para o usuario, recebendo os valores minimo e maximo
// chama a validacao de valor digitado
// retorna o valor quando valido
function escolhaDeValor(numMin, numMax){
    let opcao = rl.questionInt()
    while(validarEscolha(numMin, numMax, opcao)){
        console.log("\nValor invalido, tente novamente");
        opcao = rl.questionInt("Opcao: ")
    }
    return opcao
}

// Variáveis Globais
let usuarios = []
let taxasPadrao = {
    ted: 10.0,
    doc: 15.0,
    investimentoVariavelPorcentagem: 0.02,
    multaAtrasoCartaoCredito: 10.0,
    jurosMensalAtrasoCartaoCreditoPorcentagem: 2.0
}

inicializar()

function inicializar(){
    opcaoInicialSelecionada = exibirMenuInicial()
    do{
        switch(opcaoInicialSelecionada){
            case 1:
                exibirMenuPrincipal()
                break
            case 2:
                cadastro()
                break
            case 0:
                console.log("Saindo...");
                break
        }
    }while(opcaoInicialSelecionada != 0)
}