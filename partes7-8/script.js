let arranjo = []
let div2 = document.querySelector('div#div2')

function adicionar() {
    let num = document.querySelector('input#adnum').value
    let sel = document.querySelector('select#numeros')

    if (num.length == 0 || num <= 0 || num > 100 || arranjo.includes(Number(num))) {
        modoDeUsar()
        return
    } else {
        num = Number(num)
        arranjo.push(num)
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado`
        sel.appendChild(item)
    }

    div2.innerHTML = ''
}

function finalizar() {
    if (arranjo.length == 0) {
        modoDeUsar()
        return
    } else {
        div2.innerHTML = `<p>Ao todo, temos ${arranjo.length} números adicionados</p>`
        div2.innerHTML += `<p>O maior valor adicionado foi ${Math.max(...arranjo)}</p>`
        div2.innerHTML += `<p>O menor valor adicionado foi ${Math.min(...arranjo)}</p>`
        div2.innerHTML += `<p>Somando todos os valores, temos ${soma(arranjo)}</p>`
        div2.innerHTML += `<p>A média entre os valores adicionados é de ${soma(arranjo) / arranjo.length}</p>`
    }
}

function modoDeUsar() {
    let p1 = document.querySelector('p#p1')
    p1.style.color = 'red'
    setTimeout(function() {p1.style.color = 'black'}, 300); 
}

function soma(vetor) {
    let acumulador = 0
    for (let i in vetor) {
        acumulador += vetor[i]
    }
    return acumulador
}
