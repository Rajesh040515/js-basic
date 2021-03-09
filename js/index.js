
const marks = [80, 80];
console.log(calcutegrade(9));


function calcutegrade(marks) {

    const average = calculateAverage(marks);

    if (average >= 90 && average <= 100) {
        return 'A';
    }

    if (average >= 80 && average <= 89) {
        return 'b';
    }
    if (average >= 70 && average <= 79) {
        return 'c';
    }
    if (average >= 60 && average <= 69) {
        return 'd';
    }
    if (average >= 1 && average <= 59) {
        return 'f';
    }
    else {
        return 'faile';
    }



    function calculateAverage(array) {

        let sum = 0;
        for (let value of array)
            sum += value;
        return sum / array.length;
    }
}

