
let num =  7776666333

function reversenumber(num){
let reverse = 0;

   while (num>0){
     reverse =  reverse * 10 + (num%10)
     num = Math.floor(num/10)


   }
   return reverse


}

let result = reversenumber(num)
console.log(result)