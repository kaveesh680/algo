const minSubArrayLen = (arr, num) => {
    if (arr.length === 1 && arr[0] < num) return 0;
    if (arr.length === 1 && arr[0] > num) return 1;
    let i = 0;
    let j = 1;
    let minSubArray = Infinity;
    while (j < arr.length+1) {
        if (sum(arr.slice(i,j)) >= num) {
            minSubArray = Math.min(minSubArray,j-i);
            i++;
            j = i+1;
        } else {
            if(j === arr.length) {
                i++;
                j = i+1;
            } else {
                j++;
            }
        }
    }
    if (minSubArray === Infinity) return 0;
    return minSubArray;
}

const sum = (arr) => {
    let summ = 0;
    for (let i = 0; i<arr.length; i++) {
        summ += arr[i];
    }
    return summ;
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7));