const countUpAndDown = (n) => {
    for (let i = 0; i <= n; i++) {
        console.log(i)
    }
    console.log('Going down');
    for (let j = n; j > 0; j--) {
        console.log(j);
    }
}

countUpAndDown(10);