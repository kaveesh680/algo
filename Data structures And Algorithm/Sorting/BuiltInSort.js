const compareNumber = (num1,num2) => {
    return num1 - num2;
}

const compareString = (str1,str2) => {
    return str1.length - str2.length;
}

console.log([3,7,1,3,7,9,4,23,1].sort(compareNumber));
console.log(['cs','d',''].sort(compareString));