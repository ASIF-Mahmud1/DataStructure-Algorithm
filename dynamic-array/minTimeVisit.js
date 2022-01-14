/**
 * @param {number[][]} points
 * @return {number}
 */
 var minTimeToVisitAllPoints = function(points) {
     let steps=0
    for(let i=0;i<points.length-1;i++)
    {
      const firstPont= points[i]
      const secondPoint= points[i+1]

      const xDiff= Math.abs (firstPont[0] - secondPoint[0])
      const yDiff= Math.abs(firstPont[1] - secondPoint[1])
    
      const max= Math.max(xDiff,yDiff)
      const min= Math.min(xDiff,yDiff)

      const diiference= Math.abs(max-min)
      if(diiference===0)
      {
        steps=steps+ min  // or max , both will work
      }
      else 
      {
        steps=steps+ diiference+ Math.abs(min)
      }
    }
   return steps
};

const points = [[3,2],[-2,2]]

console.log(minTimeToVisitAllPoints(points))