const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()  //#output undefined


// function chai(){
//     let username = "hitesh"
//     console.log(this);
// }
// chai()  //#output global object


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai() // #output undefined


// const chai = function () {
//     let username = "hitesh"
//     console.log(this);
// }
// chai() // #output global context of nodejs context

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }
// chai() // #output { }


const chai =  () => {
    let username = "hitesh"
    console.log(this.username);
}
 chai() // #output undefined



// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//explicit method need return keyword

// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})

//implicit method no need return keyword

//console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()