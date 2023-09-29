/* Given an array of integers nums and an integer target, 

return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

You can return the answer in any order. */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let twoSum = function (nums, target) {

    let finalAnswer = [];

    for (let i = 0; i < nums.length; i++) {

        for (let j = 0; j < nums.length; j++) {

            let sum = 0;

            sum = nums[i] + nums[j];

            if (target == sum && (i !== j)) {

                finalAnswer.push(i, j);

                return finalAnswer;
            }

        }
    }
    
};

let nums = [3, 3], target = 6;

console.log(twoSum(nums, target));