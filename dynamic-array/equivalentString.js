/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
 var arrayStringsAreEqual = function(word1, word2) {
    let str1= word1.reduce((acc,curr)=> acc+curr)
    let str2= word2.reduce((acc,curr)=> acc+curr)
    console.log(str1 ," ",str2);
    return str1===str2 
};

const  word1 = ["a", "cb"], word2 =["ab", "c"]

console.log(arrayStringsAreEqual(word1,word2))


