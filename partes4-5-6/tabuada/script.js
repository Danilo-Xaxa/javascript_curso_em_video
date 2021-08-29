function gerar() {
    let num = document.querySelector("input#num").value
    let div2 = document.getElementById("div2")
    let msg = document.querySelector("p#msg")

    if (num.length == 0) {
        msg.innerHTML = 'Digite pelo menos algum número'
        return
    } else {
        num = Number(num)
    }

    div2.innerHTML = ''
    msg.innerHTML = ''

    if (num == 0) {
        msg.innerHTML = 'A tabuada do 0 é muito empolgante, escolha outro número'
    } else {
        for (var i = 1; i <= 10; i++) {
            div2.innerHTML += `<p>${num} X ${i} = ${num * i}</p>`
        }
    }
}
