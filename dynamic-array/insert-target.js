/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
 var createTargetArray_1 = function(nums, index) {
    let target=[]
    index.forEach((ele,idx)=>{
    const left= target.slice(0,ele)
    const right= target.slice(ele)
    left.push(nums[idx])
    target= [...left, ...right]
  
   })
   return target
};

var createTargetArray = function(nums, index) {
    let target=[]
    index.forEach((ele,idx)=>{
    target.splice(ele, 0, nums[idx]);
   })
   return target
};
const nums = [1,2,3,4,0], index = [0,1,2,3,0]
console.log(createTargetArray(nums,index));

