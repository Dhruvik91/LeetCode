/* You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation. */

/* Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]] */


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */


var rotate = function (arr) {

    /*     let k = matrix.length - 1;
    
        let arr = [...matrix];
    
        console.log(arr);
    
        for (let i = 0; i < matrix.length; i++) {
    
            for (let j = 0; j < matrix[i].length; j++) {
    
                     arr[j][k] = matrix[i][j];
    
                    // console.log(matrix[j][i]);
            
            }
    
            k--;
        }
        console.log(arr); */


    let x = 0;
    let y = arr.length - 1;

    while (x < y) {

        for (let i = 0; i < y - x; i++) {

            let temp = arr[x][x + i];
            arr[x][x + i] = arr[y - i][x];
            arr[y - i][x] = arr[y][y - i];
            arr[y][y - i] = arr[x + i][y];
            arr[x + i][y] = temp;

        }
        x++;

        y--;
    }


    console.log(arr);
};



const arr =
    [
        [1, 2, 3, 20],
        [4, 5, 6, 21],
        [7, 8, 9, 22],
        [10, 11, 12, 23]
    ];

(rotate(arr));