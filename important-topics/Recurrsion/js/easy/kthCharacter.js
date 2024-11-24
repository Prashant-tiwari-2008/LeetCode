/**
 * @param {number} k
 * @return {character}
 */

var kthCharacter = function (k) {
    let start = 'a';
    const test = (k, word) => {
        if (word.length >= k) {
            return word[k-1];
        }

        let newWord = '';
        for (let i = 0; i < word.length; i++) {
            let newChar = word.charCodeAt(i);
            newWord = newWord + String.fromCharCode(++newChar);
        }
        return test(k, word + newWord);
    }
    return test(k, start)
};


console.log(kthCharacter(5));

// chatGpt_solution
var kthCharacter = function (k) {
    let currentLength = 1; // Length of the current "string" simulation
    let level = 0; // Tracks the recursive "level" of transformations
    
    // Find the required level where the length covers k
    while (currentLength < k) {
        level++;
        currentLength = currentLength * 2; // Each level doubles the length
    }
    
    // Simulate the string retrieval
    while (level > 0) {
        let midPoint = currentLength / 2;
        if (k > midPoint) {
            // If k is in the second half, adjust it for the transformed section
            k -= midPoint;
        }
        currentLength /= 2; // Move to the previous "level"
        level--;
    }
    
    return String.fromCharCode(96 + k); // Convert to 'a' + (k - 1)
};
