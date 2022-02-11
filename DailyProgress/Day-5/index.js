const findPairs=(list, sum )=>{

   for (let i=0; i<list.length;i++)
   {
       let firstNumber= list[i]

       for(let j=0;j<list.length;j++)
       {
            let secondNumber= list[j]

            if( secondNumber+firstNumber ===sum  )
            {
                return [firstNumber, secondNumber]
            }
       }
   }

}

const findPairs_v2 =(list, sum)=>{
  // create map
  let table= new Map()
    for(let i=0;i<list.length;i++)
    {
        let complimentaryKey= sum- list[i]
        table.set(complimentaryKey,list[i] )
    }

    console.log(table);

    for(let i=0;i<list.length;i++)
    {
     
     let compliment=   table.get(list[i])
     console.log(compliment);
     if( compliment)
     {
        console.log(compliment);
        return [list[i], compliment]
     }
    }

}


const result= findPairs_v2([ 1,2,3,5],5 )
console.log(result);


