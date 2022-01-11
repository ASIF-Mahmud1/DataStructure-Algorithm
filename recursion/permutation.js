const permutation= (list)=>{
    if(list.length===0)
    {
        return [[]]
    }
    else 
    {
        const currentEle= list[0]
        const rest= list.slice(1)
        
        const permWithoutFirst= permutation(rest)
        let allPremutations=[]

        permWithoutFirst.forEach((ele)=>{
            for (let i=0; i<=ele.length;i++)
            {
                 const permWithFirst= [...ele.slice(0,i) , currentEle, ...ele.slice(i)  ]
                 allPremutations.push(permWithFirst)
            }
        })
        return allPremutations
    }
}

console.log(permutation([1,2,4]));