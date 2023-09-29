/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {

    // let left = 0, right = 0, top = 0, bottom = 0;

    for (let row = 0; row < grid.length; row++) {

        console.log(`The row number ${row}`, grid[row]);

        for (let elements = 0; elements < grid[row].length; elements++) {

            

            console.log(grid[row][elements]);
        }
    }

};

const grid = [

    [0, 1, 0, 0],
    [0, 1, 0, 1],
    /* [0, 1, 0, 0],
    [1, 1, 0, 0] */
]

islandPerimeter(grid);