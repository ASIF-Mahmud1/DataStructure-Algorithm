/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 var restoreString = function(s, indices) {
     const resultArr=  Array(s.length)
     let resultStr=''
    
     indices.forEach((idx,index)=>{
        resultArr[idx]= s[index]
        
     })

  resultArr.forEach((ele)=>{
    resultStr= resultStr+ ele
  })
        
    return resultStr
};

console.log( restoreString("absd",[0,3,1,2]))