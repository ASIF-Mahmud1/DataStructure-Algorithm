/**
 * @param {number[][]} image
 * @return {number[][]}
 */
 var flipAndInvertImage = function(image) {
    const dimension=image[0].length
    const flippedImage=[]
    for(let i=0; i<dimension;i++)
    {
        let temp= [...image[i]].reverse().map(ele=> ele===1?0:1)
        flippedImage.push(temp)
    }
    return flippedImage
};

const image = [[1,1,0],[1,0,1],[0,0,0]]

console.log(flipAndInvertImage(image))