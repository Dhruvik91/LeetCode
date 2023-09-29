/* Given an integer array nums, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0.

You must write an algorithm that runs in linear time and uses linear extra space.

 

Example 1:

Input: nums = [3,6,9,1]
Output: 3
Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.
Example 2:

Input: nums = [10]
Output: 0
Explanation: The array contains less than 2 elements, therefore return 0. */


/**
 * @param {number[]} nums
 * @return {number}
 */

var maximumGap = function (nums) {

    if (nums.length < 2) { return 0 }

    const sortedArray = nums.sort((a, b) => a - b);

    const newArr = [];

    let element = 0;

    for (let i = 0; i < sortedArray.length - 1; i++) {

        element = sortedArray[i + 1] - sortedArray[i];

        if (element !== undefined) {

            newArr.push(element);
        }
    }
    return Math.max(...newArr);
};


const arr = [10];

console.log(maximumGap(arr));