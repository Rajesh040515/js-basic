
let address = new Address('a', 'b', 'c');

console.log(Address());


//factory function
function createaddress(street, city, zipcode) {
    return {

        street,
        city,
        zipcode
    };
}


//constructor function
function Address(street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}





