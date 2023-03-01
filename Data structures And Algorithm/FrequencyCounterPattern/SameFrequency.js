const sameFrequency = (num1,num2) => {
    const word1 = num1.toString();
    const word2 = num2.toString();
    if (word1.length !== word2.length) return false;
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let i = 0; i < word1.length; i++) {
        frequencyCounter1[word1[i]] = (frequencyCounter1[word1[i]] || 0) + 1;
    }

    for (let i = 0; i < word2.length; i++) {
        frequencyCounter2[word2[i]] = (frequencyCounter2[word2[i]] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) return false;
        if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
    }
    return true;
}

console.log(sameFrequency('1232', '1223'));