const bubbleSort = (arr) => {
    let swap;
   for (let i = 0; i < arr.length; i++){
       swap = false;
       for (let j = 0; j < arr.length - i-1; j++) {
           if (arr[j] > arr[j+1]) {
               [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
               swap = true;
           }
       }
       if (!swap) break;
   }
   return arr;
}

const bubbleSort1 = (arr) => {
    let swap;
    for (let i = 0; i < arr.length; i++) {
        swap = false;
        for (let j = 0; j < arr.length-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1],arr[j]];
                swap = true;
            }
        }
        if (!swap) break;
    }
    return arr;
}

console.log(bubbleSort1([5,4,3,2,1]));
