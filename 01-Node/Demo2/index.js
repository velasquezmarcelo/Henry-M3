//esta forma es instalar package.json -> npm init y agregar un type "module"
//export default function suma(a, b) {
//    return a + b;
//}

function suma(a, b) {
    return a + b;
}

function mult(c, d) {
    return c*d;
}
//eta es la forma nativa de ECMA
module.exports = {
    suma,
    mult,
}
//para abrir el archivo con node escribimos node index.js
//star es para abrir archivosde html, no lo usamos aqui
//para exportar e importar modulos los archivos deben ser .mjs e instalar loaders
//esta forma es modulo de ECMA script