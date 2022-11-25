//para empezar el proyecto de cero debemos hacer npm init -y y luego instalar npm i nodemon morgan express
//luego en package.json escribimos  "start": "nodemon index.js"

//como levantar servidor, solo se levanta el servidor
const server = require('./src/app');







//por convencion servidor front 3000 y servidor back 3001
//colocamos el mensaje que sale en consola
//para levantar el servidor npm start
server.listen(3001, () => {
    console.log('Server on port 3001')
})