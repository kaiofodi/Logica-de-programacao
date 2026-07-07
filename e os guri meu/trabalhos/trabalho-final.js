//=================================================================
//                    EMPRESA DE CONSULTORIA - AVALIATIVO
//=================================================================
// Desenvolver um sistema para uma empresa de consultoria, para facilitar ao usuario
// que cadastre, consulte, edite, exclua ou filtre alguma tarefa que deseje.
// Desenvolvido por Kaio

let guri = require('readline-sync');

let tarefas = []

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
    
    return opcaoDesejada(0, 6)
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


inicio()

function inicio(){
    let escolha
    do{
        escolha = menuPrincipal()

        switch(escolha) {
            case 1:
                adicionar(tarefas)
                console.log('Adicionar item');
                break;
            case 2:
                visualizarLista(tarefas)
                console.log('Visualizar lista');
                break;
            case 3:
                visualizarItem(tarefas)
                console.log('Visualizar item');
                break;
            case 4:
                editar(tarefas)
                console.log('Editar');
                break;
            case 5:
                excluir(tarefas)
                console.log('Excluir');
                break;
            case 6:
                filtrar(tarefas)
                console.log('Filtrar');
                break;
            case 0:
                console.log('Encerrando programa');
                break;        
        }
    } while (escolha != 0)
}
// Funções do menu principal


// Funçao de adicionar item

function adicionar(tarefas) {
    let titulo = guri.question('Digite o titulo da tarefa: ')
    let descricao = guri.question('Digite a descricao da tarefa: ')
    tarefas.push({ 
        titulo: titulo, 
        descricao: descricao })
    console.log('Item adicionado com sucesso!')
    if(titulo == "" || descricao == ""){
    console.log("Preencha todos os campos!")
    return
}
}

// Funçao de visualizar lista de tarefas

function visualizarLista(tarefas) {
    for (let i = 0; i < tarefas.length; i++) {
        console.log('Item: ' + tarefas[i].titulo)
        console.log('Descrição: ' + tarefas[i].descricao)
    }
}

// Funçao de visualizar item especifico

function visualizarItem(tarefas) {
    let item = guri.question('Digite o titulo da tarefa que deseja visualizar: ')
    let tarefa = tarefas.find(t => t.titulo === item)
    if (tarefa) {
        console.log('Tarefa encontrada: ' + item)
        console.log('Descrição: ' + tarefa.descricao)
    } else {
        console.log('Tarefa não encontrada.')
    }
}

// Funçao de editar item especifico

function editar(tarefas) {
     let opcao = guri.questionInt(
        "1 - Editar titulo\n2 - Editar descricao\n"
    )
    let item = guri.question("Digite o titulo da tarefa que deseja editar: ")
    let tarefa = tarefas.find(t => t.titulo === item)
    if (!tarefa) {
        console.log("Tarefa não encontrada.")
        return
    }
    if (opcao === 1) {
        let novoTitulo = guri.question("Digite o novo titulo: ")
        tarefa.titulo = novoTitulo
    } else if (opcao === 2) {
        let novaDescricao = guri.question("Digite a nova descricao: ")
        tarefa.descricao = novaDescricao
    } else {
        console.log("Opcao invalida.")
    }
}
// Funçao de excluir item especifico

function excluir(tarefas) {
    let item = guri.question('Digite o titulo da tarefa que deseja excluir: ')
    let tarefa = tarefas.find(t => t.titulo === item)
    if (tarefa) {
        let index = tarefas.indexOf(tarefa)
        tarefas.splice(index, 1)
        console.log('Tarefa excluida com sucesso!')
    } else {
        console.log('Tarefa não encontrada.')
    }
}
// Funçao de filtrar item especifico

function filtrar(tarefas) {
    let filtro = guri.question('Digite o filtro: ')
    let itensFiltrados = tarefas.filter(item =>
        item.includes(filtro)
    )
    console.log(itensFiltrados.join('\n'))
}
