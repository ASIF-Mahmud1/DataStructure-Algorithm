/**
 * @param {string} sentence
 * @return {boolean}
 */
 var checkIfPangram = function(sentence) {
    const alphabetTable= new Set(sentence)
    return alphabetTable.size===26
};

const sentence = "thequickbrownfoxjumpsoverthelazydog"

const result= checkIfPangram(sentence)
console.log(result);