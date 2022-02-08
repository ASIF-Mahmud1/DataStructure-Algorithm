/**
 * @param {number[][]} 
 * @return {number}
 */
var countNegatives = function (grid) {
    let count = 0
    let rows = grid.length;
    let columns = grid[0].length
    for (let i = 0; i < rows; i++) {
        if (grid[i][0] > -1) {
            count = count + grid[i].filter((item) => item < 0).length
        }
        else {
            count = count + (rows - i) * columns
            break
        }
    }
    return count
    /*  Optimal solution
         const result= grid.reduce((acc, current)=>{
                return acc+  current.filter(item=> item<0).length
            },0)
            return result
    */

};

const grid = [[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]

const result = countNegatives(grid)
console.log(result)