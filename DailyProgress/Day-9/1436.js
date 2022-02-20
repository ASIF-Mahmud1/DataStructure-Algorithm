/**
 * @param {string[][]} paths
 * @return {string}
 */
 var destCity = function(paths) {
    let sorceTable= new Map()
    let destinationTable= new Map()
    for(let [source, destination]  of paths )
    {
        sorceTable.set(source)
        destinationTable.set(destination)
    }

    for(let [dest] of destinationTable)
    {
        if(!sorceTable.has(dest))
        {
           return dest
        }
    }
   
};

const paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]

const result= destCity(paths)
console.log(result);