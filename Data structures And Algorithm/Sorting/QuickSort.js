// const pivot = (arr, start=0, end=arr.length-1) => {
//     let pivot = arr[start];
//     let swapIndex = start;
//     for (let i = start+1; i < end+1; i++) {
//         if (arr[i] < pivot) {
//             swapIndex++;
//             [arr[swapIndex],arr[i]] = [arr[i], arr[swapIndex]];
//         }
//     }
//     if (swapIndex !== start){
//         [arr[swapIndex],arr[start]] = [arr[start], arr[swapIndex]];
//     }
//     return swapIndex;
// }
//
// const quickSort = (arr,left = 0, right = arr.length-1) => {
//     if (left < right) {
//         let pivotIndex = pivot(arr, left, right);
//         quickSort(arr, left, pivotIndex)
//         quickSort(arr, pivotIndex + 1);
//     }
//     return arr;
// }

const pivot = (arr, start = 0, end = arr.length-1) => {
    let pivot = arr[start];
    let swapIndex = start;
    for (let i = start+1; i < end+1; i++) {
        if (pivot > arr[i]){
            swapIndex++;
            [arr[swapIndex],arr[i]] = [arr[i], arr[swapIndex]];
        }
    }
    if (swapIndex !== start) {
        [arr[swapIndex], arr[start]] = [arr[start], arr[swapIndex]]
    }
    return swapIndex;
}

const quickSort = (arr, left = 0, right = arr.length-1) => {
    if (left < right) {
        let pivotIndex = pivot(arr,left, right);
        quickSort(arr,left,pivotIndex);
        quickSort(arr, pivotIndex+1)
    }
    return arr;
}


console.log(quickSort([4,3,2,5,6,9,1]));