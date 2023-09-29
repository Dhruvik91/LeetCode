/* Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5. */


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */


var findMedianSortedArrays = function (nums1, nums2) {

    const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);

    const arrayLength = mergedArray.length;

    if (arrayLength % 2 !== 0) {

        const median = mergedArray[Math.ceil(arrayLength / 2) - 1];

        return (median);
    }

    else {

        const median = (mergedArray[Math.ceil(arrayLength / 2) - 1] + mergedArray[Math.ceil(arrayLength / 2)] ) / 2;

        return median;
    }


};


const a = [1, 3, 2];

const b = [4, 6, 9];


console.log(findMedianSortedArrays(a, b));