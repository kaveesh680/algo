const sumZero = (arr) => {
    if (arr.length === 0) return undefined;
    let left = 0;
    let right = arr.length-1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) return [arr[left], arr[right]];
        else if (sum > 0) right--;
        else left++;
    }
}

console.log(sumZero([-3,-2,-1,1,2,3,4]));