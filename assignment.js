//https://github.com/0xtonmoy/assignment3

//kilometerToMeter

function kilometerToMeter(km) {
    let meter = 0;
    if (km > 0) {
        meter = km * 1000;
    } else if (km < 0) {
        return "Distance cannot be negative.";
    } else if (km == 0) {
        return "value is 0.";
    } else {
        return "something is wrong.";
    }
    return meter;
    
}





//budgetCalculator

function budgetCalculator(watch, mobile, laptop) {
    let totalPrice = 0;
    if (watch <= 0 && mobile <= 0 && laptop <= 0) {
        return "You didn't buy anything.";
    } else if (watch <= 0 && mobile <= 0) {
        return "You didn't buy Watch and Mobile"
    } else if (watch <= 0 && laptop <= 0) {
        return "You didn't buy Watch and Laptop"
    } else if (mobile <= 0 && laptop <= 0) {
        return "You didn't buy Mobile and Laptop"
    } else if (watch <= 0) {
        return "You didn't buy Watch"
    } else if (mobile <= 0) {
        return "You didn't buy Mobile.";
    } else if (laptop <= 0) {
        return "You didn't buy Laptop.";
    } else if (watch > 0 && mobile > 0 && laptop > 0) {
        let watchPrice = watch * 50;
        let mobilePrice = mobile * 100;
        let laptopPrice = laptop * 500;
        totalPrice = watchPrice + mobilePrice + laptopPrice;
    } else {
        return "Something is wrong!"
    }
    return totalPrice;
   
}




//hotelCost

function hotelCost(day) {

    let totalCost = 0;

    if (day == 0) {
        return "Where is your day?";
    } else if (day < 0) {
        return "value can't be negative.";
    } else if (day <= 10) {
        totalCost = day * 100;
    } else if (day <= 20) {
        let first10days = 10 * 100;
        let remaining = day - 10;
        let second10days = remaining * 80;
        totalCost = first10days + second10days;
    } else {
        let first10days = 10 * 100;
        let second10days = 10 * 80;
        let remaining = day - 20;
        let anotherDays = remaining * 50;
        totalCost = first10days + second10days + anotherDays;
    }
    return totalCost;
  
}




//megaFriend

function megaFriend(name) {
    let largerName = name[0];

    if (name.length == 0) {
        return "Your array is blank.";
    } 
    else {
        for (let i = 0; i < name.length; i++) {
            let element = names[i];

            if (element.length > largerName.length) {
                largerName = element;
            }
        }
    }
    return largerName;
    
}