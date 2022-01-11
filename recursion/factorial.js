const factorial= (number)=>
{
    // base case 
    if(number==0)
    {
        return 1
    }
    // recursive case
    else if(number>0) 
    {
        return number* factorial(number-1)
    }
    else 
    {
        return undefined
    }

}

const result= factorial(24)
console.log("Result ",result);