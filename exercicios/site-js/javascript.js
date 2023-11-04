function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 11
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <= 12) {
        img.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 13 && hora <= 18 ) {
        img.src = 'tarde.jpg'
        document.body.style.background = '#00AAF5'
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = '#530af4'
    }

}