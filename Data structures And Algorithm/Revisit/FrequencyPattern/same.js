const same = (arr1,arr2) => {
    if (arr1.length !==  arr2.length) {
        return false;
    }
    let frequencyPattern1 = {};
    let frequencyPattern2 = {};

    for (let val of arr1) {
        frequencyPattern1[val] = (frequencyPattern1[val] || 0) + 1;
    }

    for (let val of arr2) {
        frequencyPattern2[val] = (frequencyPattern2[val] || 0) + 1;
    }

    for ( let key in frequencyPattern1) {
        if (!(key**2 in frequencyPattern2)) return false;
        if (frequencyPattern1[key] !== frequencyPattern2[key**2]) return false;
    }
    return true;
}

console.log(same([1,2,3],[1,4,9]));