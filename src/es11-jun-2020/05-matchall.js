const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Orange, Kiwi, Apple, Banana, Orange';

for(const match of fruit.matchAll(regex)){
    console.log(match);
}