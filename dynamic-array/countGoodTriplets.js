/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
 var countGoodTriplets_1 = function(arr, a, b, c) {
     let count=0
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            for(let k=j+1;k<arr.length;k++)
            {
                let result= Math.abs(arr[i] - arr[j]) <= a
                let result2= Math.abs(arr[j] - arr[k]) <= b
                let result3= Math.abs(arr[i] - arr[k]) <= c
                if(result && result2 && result3)
                {
                   count++
                }
               
            }
        }

    }
    return count
};

var countGoodTriplets = function(arr, a, b, c) {
    let count=0
   for(let i=0;i<arr.length;i++)
   {
       for(let j=i+1;j<arr.length;j++)
       {
        let result= Math.abs(arr[i] - arr[j]) > a
        if(result)
        {
            continue
        } 
           for(let k=j+1;k<arr.length;k++)
           {
             
               let result2= Math.abs(arr[j] - arr[k]) > b
               if(result2)
               {
                   continue
               }

               let result3= Math.abs(arr[i] - arr[k]) <= c
               if(result3)
               {
                  count++
               }
              
           }
       }

   }
   return count
};


const  arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3

console.log(countGoodTriplets(arr,a,b,c))