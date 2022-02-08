/**
 * @param {string} firstString
 * @return {boolean}
 */

// Asumption: string consist of brackets only
 const balancedBracket=(firstString)=>{
   const brackets={
       '{':'}',
       '[':']',
       '(':')',
   }
   let onlyBrackets=[]
   Object.keys(brackets).forEach(item=> {
       onlyBrackets.push(item, brackets[item])
   })
   
   const removeLetters= firstString.split('').filter((item)=>onlyBrackets.includes(item)).join('')

   if(removeLetters.length%2==0)
   {
    
     const table= removeLetters.split('')
     console.log(table);
     for(let i=0;i<table.length/2;i++)
     {
         if( brackets[table[i]] !== table[table.length-(i+1)] )
         {
             return false
         }
     }
     return true
   }
   else 
   {
       return false
   }
 }
 
 let result =balancedBracket("(b[c{a}g]sd)")
 console.log(result);

 // Better approach : https://www.educative.io/blog/level-up-javascript-coding-challenges#longest-string-in-an-array