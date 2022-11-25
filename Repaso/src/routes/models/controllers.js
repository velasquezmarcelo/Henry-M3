//los controllers son funciones que se encargar de la logica y contienen los arrays que usamos como base de datos

let users = []; 

//las finciones deben tener el nombre que las definen

const getUsers = () => {
    return users;
}

const getuserByName = (name) => {
    const filterUsers = users.filter( //aplicamos un filtro
        user => user.name === name
    )

    if(filterUsers.length) return filterUsers //si hay usuarios retorna el array
    else return {error: 'No hay usuarios'}

    //en ternario
    //filterUsers.length ? filterUsers : {error: 'No hay usuarios'}
}


//exportamos las funciones
module.exports = {
    getUsers,
    getuserByName,
}