function newUser(name, age, uid) {
    return {
        name,
        age,
        id: uid
    }
}

console.log(newUser('Erika', 22, 5));