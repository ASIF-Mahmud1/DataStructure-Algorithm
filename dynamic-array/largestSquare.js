/**
 * @param {number[][]} rectangles
 * @return {number}
 */
 var countGoodRectangles_1 = function(rectangles) {
     let dimension={

     }
    rectangles.forEach((arr)=>{
        const maxLen= Math.min(...arr)
        dimension[maxLen]= dimension[maxLen]?dimension[maxLen]+1:1 
    })
    console.log(dimension);
  let result=  Object.entries(dimension).sort((first,second)=> {
        console.log(Number(second[0]));
       return Number(second[0])- Number(first[0])
    })
    console.log(result[0][0]);
    return result[0][1]
};

var countGoodRectangles = function(rectangles) {
    let maxDim=0
    let count=0
    rectangles.forEach((rec)=>{
        const maxLen= Math.min(...rec)
        const currentMax= Math.max(maxDim,maxLen)
        {
            if(currentMax===maxLen)
            {
                count++
            }
            else if (maxLen>maxDim)
            {
                maxDim=maxLen
                count=1
            }

        }
    })
    return count
}

const rectangles = [[5,8],[3,9],[5,12],[16,5]]

console.log(countGoodRectangles(rectangles))