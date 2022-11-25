//requerimos express e importamos el server a index
const express = require('express');
const morgan = require('morgan');
const usersRouter = require ('./routes/usersRouter')

const server = express();

//usar middleware
server.use(express.json()) //parsea informacion
server.use(morgan('dev')) //muestra todas las peticions(request) y las respuestas (response)

//como aqui estan los middleware aqui se importan las rutas

server.use('/users', usersRouter) //aqui la informacion ya esta parseada

//Post:
// post agregar un post
// get -> mostrar todos los post
// get -> /:id mostrar post del id especifico
// delete eliminar post
// put actualizar/modificar post









module.exports = server;