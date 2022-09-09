// Para pesquisar a respeito do char code: ASCII
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48,58));
const simbolos = '!@#$%&*()_+=-{}][/?';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

export default function geraSenha(qtd, maiuscula, minuscula, numeros, simbolos){
    const senhaArray = [];

    for( let i = 0; i < qtd; i++){
        maiuscula && senhaArray.push(geraMaiuscula());
        minuscula && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumero());
        simbolos && senhaArray.push(geraSimbolo());
    }
    return senhaArray.join('').slice(0, qtd);
}