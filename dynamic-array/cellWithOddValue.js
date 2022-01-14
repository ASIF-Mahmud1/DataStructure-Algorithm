/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
 var oddCells = function(m, n, indices) {
    const init =initArray(m,n)
};

const initArray=(row, column)=>{
   const result= []
   for(let i=0;i<row;i++)
   {
       let temp= [...new Array(column).fill(0)]
       console.log(temp);
       result.push(temp)
   }
   return result
}

const m = 2, n = 3, indices = [[0,1],[1,1]]

