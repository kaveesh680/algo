const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for (let j = i -1; j >= 0; j--) {
            if (arr[j] > currentVal) {
                [arr[j],arr[j+1]] = [currentVal,arr[j]];
            } else {
                break;
            }
        }
    }
    return arr;
}

const insertionSort1 = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let currentValue = i;
        for (let j = i-1; j > 0; j--) {
            if (arr[j] > arr[i]) {
                [arr[j], arr[i]] = [arr[i],arr[j]]
            } else {
                break;
            }
        }
    }
    return arr;
}

console.log(insertionSort([5,4,3,2,1]));