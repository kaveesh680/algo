const countUniqueValues = (arr) => {
    if (arr.length === 0) return 0;
    let i = 0;
    let j = arr.length - 1;
    let count = 0;
    while (i < arr.length) {
        if (arr[i] === arr[j]) {
            count++;
            i = j+1;
            j = arr.length - 1;
        } else {
            j--;
        }
    }
    return count;
}

console.log(countUniqueValues([1,1,2,2,2,3,4,5,5,6,7]))