function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 18
        msg.innerHTML = `Agora são ${hora} horas!`
        msg.style.padding = '30px'
        if (hora >= 6 && hora <= 11) {
            img.src = 'foto-manha.jpg'
            document.body.style.background = '#FAFAD2'
        } else if (hora >= 12 && hora <= 17) {
            img.src = 'foto-tarde.jpg'
            document.body.style.background = '#6495ED'
        } else if (hora == 18) {
            img.src = 'final-tarde.jpg'
            document.body.style.background = '#F4A460'
        } else if (hora >= 19 && hora <= 23) {
            img.src = 'foto-noite.jpg'
            document.body.style.background = 'darkgray'
        } else {
            img.src = 'madrugada.jpg'
            document.body.style.background = '#000000'
        }
            
        
}