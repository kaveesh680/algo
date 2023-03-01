const isSubsequence = (str1,str2) => {
    if (str2.length < str1.length) return false;
    let i = 0;
    let  j = 0;
    while (i < str1.length && j < str2.length) {
        if (str1[i] === str2[j]) {
            i++;
            j++
        } else {
            j++;
        }
    }
    if (i === str1.length) return true;
    else return false;
}

console.log(isSubsequence('sing', 'sting'));
