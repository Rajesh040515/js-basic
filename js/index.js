const number = [1, 4, 3, 5, 6, 7];


const count = countoccurrence(number, 1)
console.log(count);
function countoccurrence(array, searchelement) {


    return array.reduce((accumulator, current) => {

        const occurrence = (current === searchelement) ? 1 : 0;
        console.log(accumulator, current, searchelement);
        return accumulator + occurrence;


    }, 0);


}