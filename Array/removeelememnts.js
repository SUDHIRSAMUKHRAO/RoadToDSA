
let nums = [11,44,44,56,77]
var removeElement = function(nums, val) {
    let x = 0;

    for(let i = 0;i<nums.length;i++){
        //shift elememnt to left if its not eqaul to value
        if(nums[i]!= val){
         nums[x] = nums[i]
         x = x +1

        }

    }
     return x
    
    
    };

let result = removeElement(nums)
console.log(result)