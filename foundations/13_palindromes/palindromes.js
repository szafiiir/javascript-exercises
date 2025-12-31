const palindromes = function (text) {

    let textArr = Array.from(text);

    let noPunctLowCase_textArr = textArr.map(letter => letter.replace(/[."!? ,]/g, "").toLowerCase());
    let noPunctLowCase_textArrReversed = noPunctLowCase_textArr.toReversed();

    if (noPunctLowCase_textArr.join("") === noPunctLowCase_textArrReversed.join("")) {
        return true;
    }
    else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
