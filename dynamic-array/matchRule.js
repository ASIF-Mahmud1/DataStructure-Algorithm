/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
 var countMatches_1 = function(items, ruleKey, ruleValue) {
    const selectIndex=(ruleKey)=>{
      if(ruleKey==="type")
      {
         return 0
      }
      if(ruleKey==="color")
      {
        return 1
      }
      else 
      {
        return 2
      }
    }
    const selectedIndex=selectIndex(ruleKey)
    let count=0
    items.forEach((item)=>{
        if(item[selectedIndex] === ruleValue)
        {
            count++
        }
    })
    return count 
};

var countMatches = function(items, ruleKey, ruleValue) {
    const ruleKeyIndex={
        type: 0,
        color: 1,
        name:2
    }
   return items.reduce((accum, current)=>{
      return current[ruleKeyIndex[ruleKey]]===ruleValue ? accum+1:accum
    },0)
};



const items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"

 console.log(countMatches(items,ruleKey,ruleValue));