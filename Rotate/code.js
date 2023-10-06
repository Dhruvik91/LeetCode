/* You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation. */

/* Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]] */


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */


var rotate = function (matrix) {

    let k = matrix.length - 1;

    for (let i = 0; i < matrix.length; i++) {

        for (let j = 0; j < matrix.length; j++) {


        }

        k--;
    }
    console.log(matrix);
};



const arr =
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

console.log(rotate(arr));