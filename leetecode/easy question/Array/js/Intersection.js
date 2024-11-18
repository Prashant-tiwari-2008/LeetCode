const nums1 = [1, 2, 2, 1]
const nums2 = [2, 2]

const nums3 = [4, 9, 5]
const nums4 = [9, 4, 9, 8, 4]

//==========>> My Solution
function Intersection(arrayOne, arraytwo) {
    let objOne = {}
    let objTwo = {}
    let result = []
    for (let num of arrayOne) {
        objOne[num] =  1
    }

    for (let num of arraytwo) {
        objTwo[num] =  1
    }

    for (num in objOne) {
        if (objTwo[num]) {
            result.push(num)
        }
    }
    return result;
}

console.log(Intersection(nums1, nums2))
console.log(Intersection(nums3, nums4))

// ============>> Best Solution
var intersection = function(nums1, nums2) {
    let obj1={};
         let obj2={};
         let intersects=[];
 
         nums1.forEach(function(value){
             obj1[value]=1;
         });
 
         nums2.forEach(function(value){
             obj2[value]=1;
         });
 
         for(i in obj1){
             if(obj2[i]){
                 intersects.push(i);
             }
         }
         return intersects;
 };