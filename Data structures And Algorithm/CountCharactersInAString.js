const countCharactersInAString = (str) => {
    let charators = {};
    if (str === '') return null;
    for (let i = 0; i < str.length; i ++) {
        if (charators.hasOwnProperty(str[i].toLowerCase())) {
            charators[str[i].toLowerCase()] += 1;
        } else {
            charators[str[i].toLowerCase()] = 1;
        }
    }
    return charators;
}

const charCount = (str) => {
    let result = {};
    for (let char of str) {
        let char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            result[char] = ++ result[char] || 1;
        }
    }
    return result;
}

console.log(countCharactersInAString('kaveEsh'))