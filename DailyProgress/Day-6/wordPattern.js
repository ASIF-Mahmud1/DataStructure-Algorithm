/**
 * @param {string} firstString
 * @param {string} secondString
 * @return {boolean}
 */

 const checkIsomorphism=(firstString,wordString)=>{
     let secondString =wordString.split(" ")
    const table= new Map()  
    if(firstString.length===secondString.length)
    {
        for(let i=0; i< firstString.length;i++)
        {
            if(table.has(firstString[i])      )
            {
                  if(table.get(firstString[i])=== secondString[i])
                  {
                      // keep iteating
                  }
                  else 
                  {
                      return false
                  }
            }
            else 
            {
                            
               if([...table.values()].includes(secondString[i] ))
               {
                   return false
               }
               else 
               {
                  table.set(firstString[i],secondString[i])
               }
            }
        }
        return true
    }
  
    else
    {
        return false
    }
  
    
  }
  
  const result= checkIsomorphism("efg", "bcc")
  console.log(result);