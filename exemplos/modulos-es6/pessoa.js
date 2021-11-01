var pessoa = {
    nome: 'Bruno',
    idade: 25,
    andar(){
        console.log('Andando...');
    }
}

var a = 10;
var b = 5;

function soma(){
    return a + b;
}

export { pessoa, soma as default};