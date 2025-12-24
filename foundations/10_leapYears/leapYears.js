const leapYears = function(year) {
    const fourDiv = year % 4 === 0;
    const hundredDiv = year % 100 === 0;
    const fourHundredDiv = year % 400 === 0;

    if (fourDiv && (!hundredDiv || fourHundredDiv)) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
