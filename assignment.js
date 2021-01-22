//https://github.com/miyadhossain/assignment-js-problem-solving

// problem -01

function kilometerToMeter(kilo) {
    // check, if user input is 0
    if (kilo == 0) {
        return 0;
    }
    // check, if user input is negative
    else if (kilo < 1) {
        return 'distance cannot be negative';
    }
    // check, if user input is valid
    else {
        var toMeter = kilo * 1000;
        return toMeter;
    }
}


// problem -02

function budgetCalculator(watch,mobile,laptop) {
    
    //calculate watch part
    var watchCost = watch * 50;

    //calculate mobile part
    var mobileCost = mobile * 100;

    //calculate laptop part
    var laptopCost = laptop * 500;

    //calculate total cost
    var totalCost = watchCost + mobileCost + laptopCost;
    return totalCost;
}



// problem-03

function hotelCost(night) {

    var costPerNight = 0;
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
        var firstTenNight = 10 * 100;
        var remain = night - 10;
        secondTenNight = remain * 80;
        costPerNight = firstTenNight + secondTenNight;
    }
    // check after 20 days
    else {
        var firstTenNight = 10 * 100;
        var secondTenNight = 10 * 80;
        var remain = night - 20;
        var thirdPart = remain * 50;
        costPerNight = firstTenNight + secondTenNight + thirdPart;
    }
    return costPerNight;
}


// problem-04


function megaFriend(arry) {
    var largeFriend = '';
    // check, if user input is empty arry
    if (arry == '') {
        return 'Please input your friends name';
    }
    // check, if user input is valid
    else {
        for (var i = 0; i < arry.length; i++) {
            var element = arry[i];
            if (largeFriend.length < element.length) {
                largeFriend = element;
            }
        }
    }
    return largeFriend;
}
