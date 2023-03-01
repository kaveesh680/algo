const averagePair = (arr,value) => {
    if (arr.length === 1) return false;
    let i = 0;
    let j = 1;
    while (j < arr.length) {
        if ((arr[i]+arr[j])/2 === value) return true;
        else {
            if (j === arr.length -1) {
                i++;
                j = i+1;
            } else j++;
        }
    }
    return false;
}

const averagePair1 = (arr,value) => {
    if (arr.length === 1) return false;
    let start = 0;
    let end = arr.length-1;
    while (start < end) {
        let avg = (arr[start]+ arr[end])/2;
        if ( avg === value ) return true;
        else if (avg > value) end--;
        else start++;
    }
    return false;
}

console.log(averagePair1([-1,0,3,4,5,6], 4));