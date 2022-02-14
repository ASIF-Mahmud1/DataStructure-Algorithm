const charachterFeq=(str)=>{
const table= new Map()
let arr= [...str]

arr.forEach(element => {
    if(table.has(element))
    {
        table.set( element,table.get(element)+1)
    }

    else
    {
        table.set(element,1)
    }
});

return table
}

const str= "asdaaadf"

const result= charachterFeq_v2(str)

console.log(result);