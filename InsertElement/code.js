/* Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4 */


function binarySearch(arr, target) {

    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {

        let mid = Math.floor((start + end) / 2)

        if (arr[mid] < target) {
            start = mid + 1; 
        }else {
            end = mid - 1
        }

    }
    return start;

}

const array = [1,3,5,6];


console.log(binarySearch(array, 2));

/* function addElement(array, target) {

    if (!binarySearch(array,target)) {

        array.push(target);
        array.sort((a,b) => a - b);
    }

    let indexValue = binarySearch(array,target)

    return (indexValue);

}

console.log(addElement(array,2)); */