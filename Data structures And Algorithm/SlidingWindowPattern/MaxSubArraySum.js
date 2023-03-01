const maxSubArraySum = (arr, num) => {
    if (arr.length < num) return null;
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i ++) {
        tempSum = tempSum - arr[i-num]+ arr[i];
        maxSum = Math.max(tempSum,maxSum);
    }
    return maxSum;
}

console.log(maxSubArraySum([1,2,3,4,5,7,8,1,2], 3));
















// const maxSubArray = (arr,num) => {
//     if (arr.length === num) return null
//     let maxSum = 0;
//     let tempSum = 0;
//     for (let i = 0;i < num; i++) {
//         maxSum += arr[i];
//     }
//     tempSum = maxSum;
//     for (let i = num; i , arr.length; i++) {
//         tempSum = tempSum - arr[i-num] + arr[num];
//         maxSum = Math.max(tempSum,maxSum);
//     }
//     return maxSum;
// }