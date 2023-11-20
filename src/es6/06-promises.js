// promesas
const seraUnaPromesa = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('hola');
        }
        reject('chao');
})

}

seraUnaPromesa()
.then(response => console.log(response))
.catch(error => console.log(error))