/* Given an integer x, return true if x is a 
palindrome
, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. 
From right to left, it becomes 121-. Therefore it is not a palindrome. */

const { realpath } = require("fs");



/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (y) {

    if (y < 0) { return false };

    let arr = [...y.toString()];

    let newArray = arr.join(",");

    let reversedArray = [...(arr.reverse())].join(',');

    return reversedArray === newArray;


};

console.log(isPalindrome(1110));