// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B with slice==>", myArr);


// const myn2 = myArr.splice(0, 3)
// console.log("C ", myArr);
// console.log(myn2);



// ***** slice not effected the main array value 
// slice return an array according to given range like as 1,3  starting from 1 index from an array and end before 3 
// example // range 1,3   it return index of 1,2 of an array and not effected main array

// ***** splice effected the main array value , 
// splice return an array according to given range like as 1,3  starting from 1 index from an array and at 3 incuded 

// example // range 1,3   it return index of 1,2,3  of an array effected main array
// example  array = [2,3,5,8,1,0]. /// modified main array to [2,1,0]

