//export default function suma(a, b) {
//    return a + b;
//}

function suma(a, b) {
    return a + b;
}

function mult(c, d) {
    return c*d;
}

module.exports = {
    suma,
    mult,
}
//para abrir el archivo con node escribimos node index.js
//star es para abrir archivosde html, no lo usamos aqui
//para exportar e importar modulos los archivos deben ser .mjs e instalar loaders
//otra forma es instalar package.json -> npm init y agregar un type "module"
//esta forma es modulo de ECMA script