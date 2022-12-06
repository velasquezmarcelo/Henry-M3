//con axios
const axios = require('axios')  //usar axios en vez de fetch

// axios.get('https://jsonplaceholder.typicode.com/users')  //si consologeamos esta linea nos tira promise pending
//     .then(
//         response => console.log(response.data),  //successHandler
//         error => console.log('Che, salio todo mal: ', error) //errorHandler
//         )
//         //para forzar consologear el error podemos simplemente alterrar el link de users
//         //axios.get devuelve una promesa y .then el valor de la promesa

axios.get('https://jsonplaceholder.typicode.com/users')  
    .then(response => response.data) //successHandler, si encadenamos promesas debemos colocar console.log en la ultima
    .then(data => data[0].name) //asi se encadenan promesas 
    .then(name => console.log(name + ' holis')) // name es respuesta de la promesa anterior que a su vez data es respuesta de la promesa anterior y asi sucesivamente hasta la primer promesa
    .catch(error => console.log(error)) //errorHandler


//con fetch
// fetch.get('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error)) 

        
//Crear promesa con class, creamos nuestras propias promesas

// const tukiPromise = new Promise ((resolve, reject) => {
//     if(3 > 2){
//         resolve('tukiPromise resuelta')   //debemos mantener el orden sino funcionan invertidos
//     }
//     else {
//         reject('tukiPromise fallida')
//     }
    
    
// })

// console.log(tukiPromise.then(  //.then tambien es una promesa
//     (response) => console.log(response),
//     (error) => console.log(error)
// ))

