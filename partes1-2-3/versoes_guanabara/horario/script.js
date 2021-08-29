function carregar() {
    let msg = document.querySelector("div#msg")
    let foto = document.querySelector("img#foto")
    let titulo = document.querySelector("h1#titulo")

    let agora = new Date()
    let hora = agora.getHours()
    let minuto = agora.getMinutes()

    hora = String(hora).length == 1? '0' + hora : hora
    minuto = String(minuto).length == 1? '0' + minuto : minuto

    msg.innerHTML = `<p>Agora são ${hora}:${minuto}</p>`

    let meuFavicon = 'favicons/favicon-madrugada.ico'

    if (hora < 12) {
        document.body.style.background = 'rgb(112, 168, 187)'
        foto.src = 'imagens/manha.png'
        foto.alt = 'foto de manhã'
        titulo.innerText = 'Bom dia!'
        meuFavicon = 'favicons/favicon-manha.ico'
    } else if (hora < 18) {
        document.body.style.background = 'orange'
        foto.src = 'imagens/tarde.png'
        foto.alt = 'foto de tarde'
        titulo.innerText = 'Boa tarde!'
        meuFavicon = 'favicons/favicon-tarde.ico'
    } else if (hora < 24) {
        document.body.style.background = 'purple'
        foto.src = 'imagens/noite.png'
        foto.alt = 'foto de noite'
        titulo.innerText = 'Boa noite!'
        meuFavicon = 'favicons/favicon-noite.ico'
    }

    (function() {
        var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = meuFavicon;
        document.getElementsByTagName('head')[0].appendChild(link);
    })();
}
