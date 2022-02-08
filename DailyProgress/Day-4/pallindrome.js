/**
 * @param {string} firstString
 * @return {boolean}
 */

 const pallindrome=(firstString)=>{
     console.log( firstString.split('').reverse());
     return firstString === firstString.split('').reverse().join('');
  }
  
  let result =pallindrome("asa")
  console.log(result);