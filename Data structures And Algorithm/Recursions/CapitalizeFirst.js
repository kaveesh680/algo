const capitalizeFirst = (arr) => {
    let newArr = [];
    if (arr.length === 1) {
        return capitalize(arr[0])
    }
    return newArr.concat(capitalize(arr[0]), capitalizeFirst(arr.slice(1)));
}

const capitalize = (str) => {
    return str[0].toUpperCase()+ str.slice(1);
}

console.log(capitalizeFirst(['car','taco','banana','df','edsds']));