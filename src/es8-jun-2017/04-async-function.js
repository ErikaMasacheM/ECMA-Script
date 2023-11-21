const fnAsync2 = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Async!!'), 5000)
            : reject(new Error('Error!'))
    })
}

const anotherFn2 =  () => {
    const something =  fnAsync2();
    console.log(something);
    console.log('Hello!');
}

console.log('Before');
anotherFn2();
console.log('After');



// SOLUCION CON ASYNC AWAIT
console.log('con async await');

const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Async!!'), 5000)
            : reject(new Error('Error!'))
    })
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hola!');
}

console.log('Before');
anotherFn();
console.log('After');

