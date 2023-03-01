const countUniqueValues1 = (arr) => {
    if (arr.length === 0) return 0;
    if (arr.length === 1) return 1;
    let i = 0;
    let j = 1;
    let uniqueValues = 1;
    while (j < arr.length) {
        if (arr[i] === arr[j]) {
            j++;
        } else {
            uniqueValues++;
            i = j;
            j++;
        }
    }
    return uniqueValues;
}

const countUniqueValues2 = (arr) => {
    if (arr.length === 0) return 0;
    if (arr.length === 1) return 1;
    let i = 0;
    let j = arr.length-1;
    let uniqueValues = 0;
    while (i < arr.length) {
        if (arr[i] === arr[j]) {
            i = j+1;
            j = arr.length-1;
            uniqueValues++;
        } else {
            j--;
        }
    }
    return uniqueValues;
}

const countUniqueValues3 = (arr) => {
    if (arr.length === 0) return 0;
    if (arr.length === 1) return 1;
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1;
}

console.log(countUniqueValues3([1,1,1,1,2,2,2,3,3,3,4,5,6,6]));