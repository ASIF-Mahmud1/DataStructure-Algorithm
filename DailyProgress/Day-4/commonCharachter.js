
/**
 * @param {string} str
 * @return {charachter}
 */
const commonCharachter=(str)=>{
  let commonChar={
      char:'',
      count:0
  }
  let table= new Map()
  for(item of str)
  {
     if(table.has(item))
     {
        table.set(item, table.get(item)+1)
        if(table.get(item) >=commonChar.count )
        {
            commonChar= {
             char:item,
              count: table.get(item)
            }
        }
     }
     else 
     {
        table.set(item, 1)
     }
  }

  return commonChar.char
}

const list ='qwewqeqwsdsadsdsad'

const result= commonCharachter(list)

console.log(result);