
// alert('Deu')

// const existeElemento = (seletor) => {
//     const elemento = document.querySelector(seletor)
//     if (elemento) {
//         alert(`${seletor} existe`)
//     } else {
//         alert(`${seletor} nao existe`)
//     }
// }
// existeElemento('#section-Principal')

// const todoElementos = (allSeletor) => {
//     const allElementos = document.querySelectorAll(allSeletor)
//     if (allElementos) {
//         alert(`${allSeletor} `)
//     } else {
//         alert(`${allSeletor}`)
//     }
// }
// todoElementos('paragrafo')

// const contagemElementos = (seletor) => {
//     if (existeElemento(seletor)) {
//         const todosElementos = document.querySelectorAll(seletor)
//         console.log(`existem ${todoElementos.length} do seletor ${seletor}`)
//     } else {
//         console.log(`Nao existem ${todoElementos.length} do seletor ${seletor}`)
//     }
// }
// contagemElementos('li')

// //const paragrafo = document.querySelectorAll('p')
// //alert(paragrafo)
// // QuerySelector busca as tag do html
// const header = document.querySelector('header')
// const nav = document.querySelector('nav')
// const aside = document.querySelector('aside')
// const section = document.querySelector('section')

// // alert(header)

const elemento = document.getElementsByTagName('header');
console.log(elemento)

//const elementoPorId = document.getElementsById('Titulo-Principal')
//console.log(elementoPorId)

const elementoPorClasse = document.getElementsByClassName('paragrafo')
console.log(elementoPorClasse[0].innerText)

//const elementoPorNome = document.getElementsByName('')
//console.log(elementoPorNome[0].innerText)


const verificaElementTag = (elemento) => {
    const elementotag = document.getElementsByTagName(elemento)
    if (elementotag) {
        alert('AAAAAAAAAAAAAAAA')
    } else {
        alert('nao tem nada mano')
    }
}
const verificaElementClass= (elemento) => {
    const elementoClass = document.getElementsByTagName(elemento)
    if (elementotag) {
        alert('AAAAAAAAAAAAAAAA')
    } else {
        alert('nao tem nada mano')
    }
}
const verificaElementId = (elemento) => {
    const elementoId = document.getElementsByTagName(elemento)
    if (elementotag) {
        alert('AAAAAAAAAAAAAAAA')
    } else {
        alert('nao tem nada mano')
    }
}
const listadeElementos =  ['header', 'main','Titulo-Principal']

const descobreElementoLista = (lista) =>{
    if (listadeElementos.length == 0) {
        console.log('tem nada')
    } else{
        for (let nome of lista) {
            if (verificaElementClass(nome)) {
                alert('AAAAA')
            }
            else if (verificaElementClass(nome)) {
                alert('BBBBBBBBBBBB')
            }
            else if (verificaElementId(nome)) {
                alert('CCCCCCCCCCC')
            }
            else {
                alert('DDDDDDDDD')
            }
        }
    }
}

descobreElementoLista(listadeElementos)
