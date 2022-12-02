//en index se trabajan  todos los comandos
const fs = require('fs'); //si no lo requerimos no nos va a funcionar las funciones que usen el fs
const { request } = require('http');

const echo = (args, print) => {
    print (args.join(' '))  //args es un array y .join es lo contrario del split
}
//todas las funciones van a tener args y print porque sino no andan

const pwd = (args, print) => {  //devuelve el directorio donde estamos parados
    //print (process.mainModule.path)  //el objeto process tiene una props path
    print(__dirname.split('\\').pop()) //forma mas simple y nos entrega solo la carpeta actual y no todo el directorio
    //print(__dirname.split('\\').at(-1)) //hace exactamente lo mismo
}

const date = (args, print) => {  //nos entrega la fecha
    print(Date())

}

const ls = (args, print) => {
    fs.readdir('.',(err, files) => { //readdir es un metodo dentro del modulo fs nos permite leer el directorio, fs es un modulo dentro de node 
        err
        ? console.log(err)
        //: (files.forEach(files => { //usamos forEach en vez de map
            //process.stdout.write(file + '\n') //asi no queda bien visualmente
        : print(files.join('\n')) //este es un codigo mas corto, .join transforma un array en string
        })
}

const cat = (args, print ) => {  //es una funcion para leer archivo
    fs.readFile(args[0], (err, data) => {  //siempre en la posicion 0 va a quedar el nombre del archivo que quiero leer
        if (err) throw Error (err)  //esto es manejo de error con node
        print(data)
    })
}

const head = (args, print) => { //lee la primeras lineas del archivo
    fs.readFile(args[0], 'utf-8', (err, data) => {
        print(data.split('\n').splice(0, 5).join('\n')) //.splice si modifica el array original, se queda con los indice indicados, en cada indice entra una linea de texto.
    })
}

const tail = (args, print) => {
    fs.readFile(args[0], 'utf-8', (err, data) => {
        print(data.split('\n').splice(-5).join('\n'))
    })
}

const curl = (args, print) => { //instalar npm i --save request
    request(args[0], (err, data) => {
        //console.log(data)
        print(data.body) 
    })
}
//esta funcion lee html

module.exports = {
    echo,
    pwd,
    date,
    ls,
    cat,
    head,
    tail,
    curl,
}