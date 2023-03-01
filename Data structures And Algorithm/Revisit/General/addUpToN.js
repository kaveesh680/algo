const addUpToN = (n) => {
    let total = 0;
    for ( let i = 0; i <= n; i++) {
        total += i;
    }
    return total
}

const addUpToNEasyWay = (n) => {
    return n*(n+1)/2;
}

console.log(addUpToNEasyWay(100000000000));