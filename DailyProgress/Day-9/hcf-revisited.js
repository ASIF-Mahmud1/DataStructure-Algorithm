/**
 * @param {number} list
 * @return {number}
 */

const hcf=(list)=>{
  let hcf=1 
  const smallestNumberInList= Math.min(...list)

  for(let i=2; i<= Math.ceil(smallestNumberInList/2); i++)
  {
        const divisible= list.every((item)=>item%i===0)
        if(divisible)
        {
            hcf= i
        }
         
  }

  return  hcf
}

const result= hcf([252,39690,1050])

console.log(result);