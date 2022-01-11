const combination=(list)=>{
   if(list.length===0)   // base case
   {
       return [ []]
   }
   else   // recursive case
   { 
      const currentElement= list[0]
      const rest= list.slice(1)

      const combsWithoutFirst= combination(rest)
      let combWithFirst=[]

      combsWithoutFirst.forEach((ele)=>{
          const withFirst= [...ele, currentElement]
          combWithFirst.push(withFirst)
      })

      return [ ...combWithFirst, ...combsWithoutFirst]
   }
}

console.log(combination([1,2,3]));

//Time: O(2^n)
// Space : O(n^2) 