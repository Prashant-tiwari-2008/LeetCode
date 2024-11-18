console.log("Merge Two Sorted array")


// Example 1:
Input: nums1 = [1, 2, 3, 0,0,0], m = 3, nums2 = [1, 2, 5], n = 3
Output: [1, 2, 2, 3, 5, 6]

// Example 2:
Input: nums3 = [1], m = 1, nums4 = [], n = 0
Output: [1]

// Example 3:
Input: nums5 = [0], m = 0, nums6 = [1], n = 1
Output: [1]

// Not working in leetcode
function MergeArray(list1, list2) {
    let list2Index = 0;
    let length = list1.length + list2.length;
    for (let i = 0; i < length; i++) {
        if (!(list1[i] == 0 && list2[list2Index] == 0)) {
            if (list1[i] === list2[list2Index] || list1[i] > list2[i]) {
                list1.splice(i, 0, list2[list2Index])
                list2Index++;
                i++;
            }else if(list1[i+1] > list2[list2Index]){
                list1.splice(i+1, 0, list2[list2Index])
                list2Index++;
            }
        }else{
            list1.splice(i,1)
        }
    }
    return list1
}

//with reduce
function MergeArray1(list1, list2) {
    let x = [...list1, ...list2]
    return x.sort((a, b) => a - b)
}



var mergeTwoLists = function (l1, l2) {
    // If either list is empty, return the other list's node
    if (l1 == null) return l2;
    if (l2 == null) return l1;

    // If l1 is lower
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
    // If l2 is lower
    else {
        l2.next =mergeTwoLists(l1, l2.next);
        return l2;
    }
};

// console.log(MergeArray(nums1, nums2))
// console.log(MergeArray(nums3, nums4))
// console.log(MergeArray(nums5, nums6))

console.log(mergeTwoLists(nums1, nums2))
console.log(mergeTwoLists(nums3, nums4))
console.log(mergeTwoLists(nums5, nums6))

// console.log(MergeArray1(nums1, nums2))



