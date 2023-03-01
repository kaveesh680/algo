const merge = (arr1,arr2) => {
    let i = 0;
    let j = 0;
    let sortedArr = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            sortedArr.push(arr2[j]);
            j++;
        } else if (arr1[i] === arr2[j]) {
            sortedArr.push(arr2[j]);
            sortedArr.push(arr1[i]);
            i++;
            j++;
        } else {
            sortedArr.push(arr1[i]);
            i++;
        }
    }
    // if (i !== arr1.length) {
    //     sortedArr = [...sortedArr, ...arr1.slice(i)]
    // }
    // if (j !== arr2.length) {
    //     sortedArr = [...sortedArr, ...arr2.slice(j)]
    // }
    while (i < arr1.length) {
        sortedArr.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        sortedArr.push(arr2[j]);
        j++;
    }
    return sortedArr;
}

const mergeSort = (arr) => {
    if (arr.length === 1 || arr.length === 0) {
        return arr;
    }
    let middle = Math.floor(arr.length/2);
    return merge(mergeSort(arr.slice(0,middle)),mergeSort(arr.slice(middle)));
}

console.log(mergeSort([6,5,4,3,2,1,0,-1,-3]))
// console.log(merge([1,3,5],[2,4,6]));


const merge = (arr1, arr2) => {
    let  i =0;
    let j = 0;
    let sortedArr = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j] ) {
            sortedArr.push(arr2[j]);
            j++;
        } else if (arr1[i] === arr2[j]) {
            sortedArr.push(arr1[i]);
            sortedArr.push(arr2[j]);
            i++;
            j++;
        } else {
            sortedArr.push(arr1[i]);
            i++
        }
    }
    while (i < arr1.length) {
        sortedArr.push(arr1[i])
    }
    while (j < arr2.length) {
        sortedArr.push(arr2[j])
    }
    return sortedArr;
}

const mergeSort = (arr) => {
    if (arr.length === 0 || arr.length === 1) return arr;
    let middle = Math.floor(arr.length/2);
    return merge(mergeSort(arr.slice(0,middle)), mergeSort(arr.slice(middle)))
}