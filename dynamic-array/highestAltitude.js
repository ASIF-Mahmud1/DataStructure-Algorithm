/**
 * @param {number[]} gain
 * @return {number}
 */
 var largestAltitude = function(gain) {
    let currentPeak=0
    let highestPeak= 0
    for(let i=0;i<gain.length;i++)
    {
    
        const nextPeak =currentPeak +gain[i]
        highestPeak= Math.max(highestPeak,nextPeak)
        currentPeak= nextPeak
    }
    return highestPeak
};

const gain = [-4,-3,-2,-1,4,3,2]

console.log(largestAltitude(gain));