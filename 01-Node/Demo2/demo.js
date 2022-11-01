//import suma from './index.js';


//const index = require('./index')
//aplicamos destructuring
const {suma, mult} = require('./index')

console.log(suma(2, 4))
console.log(mult(4, 2))
console.log('holaaaa')
//NPM es un gestor de paquetes
//podemos modificar el package.json y crear nuestros propios comandos
// ej tuki: node demo.js 
//para ejecutarlo -> npm run tuki
//solo npm test y npm star se pueden usar sin el run
//cuando se instalan paquetes se guardan en la prop dependencia
//nodemon es un watcher