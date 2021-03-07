let person = {

    name: 'rajesh',
    age: 21
};
person.name = 'patel';
let selection = 'name';
person['selection'] = 'mary';
console.log(person.name);