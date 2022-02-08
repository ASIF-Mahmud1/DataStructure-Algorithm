/**
 * @param {string} firstString
 * @param {string} secondString
 * @return {boolean}
 */

const anagram=(firstString, secondString)=>{
  if(firstString.trim().length===secondString.trim().length)
  {
    let first= firstString.split('').sort().join()
    let second= secondString.split('').sort().join()
  }
  else 
  {
      return false
  }
}

let result =anagram("asd",'das')
console.log(result);