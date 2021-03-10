const number = [1, 4, 3, 5, 6, 7];

const max = getmax([1, 2]);
console.log(max);


function getmax(array) {

    if (array.length === 0) return undefined;
    array.reduce((a, b) => (a > b) ? a : b);

}