const sameFrequency = (num1,num2) => {
    const number1 = num1.toString();
    const number2 = num2.toString();

    if (number1.length !== number2.length) return false;
    let frequencyPattern1 = {};
    let frequencyPattern2 = {};

    for (let val of number1) {
        frequencyPattern1[val] = ( frequencyPattern1[val] || 0 ) + 1;
    }

    for (let val of number2) {
        frequencyPattern2[val] = ( frequencyPattern2[val] || 0 ) + 1;
    }

    for (let key in frequencyPattern1) {
        if (!(key in frequencyPattern2)) return false;
        if (frequencyPattern1[key] !== frequencyPattern2[key]) return false;
    }
    return true;
}

console.log(sameFrequency(123,3211));