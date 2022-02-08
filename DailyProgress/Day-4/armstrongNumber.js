/**
 * @param {number} number
 * @return {boolean}
 */

const checkArmStrong=(number)=>{

    const numberOfDigits= number.toString().length
    const sum= number.toString().split('').reduce((accum,current)=>{
        return accum+  Math.pow(current,numberOfDigits)
    },0)
    return number ===sum
}

const result= checkArmStrong(1634)
console.log(result);