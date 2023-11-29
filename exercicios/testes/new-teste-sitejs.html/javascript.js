function carregar() { 
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`
        
    if (hora >= 6 && hora <= 11) {
        img.src = 'manha.jpg'
        document.body.style.background='#EEE8AA'
    } else if ( hora >= 12 && hora <= 17) {
        img.src = 'tarde.jpg'
        document.style.background = '#00BFFF'
    } else if (hora == 18) {
        img.src = 'final-tarde.jpg'
        document.body.style.background = '#DAA520'
    } else if (hora >= 19 && hora <= 23) {
        img.src = 'noite.jpg'
        document.body.style.background = '#00008B'
    } else {
        img.src = 'madrugada.jpg'
        document.body.style.background = 'black'
        msg.innerHTML = `Agora são ${hora}hr da madrugada.`
    }
}
