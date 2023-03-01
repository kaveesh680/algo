const collectodds = (arr) => {
    const odds = [];
    const helper = (arr) => {
        if (arr.length === 0) return;
        if (arr[0] % 2 !== 0) {
            odds.push(arr[0]);
        }
        helper(arr.slice(1));
    }
    helper(arr);
    return odds;
}

const collectOdds = (arr) => {
    let newArr = [];
    if (arr.length === 0) return newArr;
    if (arr[0]%2 !== 0) {
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(collectodds(arr.slice(1)));
    return newArr;
}

console.log(collectOdds([1,2,3,4,5,6,7,8,9,10,11]));