const sum1 = (n) => {
    let sum = 0;
    for( let i = 0; i <= n; i++ ) {
        sum += i;
    }
    return sum;
}

const sum2 = (n) => {
    return n*(n+1)/2;
}

// let t1 = performance.now();
console.log(sum1(1000000000000000));
// let t2 = performance.now();
// console.log(`time taken to execute the algorithm is ${t2 - t1}`);
console.log(sum2(5));