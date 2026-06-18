//=================================================================
//                    BANCO MONETARIO - AVALIATIVO
//=================================================================
// Desenvolver um sistema de banco monetario

let guri = require('readline-sync');

console.log('SEJAM BEM-VINDOS AO NU!ZE O SEU BANCO DIGITAL!!!');

/*let usuarioBanco = {
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
//function usuario() {}

function cadastro(){
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

cadastro()
//function Acesso()
//function Menu()
//function Notificacoes()
//function Deposito()
//function Saque()
//function Transferencia PIX/TED/DOC()
//function Emprestimo()
//function Investimento()
//function Extrato()
//function Ajudachat()
//function Cashback()
//function RecargaCelular()

//let objeto(conta, limites, tipo, infos pessoais,)
