const capitalizeWords = (arr) => {
    let newArr = [];
    if (arr.length === 1) return arr[0].toUpperCase();
    return newArr.concat(arr[0].toUpperCase(), capitalizeWords(arr.slice(1)));
}

console.log(capitalizeWords(['I', 'AM', 'LEARNING', 'RECURSION']));