let str =  ["s","u", "d","h","i","r"]

// so here wil do swap(o,last) (1,last-1),(2,last -2)

//(i, s.length-1-i) (0,5-1)  // o will swap with last
//(i,s.length -1 -i) (1,5-2)   //  1st index swap with  second last

function reverstring(str){
   
  let len =  str.length;
  let halflen =  Math.floor(len/2)

  for(let i = 0 ;i<halflen; i++){

    let temp =  str[i];
    str[i] =  str[len-1-i]
    str[len-1-i] =  temp


  }
  return str;



}

let result =  reverstring(str)
console.log(result)


