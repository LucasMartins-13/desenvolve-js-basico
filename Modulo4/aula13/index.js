const euMesmo = { // o OBJ tbm é uma lista,
    //É indexado, ou seja da pra chamar o valor pelo nome e nao pela posição
    nome: 'Lucas',
    sobrenome: 'Martins',
    idade: 18,
    morada: 'Brasil',
    moraNoBrasil: true,
    arrowFunction: () => {
        console.log('CPF; 12345678900')
    }
}

function objetoPossuiValor(valorDaChave) {
    const valoresDoObjeto = Object.values(euMesmo) //Function para transforma o obj num array
    console.log(valoresDoObjeto)
}
objetoPossuiValor()

function objetoPossuiValor(valorDaChave) {
    const valoresDoObjeto = Object.values(euMesmo)
    return valoresDoObjeto.includes(valorDaChave) // verifica se dentro do array tem o valor do obj
}
console.log(objetoPossuiValor('nome'))//ele nao encontra o "nome:"
console.log(objetoPossuiValor('Lucas'))// e sim qual o "nome" == Lucas


function objetoValorKeys(valorDaChave) {
    const valoresDoObjeto = Object.keys(euMesmo)
    return valoresDoObjeto.includes(valorDaChave) //nao retorna a variavel em si, retorna o nome da variavel 
}
console.log(objetoValorKeys('nome'))


euMesmo.arrowFunction() // Executa a função que esta dentor do OBJ
//parecido com o de baixo
console.log('CPF; 12345678900')


//console
console.error('FERROU')
console.info('aaa importanteeeee')
console.warn('ATENCAO A TODES')