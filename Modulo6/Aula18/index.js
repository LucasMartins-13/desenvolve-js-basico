alert('Deu')

const existeElemento = (seletor) => {
    const elemento = document.querySelector(seletor)
    if (elemento) {
        alert(`${seletor} existe`)
    } else {
        alert(`${seletor} nao existe`)
    }
}
existeElemento('#section-Principal')

const todoElementos = (allSeletor) => {
    const allElementos = document.querySelectorAll(allSeletor)
    if (allElementos) {
        alert(`${allSeletor} `)
    } else {
        alert(`${allSeletor}`)
    }
}
todoElementos('paragrafo')

const contagemElementos = (seletor) => {
    if (existeElemento(seletor)) {
        const todosElementos = document.querySelectorAll(seletor)
        console.log(`existem ${todoElementos.length} do seletor ${seletor}`)
    } else {
        console.log(`Nao existem ${todoElementos.length} do seletor ${seletor}`)
    }
}
contagemElementos('li')

//const paragrafo = document.querySelectorAll('p')
//alert(paragrafo)
// QuerySelector busca as tag do html
const header = document.querySelector('header')
const nav = document.querySelector('nav')
const aside = document.querySelector('aside')
const section = document.querySelector('section')

// alert(header)