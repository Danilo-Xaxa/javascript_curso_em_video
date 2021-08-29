function contar() {
    // qualquer valor não inputado será automaticamente 0, mas é fácil mudar isso
    let valorInicio = Number(document.querySelector("input#inicio").value)
    let valorFim = Number(document.querySelector("input#fim").value)
    let valorPasso = Number(document.querySelector("input#passo").value)
    let contagem = document.querySelector("p#contagem")
    
    contagem.innerHTML = 'Contando: '

    if (valorPasso <= 0) {
        contagem.innerHTML = 'ERRO! Digite um valor positivo para o passo'
    } else {
        if (valorInicio < valorFim) {
            for (let i = valorInicio; i <= valorFim; i += valorPasso) {
                contagem.innerHTML += i
                contagem.innerHTML += '&#x27A1' // ou `\u{27A1}`
            }
            contagem.innerHTML += '&#x1F3C1'
        } else if (valorInicio > valorFim) {
            for (let i = valorInicio; i >= valorFim; i -= valorPasso) {
                contagem.innerHTML += i
                contagem.innerHTML += '&#x27A1'
            }   
            contagem.innerHTML += '&#x1F3C1'
        } else {
            contagem.innerHTML = 'ERRO! Digite números diferentes no início e fim'
        }
    }
}
