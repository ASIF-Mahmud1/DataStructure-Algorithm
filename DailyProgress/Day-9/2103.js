/**
 * @param {string} rings
 * @return {number}
 */
 var countPoints = function(rings) {
    let output=0
    let table= new Map()

    for(let i=0;i<rings.length;i=i+2)
    {
      let color= rings[i]
      let rod= rings[i+1]
      if(table.has(rod))
      {
    
        if((table.get(rod)).size< 3 )
        {
           table.set(rod, (table.get(rod).add(color)  ) )
           if((table.get(rod)).size===3)
           {
               output++
           }

         
        }

      }
      else 
      {
        table.set(rod, new Set(color)  )
      }
    }
  
    return output

};

const rings = "B0R0G0R9R0B0G0"
const result= countPoints(rings)
console.log(result);