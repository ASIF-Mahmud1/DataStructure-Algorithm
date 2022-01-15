const findLCM=(numbers)=>{
  let lcm=0

  const productOfAllnumber= numbers.reduce((accum,curent)=>{
    accum=accum*curent
     return accum
  },1)

  const largestNumber= Math.max(...numbers)


  for(let i=productOfAllnumber;i>=largestNumber;i--)
  {
    const isDivisible= numbers.every((ele)=> i%ele===0)
    if(isDivisible) lcm=i
  }
  return lcm
}

const list= [10,5,50]

const result= findLCM(list)

console.log("final ",result);