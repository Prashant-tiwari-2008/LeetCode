console.log("Merge Two Sorted Array")

// Example 1:
Input: nums1 = [1, 2, 3, 0, 0, 0], m1 = 3, nums2 = [2, 5, 66], n1 = 3
Output: [1, 2, 2, 3, 5, 6]

// Example 2:
Input: nums3 = [1], m = 1, nums4 = [], n = 0
Output: [1]

// Example 3:
Input: nums5 = [0], m = 0, nums6 = [1], n = 1
Output: [1]

// first way
function MergeArray(list1, m, list2, n) {
   for(let i=m, j=0; j < n ; j++, i++){
        list1[i] = list2[j]
   }
   return list1.sort()
}

// console.log(MergeArray(nums1, m1, nums2, n1));

// Second way
function MergeArray1(nums1,m1,nums2,n1){
    let i = m1-1;
    let j = n1-1;
    let k = m1+n1-1;
    while(j >= 0){
        if(i >=0 && nums1[i] > nums2[j]){
            nums1[k--] = nums1[i--]
        }else{
            nums1[k--] = nums2[j--]
        }
    }
    return nums1;
}

console.log(MergeArray1(nums1, m1, nums2, n1));
