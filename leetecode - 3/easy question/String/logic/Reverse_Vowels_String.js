var reverseVowels = function(s) {
    let vowels = ['a','e','i','o','u'];
    let arr = [];
    for(let x of s){
        if(vowels.includes(x.toLowerCase())){
            arr.push(x);
        }
    }  
    let i = arr.length-1;
    let res = "";
    for(let x of s){
        if(vowels.includes(x.toLowerCase())){
            res+=arr[i];
            i--;
        } else{
            res+=x
        }
    }
    return res;
  };