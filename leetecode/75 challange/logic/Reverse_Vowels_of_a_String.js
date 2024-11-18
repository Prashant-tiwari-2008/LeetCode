console.log("Reverse Vowels of a String")


function reverseVowels(s) {
    debugger
    s = s.split("")
    let i = 0;
    let j = s.length - 1;
    let Vowels = ['a','e','i','o','u'];
    while (j > i) {
        if(Vowels.includes(s[i]) && Vowels.includes(s[j])){
            let temp = s[i];
            s[i] = s[j];
            s[j] = temp
            i++;
            j--;
        }
        if(!Vowels.includes(s[i].to) ){
            i++
        }
        if(!Vowels.includes(s[j])){
            j--
        }
    }
    return s.join("")
}

// let s = "hello";
let s = "leetcode"; //"leotcede"
console.log(reverseVowels(s));

//best 
// 1.
/**
 * @param {string} s
 * @return {string}
 */
 // a stack works and is simple. iterate through, and push onto
 // stack if its a vowel. then iterate again, this time if its a vowel,
 // pop out of stack and set the number. but uses O(n).

 // better approach is use double pointer and reverse along the way.

 // remember, if we need to reverse a sequence of things:
 // - would a stack work?
 // - would 2 pointer work?
 var reverseVowels_stack = function(s) {
    let stack = [];
    let isVowel = (c) => {
        let lower = c.toLowerCase();
        return (
            lower === "a" ||
            lower === "e" ||
            lower === "i" ||
            lower === "o" ||
            lower === "u"
        );
    };
    s = s.split("");
    for (let i = 0; i < s.length; i++) {
        if (isVowel(s[i])) {
            stack.push(s[i]);
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (isVowel(s[i])) {
            s[i] = stack.pop();
        }
    }
    return s.join("");
};

const reverseVowels = (s) => {
        let isVowel = (c) => {
        return 'aeiouAEIOU'.includes(c);
    };
    s = s.split("");

    let left = 0,
        right = s.length - 1;
    while (left < right) {
        if (!isVowel(s[left])) {
            left += 1;
        }
        if (!isVowel(s[right])) {
            right -= 1;
        }

        if (isVowel(s[left]) && isVowel(s[right])) {
            let temp = s[left];
            s[left] = s[right];
            s[right] = temp;
            left += 1;
            right -= 1;
        }
    }

    return s.join("");

}

//2.
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = "aeiouAEIOU";
	const array = [...s];
	let left = 0;
	let right = s.length - 1;

	while (left < right) {
		while (left < right && !vowels.includes(array[left])) {
			left++;
		}

		while (left < right && !vowels.includes(array[right])) {
			right--;
		}

		if (left < right) {
			[array[left], array[right]] = [array[right], array[left]];
			left++;
			right--;
		} 
    }
    
    return array.join("");
};