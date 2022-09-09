class ValidaFormulario {
    constructor(){
        this.formulario = document.querySelector('.formulario')
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', evt => {
            this.handleSubmit(evt);
        });
    }

    handleSubmit(evt){ 
        evt.preventDefault();
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if(camposValidos && senhasValidas){
            alert('Formulário enviado, obigado pela participação');
            this.formulario.submit();
        }
    }

    camposSaoValidos(){
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.erro-text')){
            errorText.remove();
        }

        for( let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.value;

            if(!campo.value){
                this.criaErro(campo, `Campo ${label} está em branco`);
                valid = false;
            }

            if(campo.classList.contains('cpf')){
                if(!this.validaCpf(campo)) valid = false;
            }

            if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false;
            }
        }

        return valid;
    }

    senhasSaoValidas(){
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value){
            valid = false;
            this.criaErro(senha, 'Os valores das senhas precisam ser iguais');
            this.criaErro(repetirSenha, 'Os valores das senhas precisam ser iguais');
        }

        if(senha.value.length < 6 || senha.value.length > 12){
            valid = false;
            this.criaErro(senha, 'A senha precisa ter entre 6 à 12 caracteres');
            this.criaErro(repetirSenha, 'A senha precisa ter entre 6 à 12 caracteres');
        }
        
        return valid;
    }

    validaCpf(campo){
        const cpf = new ValidaCPF(campo.value);
        if(!cpf.valida()){
            this.criaErro(campo, 'CPF inválido');
            return false;
        }

        return true;
    }

    validaUsuario(campo){
        const usuario = campo.value;
        let valid = true;

        if(usuario.length > 12 || usuario.length < 3){
            this.criaErro(campo, 'Usuário precisa ter entre 3 à 12 caracteres');
            valid = false;
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.criaErro(campo, 'Nome de usuario precisa ter apenas letras e numeros');
            valid = false;
        }

        return true;
    }

    criaErro(campo, mensagem){
        const div = document.createElement('div');
        div.innerHTML = mensagem;
        div.classList.add('erro-text');
        campo.insertAdjacentElement('afterend', div);

    }

}
const valida = new ValidaFormulario();
