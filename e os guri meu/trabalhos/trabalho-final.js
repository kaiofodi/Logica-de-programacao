//=================================================================
//                    EMPRESA DE CONSULTORIA - AVALIATIVO
//=================================================================
// Desenvolver um sistema para uma empresa de consultoria, para facilitar ao usuario
// que cadastre, consulte, edite, exclua ou filtre alguma tarefa que deseje.
// Desenvolvido por Kaio

let guri = require('readline-sync');


function menuPrincipal(){
    console.log(`
    =======================
        MENU PRINCIPAL
    =======================
    1 - Adicionar item
    2 - Visualizar lista
    3 - Visualizar item
    4 - Editar
    5 - Excluir
    6 - Filtrar
    0 - Encerrar`)
    
    return opcaoDesejada(0, 5)
}
function Validar(min, max, valor){
    if (valor < min || valor > max) return true
    return false
}

function opcaoDesejada(min, max, valor){
    valor = guri.questionInt('Digite a opcao desejada: ')
    while (Validar(min, max, valor)) {
        console.log('Valor invalido, tente novamente!')
        valor = guri.questionInt('Digite a opcao desejada: ')
    }
    return valor
}

menuPrincipal()

inicio()

function inicio(){
    let escolha
    do{
        escolha = menuPrincipal()

        switch(escolha) {
            case 1:
                adicionar()
                console.log('Adicionar item');
                break;
            case 2:
                visualizarLista()
                console.log('Visualizar lista');
                break;
            case 3:
                visualizarItem()
                console.log('Visualizar item');
                break;
            case 4:
                editar()
                console.log('Editar');
            case 5:
                excluir()
                console.log('Excluir');
                break;
            case 6:
                filtrar()
                console.log('Filtrar');
                break;
            case 0:
                console.log('Encerrando programa');
                break;        
        }
    } while (escolha != 0)
}
/*
function adicionar()
function visualizarLista()
function visualizarItem()
function editar()
function excluir()
function filtrar()
function encerrar()
*/