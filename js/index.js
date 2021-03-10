const number = [3, -1, 1, 2];
const sum = number.reduce((accumulator, currentvalue) => {

    return accumulator + currentvalue;
});

console.log(sum);

