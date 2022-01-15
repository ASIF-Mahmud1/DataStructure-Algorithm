const findHCF=(numbers)=>{
    let hcf=1
    let smallestNumber= Math.min(...numbers)

    for(let i=1;i<=smallestNumber;i++)
    {
        const isFactor= numbers.every((ele)=> ele%i===0 )
        if(isFactor)  hcf= i
    }

    return hcf
}

const list= [252,39690,1050]

const result= findHCF(list)

console.log(result);