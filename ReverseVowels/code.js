/* Problem no. 345, Reverse Vowels of a String */

/* Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede" */

/**
 * @param {string} s
 * @return {string}
 */

var reverseVowels = function (s) {

    const arrayOfVowels = ['a', 'e', 'i', 'o', 'u'];
    const arrayOfVowelsOfUppercase = ["A", "E", "I", "O", "U"];
    const arrayOfString = s.split("");
    let arr = new Array();
    let str = [];

    for (let i = 0; i < arrayOfString.length; i++) {
        if (arrayOfVowels.includes(arrayOfString[i]) || arrayOfVowelsOfUppercase.includes(arrayOfString[i])) {
            arr.push(arrayOfString[i]);
        }
    }

    let j = arr.length - 1;

    for (let i = 0; i < arrayOfString.length; i++) {

        str.push(arrayOfString[i]);

        if (arrayOfVowels.includes(arrayOfString[i]) || arrayOfVowelsOfUppercase.includes(arrayOfString[i])) {
            str.splice(i, 1, arr[j]);
            j--;
        }
    }

    let string = str.join('');
    console.log(string);
};


const s = "aA";

(reverseVowels(s));