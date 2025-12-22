const reverseString = function(str) {
    
    let revStr = '';
    
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    
    return revStr;

};

reverseString('hello');
reverseString('hello there');
reverseString('123! abc! Hello, Odinite.')
reverseString('');

// Do not edit below this line
module.exports = reverseString;
