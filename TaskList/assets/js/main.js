(function(){
    'use strict';
    const $inputTarefa = document.querySelector('.input-nova-tarefa');
    const $btnTarefa = document.querySelector('.btn-tarefa');
    const $tarefas = document.querySelector('.tarefas')

    document.addEventListener('click', (e) => {
        const getElement = e.target;

        if(getElement.classList.contains('btn-tarefa')){
            if(!$inputTarefa.value) return; //Verifica se esta vazio
            criaTarefa($inputTarefa.value);
        }

        if(getElement.classList.contains('apagar')){
            // Apagou o elemento pai.
            getElement.parentElement.remove();
            salvarTarefas();
        }
    })

    $inputTarefa.addEventListener('keypress', (e) => {
        const enterBtn = e.keyCode === 13;

        if(enterBtn){
            if(!$inputTarefa.value) return;
            criaTarefa($inputTarefa.value);
        }
    })

    function criaTarefa(textoInput){
        const li = criaLi();
        li.innerText = textoInput;
        $tarefas.appendChild(li);
        limpaInput();
        criaBtnApagar(li);
        salvarTarefas();
    }

    function criaLi(){
        const li = document.createElement('li');
        return li;
    }

    function criaBtnApagar(li){
        li.innerText += ' ';

        const btnApagar = document.createElement('button');
        btnApagar.innerText = 'apagar tarefa';
        btnApagar.setAttribute('class', 'apagar');
        btnApagar.setAttribute('title', 'apagar essa tarefa');
        li.appendChild(btnApagar);
    }

    function limpaInput(){
        $inputTarefa.value = '';
        $inputTarefa.focus();
    }

    function salvarTarefas(){
        const liTarefas = $tarefas.querySelectorAll('li');
        const listaDeTarefas = [];

        for(let tarefa of liTarefas ){
            let tarefaTexto = tarefa.innerText;
            // Aqui vai retirar a palavra apagar da li
            tarefaTexto = tarefaTexto.replace('apagar', '').trim();
            listaDeTarefas.push(tarefaTexto);
        }

        const tarefasJSON = JSON.stringify(listaDeTarefas);
        localStorage.setItem('tarefas', tarefasJSON);
    }

    function adicionaTarefasSalvas(){
        const tarefas = localStorage.getItem('tarefas');
        const listaDeTarefas = JSON.parse(tarefas);

        for( let tarefa of listaDeTarefas){
            criaTarefa( tarefa);
        }
    }   
    adicionaTarefasSalvas();
})()