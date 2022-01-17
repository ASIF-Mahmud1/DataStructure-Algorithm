/**
 * @param {number} n
 * @return {number}
 */
 var tribonacci = function(n) {
    let F= new Array(38)
   F[0] = 0, F[1] = F[2] = 1
    console.log(F[2]);
   for(let i=0;i<=n ;i++)
       {
           F[i+3]= F[i] + F[i+1] + F[i+2]
       }
    
    return F[n]
    
    
};
const n = 0

const result= tribonacci(n)
console.log(result);