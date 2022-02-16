/**
 * @param {string} formula
 * @return {string}
 */

const wordFreq = (string) => {
    var words = string.replace(/[.]/g, '').split(/\s/);
    var freqMap = {};
    words.forEach(function (w) {
        if (!freqMap[w]) {
            freqMap[w] = 0;
        }
        freqMap[w] += 1;
    });

    return freqMap;
}

function printSubsInDelimiters(str, startCode, endCode)
{

    // Stores the indices of
    let dels = [];
    for(let i = 0; i < str.length; i++)
    {

        // If opening delimiter
        // is encountered
        if (str[i] == startCode)
        {
            dels.push(i);
        }

        // If closing delimiter
        // is encountered
        else if ((str[i] == endCode) &&
                 (dels.length > 0))
        {

            // Extract the position
            // of opening delimiter
            let pos = dels[dels.length - 1];

            dels.pop();

            // Length of substring
            let len = i - 1 - pos;

            // Extract the substring
            let ans;
            if(pos < len)
            {
                ans = str.substring(pos + 1,
                                   len + 1);
            }
            else{
                ans = str.substring(pos + 1,
                      len + pos + 1);
            }
            console.log(ans);
          //return ans

        }
    }
    console.log(dels);
}

 var stringsBetweenSpecialCharachter = function(formula) {
  let  startCode= "start", endCode= "end"
    const startFreq= wordFreq(formula)[startCode]
    const endFreq= wordFreq(formula)[endCode]
    if(startFreq!==endFreq)
    {
        return formula
    }
    else 
    {
      let temp =formula
   
      let numberOfStartLeft= startFreq
      while (numberOfStartLeft>0) {
        let firstIndexOfStart = temp.indexOf('start')
        let firstIndexOfEnd = temp.indexOf('end')
        console.log(firstIndexOfStart,firstIndexOfEnd);
        console.log(temp);
        temp= temp.slice(firstIndexOfEnd+3)
       numberOfStartLeft--
      }
     
    }
   
    
};


const formula = "start 0 end + 5x+3+ start 9 end"
const result= stringsBetweenSpecialCharachter(formula)
console.log(result)