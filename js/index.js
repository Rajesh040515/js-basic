
checkspeed(75);

function checkspeed(speed) {
    const speedlimit = 70;
    const kmperpoint = 5;
    if (speed <= speedlimit) {
        return 'ok';
    }
    else {
        let points = math.floor((speed - speedlimit) / kmperpoint);
        if (points >= 12) {
            console.log('license suspend');
        }
        else {
            console.log('points', points);
        }

    }


}

