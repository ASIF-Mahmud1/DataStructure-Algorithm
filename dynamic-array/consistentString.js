/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
 var countConsistentStrings_1 = function(allowed, words) {
    let matchFound=[]
    let allowedArr= allowed.split("")
    let ticked= allowedArr.map((ele)=>{

      return { [ele]: false  }
    })

    for(let i=0;i<words.length;i++)
    {
      let count=0
      const uniqueLetters= [... new Set( words[i])]
      for(let j=0;j<allowedArr.length;j++)
      {
       
        console.log(uniqueLetters);
        let result =uniqueLetters.includes(allowedArr[j]);
        if(result)
        {
          count++
        }
       
      }
    
      if(count===uniqueLetters.length)
      {
        matchFound.push(words[i])
      }
      else
      {
         
      }
    
    }

    return matchFound.length
    
};

var countConsistentStrings = function(allowed, words) {
  const set= new Set(allowed)  // instead of set , you could also used array.incldues
  
 return words.reduce((accumulate,current)=>{
  //console.log(current);
  const foundEveryCharachter=  current.split('').every((char)=>{ return set.has(char) })
 // console.log(foundEveryCharachter);
    if(foundEveryCharachter)
    {
     return ++accumulate
    }
    else 
    {
     return accumulate
    }
  },0)
}

const   allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]

console.log(countConsistentStrings(allowed,words));