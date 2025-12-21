const repeatString = function(textString, count) {

    if (count < 0) return 'ERROR';
    
    let str = '';

    for (let i = 0; i < count; i++) {
        str += textString;
    }
    
    return str;
};

repeatString('hey', 3);
repeatString('hello', 10);
repeatString('hi', 1);
repeatString('bye', 0);
repeatString('goodbye', -1);

// Do not edit below this line
module.exports = repeatString;
