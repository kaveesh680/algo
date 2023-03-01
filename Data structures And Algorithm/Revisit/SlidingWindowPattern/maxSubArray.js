const maxSubArray1 = (arr, num) => {
    if (arr.length < num) return null;
    let maxSum = 0;
    for (let i = 0; i < arr.length-num; i++) {
        let temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i+j];
        }
        if (temp > maxSum) maxSum = temp;
    }
    return maxSum;
}

const maxSubArray2 = (arr, num) => {
    if (arr.length < num) return null;
    let maxSum = 0;
    let temp = 0;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    for (let i = num; i < arr.length; i++) {
        temp = maxSum - arr[i-num] + arr[i];
        maxSum = Math.max(maxSum, temp);
    }
    return maxSum;
}

console.log(maxSubArray2([1,2,5,2,8,1,5],2));