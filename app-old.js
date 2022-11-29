

const http = require('http');

http.createServer( (req, res) => {

    //res.writeHead(200, {'content-type': 'application/json'})
    //res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    //res.writeHead(200, {'content-type': 'application/csv'})

    
    res.write('Hola Mundo');
    res.end();

})

.listen(8080);

console.log('escuchando en el', 8080);