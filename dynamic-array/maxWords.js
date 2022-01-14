const listOfSentnece= [
    "alice and bob love leetcode", "i think so too", "this is great thanks very much"  // "i eat termusa on Tuesday", "i eat termusa on", "i eat termusa on Tuesday always" 
]
const sentence= "i eat termusa on Tuesday"
console.log (sentence.split(" "),sentence)

const result=listOfSentnece.map((sent)=>{
    return sent.split(" ").length
}).sort((first,second)=> second-first )


console.log(result[0]);