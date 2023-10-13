/* Problem no. 668 */

/* Nearly everyone has used the Multiplication Table. The multiplication table of size m x n is an integer matrix mat where mat[i][j] == i * j (1-indexed).

Given three integers m, n, and k, return the kth smallest element in the m x n multiplication table. */


/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (m, n, k) {

    let array = [];

    for (let i = 0; i < m; i++) {

        let newArr = []

        for (let j = 0; j < n; j++) {

            let ele = (i + 1) * (j + 1);
            newArr.push(ele);
        }
        array.push(newArr);
    }

    let result = array.flat(Infinity).sort((a,b) => a - b);

    console.log(result[k-1]);

   

};

findKthNumber(2, 3, 6);