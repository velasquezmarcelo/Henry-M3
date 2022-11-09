const axios = require('axios')  //usar axios en vez de fetch

axios.get('https://jsonplaceholder.typicode.com/users')  //si consologeamos esta linea nos tira promise pending
    .then(
        response => console.log(response.data),  //successHandler
        error => console.log('Che, salio todo mal: ', error) //errorHandler
        )
        //para forzar consologear el error podemos simplemente alterrar el link de users
        //axios.get devuelve una promesa y .then el valor de la promesa