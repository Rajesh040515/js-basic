//const number = [3, 1, 2];
//number.sort();
//console.log(number);

//number.reverse();
//console.log(number);

const courses = [

    { id: 1, name: 'node' },
    { id: 2, name: 'java' },
];

courses.sort(function (a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});
console.log(courses);

