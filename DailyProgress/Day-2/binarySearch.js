/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


 var search = function(nums, target) {
  let left= 0, right= nums.length-1
  if(nums.length===0)
  {
      return -1
  }
  while(left<=right)
  {
      let mid = left + (right - left) / 2
      if(nums[mid]===target)
      {
          return mid
      }
      else if (nums[mid]<target)
      {
        left= mid+1
      }
      else 
      {
        right= mid-1
      }
  }
  return -1
};

const nums = [-1,0,2,3,5,9,12], target = 2
const result= search(nums,target)
console.log(result);