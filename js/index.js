
let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');

console.log(areequal(address1, address2));
console.log(areequal(address1, address2));



//constructor function
function Address(street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}
function areequal(address1, address2) {
    return address1.street === address2.street &&
        address1.city === address2.city &&
        address1.zipcode === address2.zipcode;
}

function aresame(address1, address2) {
    return address1 === address2;

}


