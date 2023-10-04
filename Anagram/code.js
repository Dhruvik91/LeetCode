/* Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]] */


/**
 * @param {string[]} strs
 * @return {string[][]}
 */


var groupAnagrams = function (str) {

    let map = new Map();

    for (let value of str) {

        let sameValue = value.split("").sort().join("");

        if (!map.has(sameValue)) {

            map.set(sameValue, [value]);

        }
        else {
            map.get(sameValue).push(value);
        }

    }

    return Array.from(map.values());


};


let str = ["a"]

console.log(groupAnagrams(str));