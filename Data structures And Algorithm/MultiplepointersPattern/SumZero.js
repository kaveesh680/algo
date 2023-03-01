const SumZero =  (arr) => {
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        if (arr[i]+arr[j] === 0) return [arr[i], arr[j]];
        if ( i+1 === j) {
            i++;
            j = arr.length - 1;
        } else {
            j--;
        }
    }
}

console.log(SumZero([-3,-2,-1,0,1,2]));