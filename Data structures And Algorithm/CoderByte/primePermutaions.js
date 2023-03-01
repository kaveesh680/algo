const getPermutations = (num) => {
    let strNum = Array.from(num.toString()).map(val => Number(val));
    for (let perm in Math.permutations())
}

console.log(getPermutations(123));