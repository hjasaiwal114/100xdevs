/**
 * @param {number{}} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersection = function(nums1, nums2) {
    let uniqueNums1 = new Set(nums1);
    let uniqueNums2 = new Set(nums2);
    let newList = [];

    uniqueNums2.forEach(value => {
        if (uniqueNums1.has(value)) {
            newList.push(value);
        }
    });

    return newList;
}