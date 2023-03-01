const selectionSort = (arr) => {
    let minIndex;
    for (let i = 0; i < arr.length - 1; i++) {
        minIndex = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]];
        }
    }
    return arr;
}

const selectionSort1 = (arr) => {
    for (let i = 0; i < arr.length-1;i++) {
        let minIndex = i;
        for (let j = i+1; j <  arr.length; j++) {
            if (arr[j] < arr[minIndex]) minIndex = j;
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return arr;
}

console.log(selectionSort([5,4,3,2,1]));