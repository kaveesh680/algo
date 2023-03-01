const averagePair = (arr,num) => {
    if (arr.length < 2) return false;
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        let avg = (arr[i]+arr[j])/2;
        if (avg === num) return true;
        else if (avg < num) {
            i++;
        } else {
            j--;
        }
    }
    return false;
}

