function findDifferenceValue(firstString, secondString) {
    if (secondString.length === 0) return 1;
    if (secondString === firstString) return 0;
    let  i = 0;
    let j = 0;
    let maxIndex = -Infinity;
    let minIndex = Infinity;
    console.log(firstString.length,secondString.length);
    while (i < firstString.length && j < secondString.length) {
        if (firstString[i] === secondString[j]) {

            i++;
            j++;
        } else {
            maxIndex = Math.max(j,maxIndex);
            minIndex = Math.min(j,minIndex);
            j++;
        }
    }
    console.log(maxIndex,minIndex);
    if (maxIndex === -Infinity && minIndex === Infinity && firstString.length > secondString.length) return 0;
    if (maxIndex === -Infinity && minIndex === Infinity && firstString.length < secondString.length) {
        maxIndex = secondString.length-1;
        minIndex = firstString.length;
    }
    console.log(maxIndex,minIndex);
    return maxIndex-minIndex+1;
}

console.log(findDifferenceValue('AILXFTYPSKFAASQOHHSQMHRGRUASWGSFFAXUHLFKBFWSLKYWSZOPJIECKTEXHNVPLUKILNBQIRRMYDNXJLBZAYEETRENKRECDZSF','BLKMZJMMIBJJZSXNDIPNMQEEDAZORSEEANGLAUUFIISRKAZVHYNIRONDIAQHFPQUQRWZSCLJGRZLFNRXTANDQWBVEUXMOUHGXLMR'));
// console.log(findDifferenceValue('A', 'B'));
// console.log(findDifferenceValue('ABACABA', 'ABA'));
// console.log(findDifferenceValue('ABA', 'ABACCA'));
// AILXFTYPSKFAASQOHHSQMHRGRUASWGSFFAXUHLFKBFWSLKYWSZOPJIECKTEXHNVPLUKILNBQIRRMYDNXJLBZAYEETRENKRECDZSF
// BLKMZJMMIBJJZSXNDIPNMQEEDAZORSEEANGLAUUFIISRKAZVHYNIRONDIAQHFPQUQRWZSCLJGRZLFNRXTANDQWBVEUXMOUHGXLMR