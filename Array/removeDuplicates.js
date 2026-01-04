
let num = [90,55,343,121]
//remoove dupliactes from array in place

function removeDuplicates(nums){
    let x = 0;

    for(let i =  0;i<nums.length;i++){
     if(arr[i]>arr[x]){
    x = x +1;
    arr[x] =  arr [i]



     }

  }
return x +1

}


let result = removeDuplicates(num)
console.log(result)