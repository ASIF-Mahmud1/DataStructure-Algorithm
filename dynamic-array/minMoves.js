/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
 var minMovesToSeat = function(seats, students) {
    seats.sort((first,second)=>  first-second)
    students.sort((first,second)=>  first-second)
    let cost=0
    seats.forEach((ele, index)=>{
        cost =cost+Math.abs(ele- students[index])
    })
    return cost
  
};

const seats = [3,1,5], students = [2,7,4]
console.log(minMovesToSeat(seats,students))