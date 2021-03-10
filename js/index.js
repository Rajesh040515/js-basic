const person = {
    firstname: 'rajesh',
    lastname: 'patel',
    get fullname() {
        return '${person.firstname} ${person.lastname}'

    },

    set fullname(value) {
        if (typeof value !== 'string')
            throw new Error('value is not string');


        const parts = value.split(' ');
        this.firstname = parts[0];
        this.lastname = parts[1];

    }

};
try {
    person.fullname = null;
}
catch (e) {
    alert(e);
}
console.log(person);