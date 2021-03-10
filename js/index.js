const numbers = [1, 2, 3];
const numbers2 = [4, 5, 6];


const combined = [...numbers, ...numbers2];
const copy = [...combined];
console.log(copy);