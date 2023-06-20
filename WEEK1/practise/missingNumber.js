/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var sortNums = nums.sort((a,b) => a-b);

    if (sortNums[0] != 0) {
        return 0;
    }

    for(var i = 0; i<sortNums.length; i++) {
        if (sortNums[i + 1] - sortNums[i] != 1) {
            return sortNums[i] + 1;
        }
    }

    return sortNums[sortNums.length -1] + 1;
};