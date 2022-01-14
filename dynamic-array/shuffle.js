/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {
    const result=[]
    for(let i=0;i< n;i++)
    {
        const ele =[nums[i], nums[n+i]    ]
        result.push(...ele)
    }
    return result
};

const list = [1,2,3 ,3,2,1,]

console.log(shuffle(list,3));