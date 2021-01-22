//https://github.com/miyadhossain/assignment-js-problem-solving

// problem -01

function kilometerToMeter(kilo) {
    // check, if user input is 0
    if (kilo == 0) {
        return 'distance invalid';
    }
    // check, if user input is negative
    else if (kilo < 1) {
        return 'distance cannot be negative';
    }
    // check, if user input is valid
    else {
        let toMeter = kilo * 1000;
        return toMeter;
    }
}


// problem -02

function budgetCalculator(watch,mobile,laptop) {
    
    //calculate watch part
    let watchCost = watch * 50;

    //calculate mobile part
    let mobileCost = mobile * 100;

    //calculate laptop part
    let laptopCost = laptop * 500;

    //calculate total cost
    let totalCost = watchCost + mobileCost + laptopCost;
    return totalCost;
}



// problem-03

function hotelCost(night) {

    let costPerNight = 0;
    // check, if user input is 0
    if (night == 0) {
        return 0;
    }
    // check, if user input is negative
    else if (night < 1) {
        return 'cannot be negative';
    }
    // check first 10 night cost
    else if (night <= 10) {
        costPerNight = night * 100;
    }
    // check next 10 night cost
    else if (night <= 20) {
        let firstTenNight = 10 * 100;
        let remain = night - 10;
        secondTenNight = remain * 80;
        costPerNight = firstTenNight + secondTenNight;
    }
    // check after 20 days
    else {
        let firstTenNight = 10 * 100;
        let secondTenNight = 10 * 80;
        let remain = night - 20;
        let thirdPart = remain * 50;
        costPerNight = firstTenNight + secondTenNight + thirdPart;
    }
    return costPerNight;
}


// problem-04


function megaFriend(arry) {
    let largeFriend = '';
    // check, if user input is empty arry
    if (arry == '') {
        return 'Please input your friend name';
    }
    // check, if user input is valid
    else {
        for (let i = 0; i < arry.length; i++) {
            let element = arry[i];
            if (largeFriend.length < element.length) {
                largeFriend = element;
            }
        }
    }
    return largeFriend;
}
