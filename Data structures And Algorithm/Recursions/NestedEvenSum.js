const nestedEvenSum = (obj) => {
    let arr = Object.values(obj);
    let sum = 0;
    for ( let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object') {
            sum += nestedEvenSum(arr[i]);
        } else {
            if (arr[i]%2 === 0) {
                sum += arr[i];
            }
        }
    }
    return sum;
}

var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
};
console.log(nestedEvenSum(obj2));