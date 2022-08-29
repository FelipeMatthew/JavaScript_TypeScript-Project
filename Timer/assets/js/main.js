(function(){
    'use strict';
    
    const $relogio = document.querySelector('.relogio');
    const $iniciar = document.querySelector('.iniciar');
    const $pausar = document.querySelector('.pausar');
    const $zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;


    document.addEventListener('click', (e) => {
        // Essa função vai realizar uma redução
        // nos codigos, pois nao precisa adicionar evento de click
        // em todos os botoes;
        const elemento = e.target;

        if(elemento.classList.contains('iniciar')){
            $relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciarRelogio();
        }

        if(elemento.classList.contains('pausar')){
            $relogio.classList.add('pausado');
            clearInterval(timer);
        }

        if(elemento.classList.contains('zerar')){
            $relogio.classList.remove('pausado');
            clearInterval(timer);
            $relogio.innerHTML = '00:00:00';
            segundos = 0;
        }


    })

    // Essa função vai retornar a hora formatada ja
    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
          hour12: false,
          timeZone: 'UTC'
        });
      }

    function iniciarRelogio(){
        timer = setInterval(function(){
            segundos++;
            $relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }

})()