const hash = (key, arrayLen) => {
    let total = 0;
    let primeNumber = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total* primeNumber + value) % arrayLen;
    }
    return total;
}

console.log(hash('hii',13));
console.log(hash('byei',13));
console.log(hash('bye',13));
console.log(hash('hi',13));