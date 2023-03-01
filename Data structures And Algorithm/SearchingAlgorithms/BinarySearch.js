//Time complexity is O(logn)
const binarySearch = (arr,val) => {
    let left = 0;
    let right = arr.length -1;
    while (left <= right) {
        let middle = Math.floor((left+right)/2);
        if (arr[middle] === val) return middle;
        else if (arr[middle] < val) {
            left = middle+1;
        } else {
            right = middle-1;
        }
    }
    return -1;
}

// const recursiveBinarySearch = (arr,val) => {
//     let middle = Math.floor(arr.length/2);
//     if (arr[middle] === val) return middle;
//     if (arr.length === 0 || (arr.length === 1 && arr[middle] !== val)) return -1;
//     if (arr[middle] > val) {
//         return recursiveBinarySearch(arr.slice(0,middle),val);
//     } else {
//         return middle + recursiveBinarySearch(arr.slice(middle+1),val);
//     }
// }

console.log(binarySearch([1,2,3,4,5],5));
// console.log(recursiveBinarySearch([1,2,3,4,5],9));