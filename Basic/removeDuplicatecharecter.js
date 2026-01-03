

let str = "programmer"

function removeduplicateschar(str)
{

    let dup = ""

  for(let i = 0;i<str.length;i++){
      if(!dup.includes(str[i])){
        dup = dup + str[i]
      }

  }
 return dup
}

let result = removeduplicateschar(str)
console.log(result)