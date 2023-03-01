const collectString = (obj) => {
    let arr = [];
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            arr.push(obj[key]);
        } else {
            if (typeof obj[key] === 'object') {
                arr = [...arr, ...collectString(obj[key])];
            }
        }
    }
    return arr;
}

const obj = {
    stuff: "foo",
    ddd: [],
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectString(obj));