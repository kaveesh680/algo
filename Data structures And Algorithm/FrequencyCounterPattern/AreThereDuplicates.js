const areThereDuplicates = (...letters) => {
    if (letters.length === 0 | letters.length === 1) return false;
    let frequencyCounter1 = {};

    for (let i = 0; i < letters.length; i++) {
        frequencyCounter1[letters[i]] = (frequencyCounter1[letters[i]] || 0) + 1;
        if (frequencyCounter1[letters[i]] > 1) return true;
    }
    return false;
}

console.log(areThereDuplicates('a','b','b'));