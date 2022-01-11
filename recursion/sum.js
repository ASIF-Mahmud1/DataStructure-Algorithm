// const sum= (numbers,index)=>{
//   if(index==0)
//   {
//       return numbers[index]
//   }
//   else
//   {
//       return  numbers[index] + sum(numbers, index-1)
//   }
//  }

// const numbers= [ 1,5,7,-2]
// const result= sum(numbers, numbers.length-1)
// console.log("Result ",result);
// Time: O(n)
// Space O(n)

const sum= (numbers)=>{
    let length= numbers.length
  if(length ==0)
  {
      return 0
  }
  else
  {
      let rest=  numbers.slice(1) 
   
      return numbers[0]  + sum(rest)
  }
 }

const numbers= [ 5,6,9]
const result= sum(numbers)
console.log("Result ",result);
// Time: O(n^2)
// Space O(n)