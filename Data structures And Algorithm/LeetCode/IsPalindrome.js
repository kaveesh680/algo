const isPalindrome = (x) => {
    if (x === '') return false;
    if (x.length === 1) return true;
    let i = 0;
    let j = x.length - 1;
    while (i < j) {
        if (x[i] !== x[j]) return false;
        else {
            i++;
            j--;
        }
    }
    return true;
}

console.log(isPalindrome('-121'));