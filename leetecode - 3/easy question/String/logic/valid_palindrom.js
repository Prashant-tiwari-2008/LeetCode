console.log("Valid Palindrom");


var isPalindrome = function(s) {
    let ispalin = true;
    let newString = '';
    let regex = /^[a-z0-9]+$/i;
    for(let i=0;i<s.length;i++){
        if(regex.test(s[i])){
            newString += s[i].toLowerCase();
        }
    }
    
    let length = newString.length;
    for(let j=0, x=length-1;j < length/2; j++,x--){
        if(newString[j] !== newString[x]){
            return false
        }
    }
    return ispalin
}



s2 = "A man, a plan, a canal: Panama";
s1 = "race a car";
s3="ab_a"
 console.log(isPalindrome(s2))
 console.log(isPalindrome(s1))
console.log(isPalindrome(s3))

//==========>>>> Best SOlution
var isPalindrome = function(s) {
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
    for (let i = 0; i < s.length; i += 1) {
      if (s[i] !== s[s.length - 1 -i]) {
        return false;
      }
    }
    
    return true;
};