function contar () {
    let start = document.querySelector('input#txti') 
    let end = document.querySelector('input#txtf')
    let step = document.querySelector('input#txtp')
    let res = document.querySelector('div#res')

    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        let inicio = Number(start.value)
        let fim = Number(end.value)
        let passo = Number(step.value)
        if (inicio < fim) {
            for(let c = inicio; c <= fim; c += passo) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for(let c = inicio; c >= fim; c -= passo) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3F4}`     
    }
}

function limpar() {
    let res = document.getElementById('res')
    res.innerHTML = 'Preparando Contagem....'
}
