//soma
function somaNn(a, b){
    return a + b
}
//subtração
function subNn(a, b){
    return a - b
}
//multiplicação
function multiNn(a, b){
    return a * b
}
//dividir
function divNn(a, b){
    return a / b 
}

//mostra resultado
function mostraResultado (num1, num2){
    console.log('Soma entre ${num1} e ${num2} =', somaNn(num1, num2));
    console.log('Subtração entre ${num1} e ${num2} =', subNn(num1, num2));
    console.log('Multiplicação entre ${num1} e ${num2} =', multiNn(num1, num2));
    console.log('Divisão entre ${num1} e ${num2} =', divNn(num1, num2));
}

mostraResultado(10, 50)