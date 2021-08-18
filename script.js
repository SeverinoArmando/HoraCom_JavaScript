function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    var data = new Date()

    // var hora = data.getHours()
    var hora = 18

    msg.innerHTML = `<p id='txt-inicial'>Agora são ${hora} horas</p>`

    if(hora >=0 && hora < 12){
        msg.innerHTML +=`<strong>BOM DIA!</strong>`
        //BOM DIA
        img.src ='_imagem/dia.jpg'
        document.body.style.background ='rgba(214, 166, 127, 0.438)'
    }else if(hora >=12 && hora<18){

        //BOA TARDE
        msg.innerHTML +=`<strong>BOA TARDE!</strong>`
        img.src ='_imagem/tarde.jpg'
        document.body.style.background = 'rgba(231, 140, 65, 0.699)'
    }else{
        //BOA NOITE
        msg.innerHTML +=`<strong>BOA NOITE!</strong>`
        img.src ='_imagem/noite.jpg'
        document.body.style.background = 'rgba(58, 54, 51, 0.726)'
    }
}
