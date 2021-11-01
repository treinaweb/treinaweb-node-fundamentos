import { appendFile } from 'fs/promises';

var data: string = 'treinaWeb';

appendFile('meu_arquivo2.txt', data).then((a) => {
    console.log('Arquivo foi criaado/atualizado com sucesso');
}).catch((e) => {
    console.log('Erro: ', e);
});