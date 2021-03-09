
let address = {


    street: 'a',
    city: 'b',
    zipcode: 'c'


};
function showaddress(address) {
    for (let key in address)
        console.log(key, address[key]);

}
showaddress(address);





