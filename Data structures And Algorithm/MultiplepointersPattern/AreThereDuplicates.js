const areThereDuplicates = (...letters) => {
    if (letters.length === 1 || letters.length === 0) return false;
    let i = 0;
    let j = letters.length - 1;
    while (i < j) {
        if (letters[i] === letters[j]) return true;
        else if (i === j - 1) {
            i++;
            j = letters.length - 1;
        }
        else {
            j--;
        }
    }
    return false;
}

console.log(areThereDuplicates(1,13,2));
