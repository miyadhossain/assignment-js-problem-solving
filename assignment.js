// problem -01

function kilometerToMeter(kilo) {
    let toMeter = kilo * 1000;
    return toMeter;
}
kilometerToMeter(kilo);


// problem -02

function budgetCalculator(watch,mobile,laptop) {
    
    //calculate watch part
    let watchPrice = 50;
    let watchCost = watch * watchPrice;

    //calculate mobile part
    let mobilePrice = 100;
    let mobileCost = mobile * mobilePrice;

    //calculate laptop part
    let laptopPrice = 500;
    let laptopCost = laptop * laptopPrice;

    //calculate total cost
    let totalCost = watchCost + mobileCost + laptopCost;
    return totalCost;
}
budgetCalculator(watch,mobile,laptop);


// problem-03

function hotelCost(night) {

    let costPerNight = 0;
    let tenNightCost = 100;
    let twentyNightCost = 80;
    let thirtyNightCost = 50;
    // check first 10 night cost
    if (night <= 10) {
        costPerNight = night * tenNightCost;
    }
    // check next 10 night cost
    else if (night <= 20) {
        let firstTenNight = 10 * tenNightCost;
        let remain = night - 10;
        secondTenNight = remain * twentyNightCost;
        costPerNight = firstTenNight + secondTenNight;
    }
    else {
        let firstTenNight = 10 * tenNightCost;
        let secondTenNight = 10 * twentyNightCost;
        let remain = night - 20;
        let thirdPart = remain * thirtyNightCost;
        costPerNight = firstTenNight + secondTenNight + thirdPart;
    }
    return costPerNight;
}
hotelCost(night);