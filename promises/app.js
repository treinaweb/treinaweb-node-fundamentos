/* const p = new Promise((resolve, reject) => {
    try{
        resolve('Ok');
    } catch (e) {
        reject(e);
    }
});

p
.then((parametros) => console.log('sucesso', parametros))
.catch((erro) => console.log('erro')); */

import * as fs from 'fs';

function read(file){
    return new Promise((resolve, reject) =>{
        fs.readFile(file, (err, data) => {
            try{
                resolve(data.toString());
            }catch {
                reject('Arquivo não localizado');
            }
        });
    });
}

read('meu_arquivo1.txt').then((data) =>{
    console.log(data);
}).catch((err) => console.log(err));