const testIsomorphism=(firstWord, secondWord)=>{
   let trackAlphabet={}
   const firstWordArr= firstWord.split("")
   const secondWordArr= secondWord.split("")

    if(firstWordArr.length!=secondWordArr.length)
    {
       
        return false
    }
    else 
    {
        for(let i=0;i<firstWordArr.length;i++)
        {
            let newKey= firstWordArr[i]
            /*
               1. Check if newKey already exist in trackAlphabet
                    1.Yes:  
                        check if the value(trackAlphabet[newKey]) matches with secondArr[i]
                        1. Yes : keep iterating
                        2. No : return false
                    
                    2. No:  
                        1.   Check if secondArr[i] is found in the trackAlphabet 
                                1. Yes : return false
                                2. No: keep iterating    
                        
                        2.    insert new key in trackAlphabet
                 
                  
            */ 

                    
             if(trackAlphabet[newKey])
             {
                 if(trackAlphabet[newKey]=== secondWordArr[i])
                 {

                 }
                 else 
                 {
                     return false
                 }
             }
             else
             {
                for (keys in trackAlphabet)
                {
                    if(trackAlphabet[keys]=== secondWordArr[i])
                    {
                        console.log("here",trackAlphabet, secondWordArr[i]);
        
                        return false
                    }
                    else 
                    {
        
                    }
                }  
                 trackAlphabet[newKey]= secondWordArr[i]
             }

        }
        return true
      
    }
}

const first= "egg", second="add"
const result= testIsomorphism(first,second)
console.log(result);