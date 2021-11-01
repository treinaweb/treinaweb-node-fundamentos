import * as http from 'http';

/* const server = http.createServer((req, res) => {
    res.writeHead('200', {'Content-Type': 'text/html'});
    res.write('<h1>TreinaWeb</h1>');
    res.end();
});

server.listen('3000', () => {
    console.log('Servidor iniciado na porta 3000!');
}); */

const server = http.createServer((req, res) => {
    res.writeHead('200', {'Content-Type': 'text/html'});
    var url = req.url;
    if(url === '/sobre'){
        res.write('<h1>TreinaWeb Sobre</h1>');
        res.end();
    }else if(url === '/contato'){
        res.write('<h1>TreinaWeb Contato</h1>');
        res.end();
    }else {
        res.write('<h1>TreinaWeb</h1><br><a href="/sobre">Sobre</a><br><a href="/contato">contato</a>');
        res.end();
    }
});

server.listen('3000', () => {
    console.log('Servidor iniciado na porta 3000!');
});



