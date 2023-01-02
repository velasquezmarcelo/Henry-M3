//crear promise
const promise1 = new Promise((resolve, reject ) => {
    resolve('Me resolvi')
})

const promiseReject = new Promise((resolve, reject) => {
    reject('Salio todo mal')
})

//case1
//promise1
//    .then(value => console.log(value))

//case2
// promiseReject
//     .then(
//         value => console.log(value),
//         reason => console.log(reason)
//     )

//case3
// promise1
//     .then() //como no tiene como manejar la promesa se la pasa a la siguiente
//     .then(value => console.log(value)) //value es la respuesta de la promesa anterior

//case4
// promiseReject //promesa que se rechaza
//     .then(value => value) //promesa como son successhandler no pueden manejar el error, lo pasa al siguiente
//     .then(value => value)
//     .then(value => value)
//     .then(value => value) //ninguno pudo manejar el error pasa al catch
//     .catch(err => console.log(err))

//case5
// promiseReject
//     .then(
//         value => {return 'value: ', value},
//         err => {throw err}
//     )

//     .then(
//         value => console.log(value),
//         err => console.log(err)
//     )

//case6 
// promiseReject
//     .then(
//         value => {return value},
//         err => console.log('se rechazo aqui: ' + err)
//     )

//case7
promise1
    .then(
        value => {return promiseReject},
        err => {throw err} 
    )
    .then(
        value => console.log('successHandler: ', value),
        err => console.log('errorHandler: ', err)
    )














