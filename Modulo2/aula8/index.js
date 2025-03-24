const todoMundoVe = 'Todos veem essa variavel de escopo global'

function executaEscopoGlobal() {
    console.log(todoMundoVe)
}

function executaEscopoLocal() {
    const visivelEmEscopoLocal = 'Só sou visivel em escopo local, afinal estou dentro do bloco da função'
    console.log(visivelEmEscopoLocal)

    function chamaDentroDoEscopo() {
        console.log('Dentro do escopo ::', visivelEmEscopoLocal)
    }

    chamaDentroDoEscopo() //essa função pode ser executada dentro da function acima 
}

executaEscopoGlobal()
executaEscopoLocal()

//console.log(visivelEmEscopoLocal) // nao vai ser possuivel vela pq há limitação de escopo

//chamaDentroDoEscopo()