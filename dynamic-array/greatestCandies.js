/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
 var kidsWithCandies = function(candies, extraCandies) {
    const maxCandies= Math.max(...candies)
    const result= candies.map((candy)=>{
        if(candy+extraCandies >= maxCandies)
        {
            return true
        }
        else
        {
            return false
        }
    })

    return result
};


const candies = [2,3,5,1,3], extraCandies = 3

console.log(kidsWithCandies(candies,extraCandies));