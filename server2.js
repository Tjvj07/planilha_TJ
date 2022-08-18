const http = require('http');
// Modulo para interagir com Sistema de Arquivos
const fs = require("fs").promises

const hostname = 'localhost';
const port = 3000;

const server = http.createServer(trataReq);

function trataReq(req, res) {
    if (req.url === '/fizzbuzz'){
        for (let i=1; i >=20; i ++){
            const mensagem = fizzbuzz(i)
            res.write(mensagem)
        }
        res.end()
    } else {
    fs.readFile('./index.html', 'utf-8').then(texto => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.write(texto);
        res.end();
    }
    })
}

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
{
    "name": "planilha_TJ",
    "version": "1.0.0",
    "description": "",
    "main": "app.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "start": "node server.js"
    },
    "repository": {
      "type": "git",
      "url": "git+https://github.com/Tjvj07/planilha_TJ.git"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "bugs": {
      "url": "https://github.com/Tjvj07/planilha_TJ/issues"
    },
    "homepage": "https://github.com/Tjvj07/planilha_TJ#readme"
  }
  