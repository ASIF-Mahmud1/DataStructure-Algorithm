/**
 * @param {string[]} words
 * @return {number}
 */
 var uniqueMorseRepresentations = function(words) {
    const dictionary= letterAndMorseCode()
    let set= new Set()
    words.forEach((ele)=>{
     let result=   ele.split("").reduce((accu, char)=>{
         accu=accu+ dictionary[char]
        return  accu
        },'')
    //    console.log(result);
        set.add(result)

    })
   // console.log(set.size);
    return set.size
};

const letterAndMorseCode =()=>{

    const morseCode= [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    let alphabet = {}
    alpha.forEach((x,index) => {
        
       let key= String.fromCharCode(x).toLowerCase()
       let value= morseCode[index]
      
       alphabet[key]= value
      
    
    } )

    return alphabet
}

const  words = ["gin","zen","gig","msg"]

console.log(uniqueMorseRepresentations(words))
//console.log(letterAndMorseCode());