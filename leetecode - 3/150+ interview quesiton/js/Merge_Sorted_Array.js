console.log("Merge Two sorted Array")
function mergeSortedArray(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = (m + n - 1);
    while(i >= 0 && j >= 0){
        if(nums1[i] > nums2[j]){
            nums1[k--] = nums1[i--]
        }else{
            nums1[k--] = nums2[j--]
        }
    }
    while(j>=0){
        nums1[k--] = nums2[j--]
    }
    return nums1;
}


// case 1 :
let arr1 = [1, 2, 3, 0, 0, 0]
let m = 3;
let arr2 = [2, 5, 6, 7]
let n = 3;
console.log(mergeSortedArray(arr1, m, arr2, n))