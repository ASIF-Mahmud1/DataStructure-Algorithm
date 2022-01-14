/**
 * @param {number[]} arr
 * @return {number}
 */


 var sumOddLengthSubarrays = function(arr) {  //odd length
    let result=0
   for(let  i=0;i<arr.length;i++)
   {
       for (let j=i;j<arr.length; j=j+2)
       {
         let slicingIndex=j+1
         if(slicingIndex<=arr.length)
         {
            const tempArr=   arr.slice(i,slicingIndex)
            console.log(tempArr);
             const temp= tempArr.reduce((acc,current)=> acc+current)
            result=result+temp
         }
         
       }
   }
   return result
};



// I have done this additionaly
var sumEvenLengthSubarrays = function(arr) {  //even length
    let result=0
   for(let  i=0;i<arr.length;i++)
   {
       for (let j=i;j<arr.length; j=j+2)
       {
         let slicingIndex=j+2
         if(slicingIndex<=arr.length)
         {
            const tempArr=   arr.slice(i,slicingIndex)
            console.log(tempArr);
             const temp= tempArr.reduce((acc,current)=> acc+current)
            result=result+temp
         }
         
       }
   }
   return result
};


const  arr = [1,4,2,5,3]

console.log (sumOddLengthSubarrays(arr))