const euMesmo = { // o OBJ tbm é uma lista,
    //É indexado, ou seja da pra chamar o valor pelo nome e nao pela posição
    nome: 'Lucas',
    sobrenome: 'Martins',
    idade: 18,
    morada: 'Brasil',
    moraNoBrasil: true
}

console.log(euMesmo) //chamo o onj inteiro 
console.log(euMesmo.nome)// chamo só a parte que eu quero
console.log(euMesmo['nome'])//com os colchetes da pra colocar o nome da variavel que ta dentro do obj e 
// chamar ela

function retornaDadoPessoal(dadoPessoal) {
    return euMesmo [dadoPessoal]; //vai retorna o obj
}
console.log(retornaDadoPessoal('morada'))//retorna a variavel do obj

console.log(retornaDadoPessoal('mAAAAAA')) //undefined: nao foi declarada

