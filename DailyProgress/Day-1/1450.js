/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
 var busyStudent_1 = function(startTime, endTime, queryTime) {
    let countStudents=0

    for(let i=0;i<startTime.length;i++)
    {
        if(endTime[i] >= queryTime && startTime[i]<=queryTime)
        {
            countStudents++
        }
    }
    return countStudents
};

var busyStudent= function(startTime, endTime, queryTime) {
  return  startTime.filter((ele,index)=>{
        return   endTime[index] >= queryTime && ele<=queryTime
    }).length
}
const   startTime = [4], endTime = [4], queryTime = 4
const result= busyStudent(startTime, endTime, queryTime)

console.log(result);