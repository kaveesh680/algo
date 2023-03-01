const flattened = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newArr = newArr.concat(flattened(arr[i]));
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(flattened([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));