const binarySearch = (arr, num) => {
    let min = 0;
    let max = arr.length-1;
    while (min < max) {
        let middle = Math.floor((min+max)/2);
        if (arr[middle] === num) return middle;
        else if (arr[middle] > num) {
            max = middle -1;
        } else {
            min = middle + 1;
        }
    }
    return -1;
}

console.log(Math.round(1.5));

console.log(binarySearch([1,2,3,4,6,7,8,9,10], 5));