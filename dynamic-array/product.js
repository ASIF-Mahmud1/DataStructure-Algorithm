// const list =[1,2,3,4]

// const multiplicand= list.reduce((prev,current)=>{
//     return  prev*current
// })

// const result= list.map((ele)=>{
//     return multiplicand/ele
// })

// console.log(result);

const list =[1,2,3,4]
const currentIdx=0
let result= []

result.forEach((ele, idx)=>{
   if(idx===currentIdx)
   {
       result.push(ele)
   }
})