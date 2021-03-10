const person = {
    firstname: 'rajesh',
    lastname: 'patel',
    get fullname() {
        return '${person.firstname} ${person.lastname}'

    },

    set fullname(value) {


        const parts = value.split(' ');
        this.firstname = parts[0];
        this.lastname = parts[1];

    }

};
person.fullname = 'hello hii';
console.log(person);