const number = [1, 4, 3];
console.log(number.includes(number, 2));

function includes(array, searchelement) {
    for (let element of array)
        if (element === searchelement)
            return true;
    return false;

}

