const fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34] // Sequencia fibonacci até o 34


for(let i = 0; i <= fibonacci.length; i++) { 
    //Define i / depois dis que se i for menor que a length de fibonacci
    // entao é adicionado mais 1 para i
    //ou seja esse laço vai continuar rodando até que o i nao seje menor que fibonacci

    //console.log(fibonacci[i]) 

    console.log(`${i+1}º item:`, fibonacci[i]); 
    // USEI CRASE NO LUGAR DAS ASPAS PARA  AVARIAVEL FUNCIONAR com STR

}
console.log('_____________________________________')
// da pra usar com function
function variavelComFibonacci () {
    for(let i = 0; i <= fibonacci.length; i++) { 
        console.log(`${i+1}º item:`, fibonacci[i]);  
    }
}
variavelComFibonacci()
console.log('_____________________________________')

function conteAte (numero) { //Nao precisa estar conectado a um array
    for (let i = 0; i <= numero; i++) {
        console.log(i)
    }
}
conteAte(15)
console.log('_____________________________________')

function veArray (listaNumeros) {
    for (let item of listaNumeros) {
        console.log(item)
    }
}//BASICAMENTE UM CONSOLE.LOG
veArray(fibonacci)
console.log('_____________________________________')
function vendoArray (listaNn) {
    for (let item in listaNn) {
        console.log(item)
    }
}
vendoArray(fibonacci)
console.log('_____________________________________')
//Dowhile

function continha (numeroFinal) {
    let numero = 0;
    do {
        numero++
        console.log(numero)
    } while(numero <= numeroFinal) // o while fica estranhaço aqui
    // a condicion do while fica no final 
    // o "Do", do while contem oq sera feito no while

}
continha(10)
console.log('_____________________________________')

function verificaSePodeWhile(numeroLimite) {
    let numero = 0;
    while(numero <= numeroLimite) {
        console.log(numero)
        numero++
    }
    //While parecido com python, ficou mais facil de entender
}

verificaSePodeWhile(17)