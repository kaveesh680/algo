const binarySearch = (arr,n) => {
    let start = 0;
    let end = arr.length -1;
    while (start <= end) {
        let middle = Math.floor((start+end)/2);
        if (arr[middle] === n) return middle;
        else  if (arr[middle] > n) {
            end = middle -1;
        } else {
            start = middle + 1;
        }
    }
}

console.log(binarySearch([1,2,3,4,5,6],2));

// console.log(Factorial(5));