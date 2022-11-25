//Rutas: 

// Users: 
// post agregar usuario
// get -> ?name=marcelo mostrar todos los usuarios y si hay concidencia buscar por nombre 
// get -> /:id mostrar informacion del id especifico
// delete eliminar usuario
// put actualizar/modificar datos 

//Modularizar

const express = require('express') 
const {      //destructuring
    getUsers,
    getuserByName
} = require ('./models/controllers')

const usersRoute = express.Router();

//devuelve todos los usuarios si no hay query
//si hay query, mostrar los especificados
usersRoute.get('/', (req, res) => {  //colocando solo la barra '/' la ruta queda /users/
    
    const {name} = req.query; //el nombre llega por query, req.query es informacion opcional que puede llegar por url, el .body para post

    if(name){
        const users = getuserByName(name) //si hay name pasamos la funcion
        //verificamos que recibimos 
        if(users['error']) return res.status(400).json(users) //si users contiene prop error 
        else {  //si no tiene error
            return res.status(200).send(users) //todos los usuarios que coincide con el nombre
        }
    }
    else {    //si no recibimos nombres manda todos los usuarios
            const users = getUsers(); //esta funcion devuelve todos los users
        
            return res.status(200).send(users) //es igual poner send o json

        }
}) 





module.exports = usersRoute;