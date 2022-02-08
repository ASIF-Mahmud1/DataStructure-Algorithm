/**
 * @param {object []} listOfObjects
 * @return {object []}
 */

 const sortObject=(listOfObjects)=>{
        
    return  listOfObjects.sort((first,second)=> first.population- second.population)
}

const listOfObjects =[{population:10},{population:189},{population:100},{population:9},  ]
const result= sortObject(listOfObjects)
console.log(result);