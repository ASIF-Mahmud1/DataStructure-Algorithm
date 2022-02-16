/**
 * @param {string} formula
 * @return {string}
 */

const table= ['p', 'sum', "divide", "divide", "divide", "divide", "divide", "divide", "divide", "divide", "divide", "divide", "divide", "divide", "divide", "divide", "divide", "divide", "divide", "divide", "divide", "divide", "divide", "divide"]

 var stringsBetweenSpecialCharachter = function(list ) {
    let result= ''
   for(let i=0;i<list.length;i++)
   {
  
       if(list[i]==="$")
       {
          let processed= list.slice(i+1, list.length)
          let next$= processed.indexOf("$")
          if(next$!==-1)
          {
            const query= processed.substring(0,next$).trim()
            if(table[query]===undefined)
            {
                result= result+list[i]
            }
            else 
            {
                result=result+ table[query]
                 i= i+ (processed.substring(0,next$).trim()).length
            }
            
          }

       }
       else 
       {
          result= result+list[i]
       }
   }

   return result
    
};


const formula = "$0$ +$5$+ 5x+3+ $26$"
const result= stringsBetweenSpecialCharachter(formula)
console.log(result)