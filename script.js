function exibir(){
    var numero = window.document.getElementById('txtnum')
    var resultado = window.document.getElementById('resultado')
    var person = window.document.getElementById('personagem')
    var caract = window.document.getElementById('caracteristica')
    var num = Number(numero.value)
    if(num == 0){
        window.alert("Por favor, digite um número entre 1 e 4")
    }else {
        var personagem = ''
        var caracteristica = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(num == 1){
            personagem = 'Bulbasaur'
            caracteristica = 'Seus olhos são de um vermelho brilhante. É reconhecido pelo bulbo em suas costas.'
            img.setAttribute('src', 'imagens/bulbasaur.png')
        }else if(num == 2){
            personagem = 'Charmander'
            caracteristica = 'É especie de uma lagartixa, tem cor avermelhada e é tipo fogo'
            img.setAttribute('src', 'imagens/charmander.png')
        }else if(num == 3){
            personagem = 'Pikachu'
            caracteristica = 'É uma espécie de rato, sua cor é amarela e possui eletricidade em suas bochechas'
            img.setAttribute('src', 'imagens/pikachu.png')
        }else if(num == 4){
            personagem = 'Squirtle'
            caracteristica = 'É uma espécie de tartaruga, sua cor é azul e é do tipo água'
            img.setAttribute('src', 'imagens/squirtle.png')
        }else{
            alert("[ERRO] Digite um número entre 1 e 4")
        }
    }
    // resultado.style.textAlign = 'center'
    resultado.innerHTML = `Você tirou: ${personagem}<br>`
    caract.innerHTML = `Características: ${caracteristica}`
    person.appendChild(img)
    // document.location.reload(false, 5000);
}

