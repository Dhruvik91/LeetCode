/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (arr) {

    let profit = 0;

    let max_Profit = 0;

    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            profit = arr[j] - arr[i];

            if (profit > 0) {

                if (profit > max_Profit) {

                    max_Profit = profit;
                }
            }

        }
    }

    return max_Profit;


};


let array = [5, 7, 8, 0];

console.log(maxProfit(array));