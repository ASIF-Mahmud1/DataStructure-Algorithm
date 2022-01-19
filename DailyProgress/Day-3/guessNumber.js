/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */

var guess = (num) => {
    const pick = 6
    if (num === pick) {
        return 0
    }
    else if (pick < num) {
        return -1
    }
    else {
        return 1
    }
}

 var guessNumber = function(n) {
    let left=1, right= n
    while(left<=right)
    {
        let mid= Math.floor(left + (right-left)/2)
        let response = guess(mid)
        if(response===0)
        {
            return mid
        } 
        else if(response===1)
        {
            left= mid+1
        }
        else 
        {
            right=mid-1
        }
    }  
 
    return right
 };

 const result= guessNumber(10)  // check value of pick  in function guess

 console.log(result);

