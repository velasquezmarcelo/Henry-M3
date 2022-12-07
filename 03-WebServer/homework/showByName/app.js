var fs  = require("fs") 
var http  = require("http")
//fs es un modulo de node que me pertime usar ciertos metodos
// Escribí acá tu servidor
http.createServer((req, res) => { //esto es una callback
    //console.log(req.url.slice(1))
    const nameImage = req.url.slice(1); //con esto nos quedamos con el nombre de las url ej: arcoiris
    const images = fs.readdirSync('./images'); //con esto guardamos las imagenes en una constante
    //console.log(images)

    for(const image of images) { //guarda cada imagen en una constante
        if(image.includes(nameImage)) { //consulta si image contiene nameImage que es el nombre
            res.writeHead(200, {"Content-type" : "image/jpg"})
            const img = fs.readFileSync(`./images/${nameImage}_doge.jpg`) //asi pasamos la imagen para mostrarla y no solo el nombre
            return res.end(img) //el return es para que corte la ejecucion, sino queda en espera 
        }
    }

    res.writeHead(404, {"Content test" : "text/plain"})
    return res.end("Not found. Request invalid")
}).listen(3001, 'localhost') //localhost indica que todas las peticiones van a ser desde mi computadora