/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {

    const currentIndex= Math.ceil(nums.length/2)-1

    const searching=(nums, target, currentIndex)=>{
         const currentNumber = nums[currentIndex]
         const leftIndex = Math.floor((0 + currentIndex) / 2)
         let righIndex = Math.ceil((nums.length + currentIndex) / 2)

         if (currentNumber === target) {
             return currentIndex
         }
         else if (leftIndex == currentIndex || currentIndex == righIndex) {
             return -1
         }

         else if (target < currentNumber)  //let tree
         {

             let nextIndex = Math.floor((0 + currentIndex) / 2)
             console.log("next going left ", nextIndex);

             return searching(nums, target, nextIndex)
         }
         else {

             let nextIndex = Math.floor((nums.length + currentIndex) / 2)
             console.log("next going right ", nextIndex);

             return searching(nums, target, nextIndex)
         }

     }


     const result = searching(nums, target, currentIndex)
     console.log(result);

    

};

const nums = [-1,0,3,5,9,12], target = 5


console.log(search(nums, target));