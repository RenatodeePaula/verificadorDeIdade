function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var digiAno = document.getElementById('age')
    var result = document.getElementById('res')
    var difer = ano - Number(digiAno.value)
    var pegsex = document.getElementsByName('radsex') 
    var genero = ''
    if (pegsex[0].checked) {
        genero = "masculino"
    } else if (pegsex[1].checked){
        genero = 'feminino'
    }     

    if(digiAno.value.length < 4 || digiAno.value > ano) {
        alert('[ERRO] Verifique o ano digitado e tente novamente!')

    } else if( difer <= 11 && genero == 'feminino' ) {         
        result.innerHTML = '<div id="img">  <p> Criança menina detectada!</p><img id="imagem" src="./assets/bebe-femin.jpg" alt=""></div>'

    }else if (difer <= 11 && genero == 'masculino'){
        result.innerHTML = '<div id="img">  <p> Criança menino detectado!</p><img id="imagem" src="./assets/bebe-masc.jpg" alt=""></div>'

    }else if ( difer >= 12 &&  difer <= 20 && genero == "feminino"){
        result.innerHTML = '<div id="img">  <p> Mulher jovem detectada!</p><img id="imagem" src="./assets/jovem-femin.jpg" alt=""></div>'
    } else if ( difer >= 12 &&  difer <= 20 && genero == "masculino"){
        result.innerHTML = '<div id="img">  <p> Homem jovem detectado!</p><img id="imagem" src="./assets/jovem-masc.jpg" alt=""></div>'
    
    } else if ( difer >= 21 && difer <= 60 && genero == 'feminino') {
        result.innerHTML = '<div id="img">  <p> Mulher adulta detectada!</p><img id="imagem" src="./assets/adulto-femin.jpg" alt=""></div>'
    
    } else if ( difer >= 21 && difer <= 60 && genero == 'masculino') {
        result.innerHTML = '<div id="img">  <p> Homem adulto detectado!</p><img id="imagem" src="./assets/adulto-masc.jpg" alt=""></div>'
    
    } else if ( difer >= 61 && difer <= 130 && genero == 'feminino') {
        result.innerHTML = '<div id="img">  <p> Mulher idosa detectada!</p><img id="imagem" src="./assets/idoso-femin.jpg" alt=""></div>'
    
    } else if ( difer >= 61 && difer <= 130 && genero == 'masculino') {
        result.innerHTML = '<div id="img">  <p> Homem idoso detectado!</p><img id="imagem" src="./assets/idoso-masc.jpg" alt=""></div>'
    } else { 
        alert('[ERRO] Verifique o ano digitado e tente novamente!')

    }
    
}