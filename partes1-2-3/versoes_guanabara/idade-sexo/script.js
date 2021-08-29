function verificar() {
    let data = new Date()
    let ano_atual = data.getFullYear()
    let ano_form = document.querySelector('input#txtano')
    let res = document.querySelector('div#res')

    if (ano_form.value.length < 4 || Number(ano_form.value) > ano_atual) {
        window.alert('ERRO! Digite um ano de nascimento válido.')
    } else {
        let sexo_form = document.getElementsByName('radsex')
        let idade = ano_atual - Number(ano_form.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo_form[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 15) {
                img.setAttribute('src', 'imagens/foto-bebe-m.png')
            } else if (idade < 30) {
                img.setAttribute('src', 'imagens/foto-jovem-m.png')
            } else if (idade < 55) {
                img.setAttribute('src', 'imagens/foto-adulto-m.png')
            } else {
                img.setAttribute('src', 'imagens/foto-idoso-m.png')
            }
        } else if (sexo_form[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 15) {
                img.setAttribute('src', 'imagens/foto-bebe-f.png')
            } else if (idade < 30) {
                img.setAttribute('src', 'imagens/foto-jovem-f.png')
            }  else if (idade < 55) {
                img.setAttribute('src', 'imagens/foto-adulto-f.png')
            } else {
                img.setAttribute('src', 'imagens/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
