function tocheck() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
            if (fano.value.length == 0 || Number(fano.value) > ano) {
            window.alert('[ERRO] Verifique os dados e tente novamente!')
        } else {
            var fsex = document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var img = document.createElement('img')
            var genero = ''
                if (fsex [0].checked) {
                    genero = 'Homem'
                    if (idade >= 0 && idade < 3) {
                        img.setAttribute('src','bebe-h.jpg')
                    } else if (idade < 11) {
                        img.setAttribute('src', 'crianca-h.jpg')   
                    } else if (idade < 18) {
                        img.setAttribute('src', 'jovem-m.jpg')
                    } else if (idade < 25) {
                        img.setAttribute('src', 'longevo-h.jpg')
                    } else if (idade < 35) {
                        img.setAttribute('src', 'adulto-h.jpg')
                    } else if (idade < 45) {
                        img.setAttribute('src', 'homem-40.jpg')
                    } else if (idade <= 65) {
                        img.setAttribute('src', 'homem-60.jpg')
                    } else {
                        img.setAttribute('src', 'homem-70.jpg')
                    }
                } else if ( fsex [1].checked) {
                    genero = 'Mulher'
                        if (idade >= 0 && idade < 3) {
                            img.setAttribute('src', 'bebe-f.jpg')
                        } else if (idade < 11) {
                            img.setAttribute('src', 'crianca-f.jpg')
                        } else if (idade < 18) {
                            img.setAttribute('src', 'jovem-f.jpg')
                        } else if (idade < 25) {
                            img.setAttribute('src', 'longevo-f.jpg')
                        } else if (idade < 35) {
                            img.setAttribute ('src', 'adulto-f.jpg')
                        } else if (idade < 45) {
                            img.setAttribute('src',  'mulher-40.jpg')
                        } else if (idade <= 65) {
                            img.setAttribute('src' , 'mulher-60.jpg')
                        } else {
                            img.setAttribute ('src', 'mulher-70.jpg')
                        }      
                }        
        }
            res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
            res.appendChild(img)
            img.style.margin = '30px'
            img.setAttribute('id', 'foto')
}

