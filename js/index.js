function createcircle(radius) {
    return {

        radius,


        draw() {
            console.log('draw');

        }

    };
}
const circle1 = createcircle(1);
console.log(circle1);

const circle2 = createcircle(2);
console.log(circle2);







