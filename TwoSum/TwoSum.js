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

    let add = 0;
    let arr = [];

    for (let i = 0; i < nums.length; i++) {
        add = add + nums[i];
        console.log(add);

        if (!arr.includes(i)) {
            console.log("HI====", arr.push(nums.indexOf(nums[i])) - 1);

            if (add > target && arr.length > 2) {
                arr.pop();
                add = add - nums[i - 1];
                /* if (arr.length > 2) {*/

                if (add === target && arr.length > 2) {
                    arr.pop();
                    console.log("HI==========", arr.push(nums.indexOf(nums[i])));
                    
                    return arr;

                    
                } else {

                    return arr;

                }
            }
        }

    }

};

let nums = [3, 2, 4], target = 7;

console.log(twoSum(nums, target));