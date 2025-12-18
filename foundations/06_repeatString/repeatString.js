const repeatString = function(textString, count) {

    if (count < 0) return 'error';
    
    let str = '';

    for (let i = 0; i < count; i++) {
        str += textString;
    }
    
    return str;
};

repeatString('hey', 3);


// Do not edit below this line
module.exports = repeatString;
