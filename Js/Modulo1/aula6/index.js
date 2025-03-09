function chamaPrimeiro() {
    console.log('chama essa primeiro');
}

function chamaDepois() {
    console.log('entrou na segunda funcao')
    chamaPrimeiro();
}
// Call Back == uma função chamando outra função
//chamaDepois()


//function recebePrimeia(pimeiraFuncao) {
//    primeiraFuncao()
//}

//recebePrimeira(chamaDepois)

function soma() {
    let lucas = 95+43
    var pedro = 18+58
    console.log(lucas / pedro)
}

soma()