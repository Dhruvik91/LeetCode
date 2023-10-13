/* Number 2085:

Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.


Example 1:

Input: words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]
Output: 2

*/

/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */

var countWords = function (arr, arr1) {

    let map = new Map();


    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr1.length; j++) {

            if (arr[i] == arr1[j] && !map.has(arr1[j])) {
                map.set(arr1[j], [1]);
            }

            if (arr[i] == arr1[j] && map.has(arr1[j])) {
                map.get(arr1[j]).push(1);
            }
        }
    }

    let count = 0;

    for (let values of map.values()) {
        if (values.length < 3) {
            count++;
        }
    }

    console.log(count);

};

const words1 = ["a", "a", "b", "c", "d"]
const words2 = ["a", "b", "c"]


countWords(words1, words2);