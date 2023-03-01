const stringCount = (str) => {
    let obj = {};
    let stri = str.toLowerCase();
    for (let i = 0; i < stri.length; i++) {
        // if (obj.hasOwnProperty(str[i])) {
        //     obj[str[i]] += 1;
        // } else {
        //     obj[str[i]] = 1;
        // }
        obj[stri[i]] = (obj[stri[i]] || 0) + 1;
    }
    return obj;
}

console.log(stringCount('kaveesh charuka madumal'));