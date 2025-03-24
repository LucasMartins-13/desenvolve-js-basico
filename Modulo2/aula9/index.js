function diaOuNoite(hora) {
    if (hora <= 18) {
        console.log('Ta cedo')
    }
    else {
        console.log('drumi papae')
    }
}

// pode usar o return ( Lembra do python)

function noiteOuDia(hora) {
    if (hora <= 18) {
        return 'Cedin papae';
    }
    else {
        return 'drumi papae';
    }
}
// usando variaviel fica melhor
function eDediaOuEdeNoite(hora) {
    //usei let pq nao é uma variavel global, ou seja so existe/funciona na function
    let periodo = '';
    if (eDediaOuEdeNoite <= 18)
        periodo = 'Cedin Demaize pae';
    else
        periodo = 'noitinha papae';
    return periodo;
}
//SE NAO FOR VALOR NUMERICO, VAI SER RETORNADO NOITE

console.log(diaOuNoite(20)) // vai executar junto da palavra Undefained

console.log(noiteOuDia(17)) // sem a palavra undefained

diaOuNoite(50) // sem a palavbra undefained
//SE O CONSOLE.LOG ESTUVER DENTRO DA FUNCTION NAO PRECISA DE USAR CONSOLE.LOG FORA DELE

console.log(eDediaOuEdeNoite(2)) // Sem undefained
// o undefained vai ocorrer quando o console.log fica dentro da function

console.log('______________________________________');

function periodoDoDia (hora) {
    if (hora < 12) 
        console.log('Manha');
    else if (hora >= 12 && hora <= 18) //O ELIF VIRA "ELSE IF"
        console.log('Tarde');
    else (hora >= 19 && hora <= 24)
        console.log('Noite');
} 
periodoDoDia(15);

console.log('_____________________________________________');
//function com outra function

function periodoComRegra (hora) {
    if (hora >= 0 && hora <= 24) //JEITO CORRETO
        periodoDoDia(hora);
    else
        console.log('hora invalida');
}

periodoComRegra(30);
console.log('-----------------------------------------------')

function menuDeEscolha(options){
    switch(options) { //É quase igual um imput
        case 1:
            console.log('opção 1')
        break;
        case 2:
            console.log('opção 2')
        break;

        default: //FUNCIONA COMO O ELSE FUNCIONA 
            console.log('opção padrao/else')
    }
}

menuDeEscolha(1)
menuDeEscolha(456)

console.log('-----------------------------------------')
//Ternario ?????
function maiorDeIdadeSimple(idade) {
    return idade > 18 ? 'Maior de iade' : 'Menor de Idade'; // o "?" funciona como o If funciona
    // o ":" funciona exatamente como o else funciona
 }

function maiorDeIdadeSimpleComLet(idade) {
    let condicaoIdade = idade >= 18 ? 'Maior de Idade' : 'Menor De idade';
    return condicaoIdade
    // o "?" funciona como o If funciona
    // o ":" funciona exatamente como o else funciona
}

console.log(maiorDeIdadeSimple(30))
console.log(maiorDeIdadeSimpleComLet(50))

console.log('--------------------------------------------')

//unario
function maiorDeIdadeUnario(idade) {
    return idade >= 18 && 'Maior de Idade'

    // nao tem o caso do IF, não há verificacao de um caso contrario (POR ISSO É UNARIO)
}
console.log(maiorDeIdadeUnario(22))
console.log(maiorDeIdadeUnario(1)) // como nao há chegagem entao da FALSE
console.log('__________________________________________')

function maiorDeIdadeCondition(idade) {
    return idade >= 18
}
console.log(maiorDeIdadeCondition(30))
console.log(maiorDeIdadeCondition(15))
// RETORNA VALORES BOOLEANOS