try {
    const number = [1, 2, 3, 4];
    const count = countoccurences(number, 1);
    console.log(count);
}
catch (e) {
    console.log(e.message);
}
const countoccurences = count(array, searchelement)
{
    if (!Array.isArray(array))
        throw new Error('invalide');
    return array.reduce((accumulator, current) => {

        const occurence = (current === searchelement) ? 1 : 0;
        return accumulator + occurence;
    }, 0);

}

/*const num1 = [5, 6, 8];



const add = num1.filter(num1 => num1 > 5)
console.log(add);
console.log(num1);
*/