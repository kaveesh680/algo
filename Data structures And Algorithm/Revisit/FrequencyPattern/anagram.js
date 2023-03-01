const anagram = (str1,str2) => {
    if (str1.length !== str2.length) return false;
    let frequencyPattern1 = {};
    let frequencyPattern2 = {};

    for (let val of str1) {
        frequencyPattern1[val] = (frequencyPattern1[val] || 0) + 1;
    }

    for (let val of str2) {
        frequencyPattern2[val] = (frequencyPattern2[val] || 0) + 1;
    }

    for (let key in frequencyPattern1) {
        if (!(key in frequencyPattern2)) return false;
        if (frequencyPattern1[key] !== frequencyPattern2[key]) return false;
    }
    return true;

}

console.log(anagram('kaveesh','kaveshe'));