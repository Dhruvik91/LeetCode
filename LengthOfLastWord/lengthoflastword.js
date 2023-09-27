/* Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5. */


var lengthOfLastWord = function (s) {


    let unspacedString = s.split(' ');

    let newArr = [];

    for (let values of unspacedString) {

        if (values !== '') {

            newArr.push(values);
        }
    }

    let finalAnswer = newArr[newArr.length - 1];

    return finalAnswer.length;
}


let s = " Hello   my         name name is World is hero   kingsalyer  ";

console.log(lengthOfLastWord(s));
