const getDigit = (num,place) => {
    // let str = num.toString();
    // if(str.length <= place) return 0;
    // return str[str.length-1-place];
    return Math.floor(Math.abs(num)/Math.pow(10,place))%10;
}

const digitCount = (num) => {
    // let str = num.toString();
    // return str.length;
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const mostDigits = (nums) => {
    let maxCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if(maxCount < digitCount(nums[i])) {
            maxCount = digitCount(nums[i]);
        }
    }
    return maxCount;
}

const radixSort = (nums) => {
    const maxDigitCount = mostDigits(nums);
    console.log(maxDigitCount);
    for (let i = 0; i < maxDigitCount; i++) {
        let digitBuckets = Array.from({length: 10},() => []);
        for (let j = 0; j < nums.length; j++) {
            let digit = getDigit(nums[j],i);
            digitBuckets[digit].push(nums[j]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

// console.log(radixSort([54,643,2,1,565,3434,54]));
console.log(getDigit(123,3));