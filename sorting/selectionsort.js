let arr = [-12, 33, 556, 11, 1, 88, 44]

function selectionsort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (min !== i) {  // just for sake why would change swap same index to same index so do min index ! == i
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp
        }
    }
    return arr



}

let result = selectionsort(arr);
console.log(result)