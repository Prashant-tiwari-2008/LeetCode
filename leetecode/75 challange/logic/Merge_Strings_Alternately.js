console.log("Merge Strings Alternately")

// == word solution
function mergeString(w1,w2){
    let result = ''
    let length = w1.length + w2.length;
    let a = 0
    while((length > result.length) ){
        result += w1.charAt(a) + w2.charAt(a);
        a++;
    }
    return result
}

// let w1 = "abc";
// let w2 = "pqr";

let w1 = "ab";
let w2 = "pqrs";
console.log(mergeString(w1,w2));

function mergeString1(w1,w2){
   let minl = Math.min(w1.length,w2.length);
   let final = "";
   for(let i=0;i<minl;i++){
    final += w1[i] + w2[i]
   }
   if(minl === w1.length){
    final += w2.substring(minl)
   }
   if(minl === w2.length){
    final += w1.substring(minl)
   }
   return final
}

console.log(mergeString1(w1,w2));