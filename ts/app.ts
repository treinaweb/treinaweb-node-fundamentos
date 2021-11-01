/* var a: string = 'treinaweb';
var b: number = 123;

function exemplo(numero: number, texto: string){
    console.log(texto, numero);
}

exemplo(b,a); */

import * as fs from 'fs';

var endereco: string = 'Av. Paulista 2000';

fs.writeFile('arquivo.txt', endereco, (err) => {
    if(err){
        console.error(err);
    }
  
    console.log('Arquivo criado com sucesso!')
  });