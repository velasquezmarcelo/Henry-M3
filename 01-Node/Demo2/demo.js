//esta forma es modulos, es algo nuevo
//import suma from './index.js';

//eta es la forma nativa de node
//const index = require('./index')
//aplicamos destructuring
const {suma, mult} = require('./index')

console.log(suma(2, 4))
console.log(mult(4, 2))
console.log('holaaaa')
console.log('holaaaa gg')

//NPM es un gestor de paquetes
//podemos modificar el package.json y crear nuestros propios comandos
//otra forma es instalar package.json -> npm init y agregar un type "module"
// ej tuki: node demo.js 
//para ejecutarlo -> npm run tuki
//solo npm test y npm star se pueden usar sin el run
//cuando se instalan paquetes se guardan en la prop dependencia
//nodemon es un watcher, es para evitar levantar el servidor despues de cada cambio