const http = require('http');
const chalk = require('chalk');

const host = 'localhost',
    port = '8080';

function servicioMensaje(req, res) {
    res.setHeader('Content-Type', 'application/json');
    
    /*res.writeHead(200);
    res.end(JSON.stringify({
        mensaje: 'hoalholaholaohloalh'
    }));*/
    switch(req.url) {
        case '/saludo':
        case '/':
            res.writeHead(200);
            res.end(JSON.stringify({
                mensaje: 'hoalholaholaohloalh'
            }));
            break;
        case '/mensajeNavidad':
            res.writeHead(200);
            res.end(JSON.stringify({
                mensaje: 'feliz navidad bro que la pases bien'
            }));
            break;
        default:
            res.writeHead(400);
            res.end(JSON.stringify({
                mensaje: 'Este endpoint no existe, wtf bro adónde vas'
            }));
            break;
    }
}

const server = http.createServer(servicioMensaje);
server.listen(port, host, () => {
    console.log('El servidor está encendido!\n'+
    chalk.blue(`http://${host}:${port}`));
});