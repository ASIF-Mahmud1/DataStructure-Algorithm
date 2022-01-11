const fibo=(nthElem)=>{
    if(nthElem===1 || nthElem===2)
    {
        return 1
    }
    else 
    {
        return fibo(nthElem-1)+ fibo(nthElem-2)
    }
}

const result= fibo(8)
console.log(result);

// Time : O(2^n)
// Space : O(n) // max stack depth (see complexity video)