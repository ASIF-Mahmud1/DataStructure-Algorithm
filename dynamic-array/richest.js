/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth_1 = function(accounts) {
  const result=   accounts.map((bank)=>{
        return bank.reduce((previous, current)=> previous+ current)
    }).sort((first,second)=> second-first)
    return result[0] 
};

// Math.max
var maximumWealth = function(accounts) {
     const totalBalance= accounts.map((bank)=>{
          return bank.reduce((previous, current)=> previous+ current)
      })
     const result= Math.max(...totalBalance)
     return result
     
  };
const accounts = [[1,2,3],[3,2,1,9]]

console.log(maximumWealth(accounts));