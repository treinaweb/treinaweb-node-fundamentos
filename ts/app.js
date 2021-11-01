"use strict";
/* var a: string = 'treinaweb';
var b: number = 123;

function exemplo(numero: number, texto: string){
    console.log(texto, numero);
}

exemplo(b,a); */
exports.__esModule = true;
var fs = require("fs");
var endereco = 'Av. Paulista 2000';
fs.writeFile('arquivo.txt', endereco, function (err) {
    if (err) {
        console.error(err);
    }
    console.log('Arquivo criado com sucesso!');
});
