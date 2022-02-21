/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
 var countBalls = function(lowLimit, highLimit) {
    let maxBallCount=0
    let table = new Map()

    for(let i=lowLimit;i<= highLimit;i++)
    {
        let sum= i.toString().split("").reduce((acc,current)=> acc+Number(current),0)
        if(table.has(sum))
        {
           let newCount= table.get(sum) +1
           table.set(sum,newCount)

           if(newCount>maxBallCount)
           {
               maxBallCount=newCount
           }
        }
        else 
        {
            table.set(sum,1)

            if(1>maxBallCount)
            {
                maxBallCount=1
            }
        }
    }

    return maxBallCount

};

let lowLimit = 1, highLimit = 10

const result= countBalls(lowLimit,highLimit)
console.log(result);