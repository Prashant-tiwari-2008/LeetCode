

var removeDuplicates = function (nums) {
    //    let hash = {};
    //     for (let i = 0; i < nums.length;) {
    //         hash[nums[i]] = hash[nums[i]] + 1 || 0;
    //         if(hash[nums[i]]){
    //             nums.splice(i,1);
    //         }else{
    //             i++
    //         }
    //     }
    //     return nums.length/
    
    // 2nd way
    
     if (nums.length === 0) return 0; // Edge case for empty array
    
        let i = 0; // Pointer for unique elements
    
        for (let j = 1; j < nums.length; j++) {
            if (nums[j] !== nums[i]) {
                i++; // Move to the next position for unique elements
                nums[i] = nums[j]; // Update the unique position with the current value
            }
        }
    
        return i + 1; // New length of the array with unique elements
    };