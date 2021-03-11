function sum(...item) {

    if (item.length === 1 && Array.isArray(item[0]))
        item = [...items[0]];
    return item.reduce((a, b) => a + b);



}
console.log(sum(1, 2, 3, 4));
/*const num1 = [5, 6, 8];



const add = num1.filter(num1 => num1 > 5)
console.log(add);
console.log(num1);
*/