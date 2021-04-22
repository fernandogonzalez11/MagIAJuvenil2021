const http = require('http');
const chalk = require('chalk');
const webData = require('fs').readFileSync('./web.html', { encoding: 'utf-8' });

const host = 'localhost',
    port = '8080';

/**
 * @param {http.IncomingMessage} req 
 * @param {http.ServerResponse} res */
function servicioMensaje(req, res) {
    switch(req.url) {
        case '/saludo':
        case '/':
            res.setHeader('Content-Type', 'application/json');
            res.writeHead(200);
            res.end(JSON.stringify({
                mensaje: 'hoalholaholaohloalh'
            }));
            break;
        case '/mensajeNavidad':
            res.setHeader('Content-Type', 'application/json');
            res.writeHead(200);
            res.end(JSON.stringify({
                mensaje: 'feliz navidad bro que la pases bien'
            }));
            break;
        case '/pagina':
            res.setHeader('Content-Type', 'text/html');
            res.writeHead(200);
            res.end(webData);
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