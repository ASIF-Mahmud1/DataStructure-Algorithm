/**
 * @param {number[][]} mat
 * @return {number}
 */
 var diagonalSum = function(mat) {
    let sum=0
    let dimension= mat.length
    for(let i=0;i<dimension;i++)
    {
        for(let j=0;j<dimension;j++)
        {
            if(i==j)
            {
                sum= sum+ mat[i][j]
            }
            if(dimension==i+j+1)
            {
                sum= sum+ mat[i][j]
            }
        }
    }
    if(dimension===0 ||( dimension%2 !=0))
    {
        const medianPos= ((dimension+1)/2)-1
        const median= mat[medianPos][medianPos]
      
       sum =sum- median
    }
    return sum
};
const mat = [[1,2,3],
[4,5,6],
[7,8,9]]

const result= diagonalSum(mat)
console.log(result);

/**
 * Try to undestand this solution: 
 * https://leetcode.com/problems/matrix-diagonal-sum/discuss/939505/JavaScript-Simple-solution-using-two-pointers-with-explanation-or-O(n)
 */