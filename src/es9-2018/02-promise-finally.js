const value = 1;

const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (value == 1)
            ? resolve('Hey!!')
            : reject(new Error('Error!'))
    })
}

fnAsync()
.then(response => console.log(response))
.catch(err => console.log(err))
.finally(() => {console.log('Finnaly');})  // se ejecuta cuando responde correctamente o erronea la promesa, esta funcion se ejecuta al final si o si