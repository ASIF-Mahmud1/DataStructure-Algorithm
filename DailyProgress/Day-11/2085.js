/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
 var countWords = function(words1, words2) {
    let table_1= new Map()
    for(item of words1)
    {
        if(table_1.has(item)) 
        {
           table_1.set(item,table_1.get(item)+1)
        }
        else 
        {
            table_1.set(item,1)
        }
        
    }

    let table_2= new Map()
    for(item of words2)
    {
        if(table_2.has(item)) 
        {
           table_2.set(item,table_2.get(item)+1)
        }
        else 
        {
            table_2.set(item,1)
        }
        
    }
  //  console.log(table_1, table_2);
    let count=0
    for(let item of table_1)
    {
      //  console.log(item[1]);
        if(item[1]===1 && table_2.get(item[0])===1)

        {
           count++
        }
    }
    return count
};

let words1 = ["a","ab"], words2 = ["a","a","a","ab"]

const result= countWords(words1,words2)
console.log(result);