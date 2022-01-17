/**
 * @param {number[]} nums
 * @return {number}
 */
 var subsetXORSum = function(nums) {
     let subSets=[[]]

    for(let i=0;i<nums.length;i++)
    {
       let duplicate=JSON.parse(JSON.stringify([... subSets]))
       let withoutCurrentNumber= [...subSets]
       let currentNumber= nums[i]
       duplicate.forEach((arr)=>{
           arr.push(currentNumber)
       })

        subSets= [...withoutCurrentNumber,...duplicate]
   
    }

    let sum=0

    subSets.forEach((sets)=>{
        if(sets.length!=0)
        {
          const result=  sets.reduce((accu,current)=>{
                return accu^current
            },0)

            sum=sum+result
        }
    })
    return sum
};

const  nums = [3,4,5,6,7,8]
const result= subsetXORSum(nums)
console.log(result);