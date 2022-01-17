/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
 var oddCells = function(m, n, indices) {
    const populate = new Array(m).fill( new Array(n).fill(0) )
 //   console.log(populate);

    for(let i=0;i<indices.length;i++)
    {
        let row= indices[i][0]
    //     console.log("row to change ",row,);
    //     let column= indices[i][1]
    //     console.log("column to change ",column,);
    //     populate[row].forEach((ele,index)=>{
    //   //      console.log(row, populate);
    //         populate[row][index]=ele+1 ;

        
    //     })

    let selectedRow= populate[row] 
    console.log(selectedRow,"whole shit ", populate);
    selectedRow.forEach((ele,index)=>{
        
        selectedRow[index]= ele+1
    })

    console.log("selected row ",row, selectedRow);
   // console.log(populate);

    }

    return populate
 
};

const m = 2, n = 3, indices = [[0,1],[1,1]]

const result= oddCells(m,n,indices)

//console.log(result);