function removeFirstTwo(list) {
    const [, , ...arr] = list; 
    return arr;
  } 
  var arrLiteral = [8,9,10,11,12]
  //console.log("arr contains: " + removeFirstTwo(arrLiteral))


  function pointValues(point){
    const {name :n,age:a} = {...point} 
    console.log(n)
    console.log(a)
}
// pointValues({name:"jerry", age:2})
// pointValues(undefined)

let user = {
	name: "GFG",
	gfg1:() => {
		console.log("hello " + this.name); // no 'this' binding here
	},
	gfg2(){	
		console.log("Welcome to " + this.name); // 'this' binding works here
	}
};
// user.gfg1();
// user.gfg2();

const girl = {
    name: 'Anna',
    info: { age: 20, number: 123 }
  };
  
  const newGirl = { ...girl };
  newGirl.info.age = 30;
  newGirl.name='Susy'
  console.log(girl.name,girl.info.age,newGirl.name, newGirl.info.age);
