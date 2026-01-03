

let name = "sudhir"


function reversestring(str){

   let reverse = ""
     
   for(let i = str.length-1;i>=0;i--){
     reverse =  reverse + str[i]
     

   }
   return reverse
     

}


let result = reversestring(name)
console.log(result)