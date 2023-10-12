/* You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

Return the single element that appears only once.

Your solution must run in O(log n) time and O(1) space.

 

Example 1:

Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2

Example 2:

Input: nums = [3,3,7,7,10,11,11]
Output: 10 */

/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNonDuplicate = function (nums) {

    let start = 0;
    let end = nums.length - 1;

    while (start < end) {

        let mid = Math.floor((start + end) / 2) + 1;

        if (mid % 2 == 1) {
            mid--;
        }

        if (nums[mid] != nums[mid + 1]) {
            end = mid;
        }
        else {
            start = mid + 2;
        }

    }
    return nums[start];

};

const nums = [3, 3, 7, 7, 10, 11, 11]

console.log(singleNonDuplicate(nums));