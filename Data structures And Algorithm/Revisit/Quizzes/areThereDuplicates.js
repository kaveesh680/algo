const areThereDuplicates = (...values) => {
    if (values.length === 1) return false;

    let i = 0;
    let j = 1;
    while (j < values.length) {
        if (values[i] === values[j]) return true;
        else {
            if (j === values.length - 1) {
                i++;
                j = i+1;
            } else {
                j++;
            }
        }
    }
    return false;
}

const areThereDuplicates1 = (...values) => {
    return new Set(values).size !== values.length;
}

console.log(areThereDuplicates1(1,2,3,4,5,5));