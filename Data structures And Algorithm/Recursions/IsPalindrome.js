const isPalindrome = (str) => {
    if (str.length === 2) {
        if (str[0] === str[1]) return true;
        else return false
    }
    if (str.length === 3) {
        if (str[0] === str[2]) return true;
        else return false
    }
    if (str[0] === str[str.length -1]) {
        return isPalindrome(str.slice(1,str.length-1));
    } else return false;
}

console.log(isPalindrome('qqwqq'));