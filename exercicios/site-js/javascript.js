function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 6 && hora <= 11) {
        img.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18 ) {
        img.src = 'tarde.jpg'
        document.body.style.background = '#00AAF5'
    } else if (hora >= 19 && hora <= 23) {
        img.src = 'noite.jpg'
        document.body.style.background = '#530af4'
    } else {
        img.src = 'madrugada.jpg'
        document.body.style.background = 'black'
        msg.innerHTML = `Agora é ${hora}hr da madrugada` 
    }
}