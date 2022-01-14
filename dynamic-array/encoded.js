/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
 var decode = function(encoded, first) {
    const result= []
    result.push(first)
    for(let i=0;i<encoded.length;i++)
    {
        const decoded= encoded[i]^ result.slice(-1)
        result.push(decoded)
    }
    return result
};

const encoded = [6,2,7,3], first = 4

console.log(decode(encoded,first));