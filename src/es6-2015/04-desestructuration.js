let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);

let user = {name: 'Erika', age: 33}
let {name, age} = user;
console.log(name, user.age); // Erika


// spread operator
let person = {name: 'Erika', age: 22};
let country = 'MX';

let data = {...person, country}
console.log(data);

// rest

function sum(num, ...values) {
    console.log(values);
    console.log(num+values[0]);
    return num + values[0];
    
}
sum(1,2,3,4)