const someRecursive = (arr, callback) => {
    // if (arr.length === 1) {
    //     return callback(arr[0]);
    // }
    // return callback(arr[0]) || someRecursive(arr.slice(1),callback);
    if (arr.length === 0) return false;
    if (callback(arr[0])) return true;
    return someRecursive(arr.slice(1),callback);
}

const isOdd = (num) => {
    if (num%2 !== 0) return true;
    return false;
}

console.log(someRecursive([4,7,6,8], isOdd))