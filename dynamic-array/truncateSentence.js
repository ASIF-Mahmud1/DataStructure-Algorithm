/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var truncateSentence = function(s, k) {
    const sentenceArr= s.split(" ").slice(0,k).join(' ')
    return sentenceArr
};

const s="What is the solution to this problem", k = 4

console.log(truncateSentence(s,k))