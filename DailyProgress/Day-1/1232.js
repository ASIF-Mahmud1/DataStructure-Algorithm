/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
 var checkStraightLine = function(coordinates) {
    let gradient= null
    let straightLine= false
    
    for(let i=0;i<coordinates.length-1;i++)
    {
      
        let secondPoint= coordinates[i+1]
        let firstPoint= coordinates[i]
        let currentGradient= (secondPoint[1]- firstPoint[1])/ ( secondPoint[0]- firstPoint[0] )
        if(i==0)
        {
            gradient= currentGradient
        }
        if(currentGradient== gradient)
        {
            straightLine= true
        }
        else if(Math.abs(currentGradient)==Math.abs( gradient) && Math.abs( gradient) ===Infinity)
        {
            straightLine= true
        }
        else 
        {
            straightLine= false
        }
        console.log(currentGradient ," ", gradient);
    }
    return straightLine
};

const coordinates =  [[0,0],[0,1],[0,-1]]
const result= checkStraightLine(coordinates)
console.log( result);