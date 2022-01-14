/**
 * @param {string[]} words
 * @return {string}
 */
 var firstPalindrome = function(words) {
    for(let i=0;i<words.length;i++)
    {
        if(checkPalindrome(words[i]))
        {
            return words[i]
        }
    }
    return ""
};

const checkPalindrome=(word)=>{

    let length=word.length

    if(word.length%2!==0) // odd
    {
         const halfLength= Math.floor(length/2)
         const forward= word.slice(0,halfLength) 
         const reversed= word.slice(halfLength+1,length).split("").reverse().join("");
       
         if(forward===reversed)
        {
            return true
        }
        else 
        {
            return false
        }

    }

    else   //even
    {
        const halfLength= length/2
        const forward= word.slice(0,halfLength)
        const reversed= word.slice(halfLength,length).split("").reverse().join("");

        if(forward===reversed)
        {
            return true
        }
        else 
        {
            return false
        }


    }
    

}

const words = ["abc","car","ada","racecar","cool"]


console.log(firstPalindrome(words))