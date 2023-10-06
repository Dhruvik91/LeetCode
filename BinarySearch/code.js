/* Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:
 
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1] */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var searchRange = function (nums, target) {

    let map = new Map();

    for (let i = 0; i < nums.length; i++) {


        if (target == nums[i]) {

            map.set(i, target);

            console.log(i);
        }

    }

    return Array.from(map.keys()).length !== 0 ? Array.from(map.keys()) : [-1, -1];

};


let arr = [1, 2, 3, 4, 5, 7, 5];

console.log(searchRange(arr, 5));