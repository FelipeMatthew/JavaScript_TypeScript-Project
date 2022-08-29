(function(){
    'use strict';

    const $form = document.querySelector(".formulario");
    

    $form.addEventListener('submit', function(e){
        e.preventDefault();

        const inputPeso = e.target.querySelector('#input-peso');
        const inputAltura = e.target.querySelector('#input-altura');

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);
        
        if(!peso){
            output('Peso inválido', false);
            return;
        }
        if(!altura){
            output('Altura inválida', false);
            return;
        }
        const imc = calcularIMC(peso, altura);
        const nivelImc = getIMC(imc);

        const msg = `O seu IMC é ${imc} <br> Você está ${nivelImc}`;

        output(msg, true);
    })
    function calcularIMC(peso, altura){
        const imc = Number((peso / (altura**2)).toFixed(2));
        return imc;
    }
    function getIMC(imc){
        
        if(imc <= 18.5) return 'Abaixo do peso';
        if(imc <= 24.9) return 'Peso normal'
        if(imc <= 29.9) return 'Sobrepeso';
        if(imc <= 34.9) return 'Obesidade grau 1';
        if(imc <= 39.9) return 'Obesidade grau 2';
        if (imc > 40  ) return'Obesidade grau 3';
        

    }
    function output(msg , isValid){

        const $result = document.querySelector(".resultado");
        $result.innerHTML = '';
        
        const $p = criaParagrafo();

        if(isValid){
            $p.classList.add('resultado-valido');  
        }else{
            $p.classList.add('resultado-invalido')
        }

        $p.innerHTML = msg;
        $result.appendChild($p);

    }
    function criaParagrafo(){
        const $p = document.createElement('p');
        return $p;
        
    }

})()