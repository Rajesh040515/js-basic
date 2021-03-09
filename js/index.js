const person = {

    name: 'rajesh',
    age: 21
};

for (let key in person) {
    console.log(key, person[key]);
}

const colors = ['red', 'green', 'blue'];
for (let r in colors) {

    console.log(r, colors[r]);

}
