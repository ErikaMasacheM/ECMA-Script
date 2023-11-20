function persona(name, age) {
    var name = name || 'Erika';
    var age = age || 25;
    console.log(name, age);
}

persona()
persona('Ronny', 32)

function person2( name = 'Cris', age = 5) {
    console.log(name, age);
}

person2();
person2('Carlos', 27);