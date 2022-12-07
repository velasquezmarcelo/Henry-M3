//trabajamos con protocolos de http, no es necesario instalar porque ya esta dentro de node
const http = require('http')
const { url } = require('inspector')
const fs = require('fs')

http.createServer((req, res) => { //recibe una request y una response
    //console.log('estoy creando un server')
    //res.writeHead(200, {"Content-type" : "text/plain"}) //el segundo parametro es un json e indica el tipo de respuesta que da el servidor
    //res.end("Holis, creaste tu primer server crack") //La respuesta final que da el servidor

    //crear rutas
    if(req.url === "/users"){
        res.writeHead(200,  {"Content-type" : "application/json"})

        const users = [
            {id:1, name: 'Marcelo'},
            {id:1, name: 'Matias'},
            {id:1, name: 'Franco'},
        ]
        res.end(JSON.stringify(users)) //este metodo transforma en json asi se puede mandar la respuesta correctamente 
    }
    if(req.url === "/post"){
        res.writeHead(200,  {"Content-type" : "text/html"})

        let miHTML = fs.readFileSync('./nombre.html', 'utf-8') //el segundo parametro es un encoding
        let name = 'Marcelo'
        miHTML = miHTML.replace('{nombre}', name) //este metodo reemplaza lo que tenemos en el primer parametro por lo que ponemos en el segundo parametro, en este caso reemplaza el nombre que tenemos en el html
        res.end(miHTML) 
    }
    else{
        res.writeHead(404,  {"Content-type" : "text/html"})
        //debemos requerir fs
        //como fs es asincronico debemos hacerlo sincronico
        const mandoHTML = fs.readFileSync('./index.html')

        res.end(mandoHTML) 
    }
}).listen(5050, 'localhost') 
//estamos haciendo en esencia una API
//instalar thunder client
