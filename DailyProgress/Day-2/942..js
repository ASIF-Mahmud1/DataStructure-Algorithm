/**
 * @param {string} s
 * @return {number[]}
 */
 var diStringMatch = function(s) {
    let strArr= s.split("")
    const result= [0]
    for(let i =0;i<strArr.length;i++)
    {
       let lastindex= result.length -1
       let dontPushForward= result[lastindex]+1
       let dontPushBackward= result[lastindex]-1
       console.log(dontPushBackward,result[lastindex], dontPushForward);
       if(strArr[i]==="I")  //ascending
       {
         const pushIt= dontPushForward+1
         console.log("push it ",pushIt);
         result.push(pushIt)
       }
       else   // descending
       {
          const pushIt= dontPushBackward-2
          console.log("push it ",pushIt);
          result.push(pushIt)
       }
    }
    console.log(result);
};

const  s = "DDI"
const result= diStringMatch(s)