document.addEventListener('DOMContentLoaded', function(){
    var botoes = document.querySelectorAll('button') /// var que coleta os botoes 
    
    var botoesArr= [] /// var vazia

    botoes.forEach(function(i){
        botoesArr.push(i.textContent) /// push no texto da primeira variavel declarada
    })
        botoes.forEach(function(el){
        el.addEventListener('click', function(){ ////funcao para exibir o click do elemento
            console.log(el)
        })})
})