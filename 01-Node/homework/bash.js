//console.log(global.process)

//process.stdout.write('tuki' + '\n') 

// process.stdin.on('data', (data)=> {
//     console.log(data)
//     process.stdout.write(data) 
// })

//process es un modulo del objeto global
//instancia de EventEmitter-> podemos emitir eventos
//process contiene metodos, eventos y props
//metodos: stdin y stdout ingresan y sacan datos con node
//stdin escribe en la consola con el metodo on
//stdout permite escribir cosas y mostrarlas en pantalla
//buffer es codigo duro, nosotros noentendemos


//este archivo hace de consola
//instalar nodemon
//primero debemos quedarnos con el input luego con la primer palabla que seria el "comando"
//en el ejemplo seria: echo holis -> echo
//debemos convertirlo en un array

const commands = require ('./commands/index'); //usamos commands js porque es la forma nativa por lo cual no hay que instalar nada mas, evitamos los modulos de ECMA tendriamos que modificar json e instalar un loader

const print = (input) => {
    process.stdout.write(input + '\n') 
    process.stdout.write('prompt > ')
}

process.stdout.write('prompt > ') 

process.stdin.on('data', (data)=> {  //data es buffer
    let args = data.toString().trim().split(' ');   //.trim elimina los espacios en blanco de los extremos
    //'echo holis' -> ['echo', 'holi']
    let cmd = args.shift(); //'echo'
    //console.log(args)

    //console.log(commands[cmd]())
    //ternario
    commands[cmd]  //commands es un objeto, cmd es una propiedad una variable, si esto da true pasa a la siguiente linea
    ? commands[cmd](args, print)
    : print('Command invalid ') //los : actuan como el else

    // process.stdout.write(cmd + '\n') 
    // process.stdout.write('prompt > ') //para no repetir codigo colocamos estas lineas dentro de la funcion print

})