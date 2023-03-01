const fibbonaci = (num) => {
    if (num === 0) return 0;
    if (num === 1) return 1;
    return fibbonaci(num-1)+ fibbonaci(num-2);
}

console.log(fibbonaci(10));