const naiveStringSearch = (str1,str2) => {
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
        let innerCount = 0;
        for (let j = 0; j < str2.length; j++) {
            if (str2[j] === str1[i+j]) {
                innerCount++;
            } else {
                break;
            }
        }
        if (innerCount === str2.length) count++;
    }
    return count;
    // let count = 0;
    // for (let i = 0; i < str1.length; i++) {
    //     if(str1.slice(i,i+str2.length) === str2) count++;
    // }
    // return count;
}

console.log(naiveStringSearch('hahahads0','ha'));