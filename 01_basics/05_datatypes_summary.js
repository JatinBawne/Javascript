/*
    PRIMITIVE --> 7 types --> call by value
    String
    Number
    Boolean
    null
    undefined
    Symbol
    BigInt

*/


const score = 100;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 84589735683673645345n



/*
    REFERENCE (Non Primitive) --> call by reference
    Array
    Objects
    Functions
*/

const heroes = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name : "Md Jahangir",
    age : 22
}

const myFunction = function(){
    console.log("Hello this is My Function");
}


console.log(typeof myFunction); // function object
console.log(typeof anotherId);


// ++++++++++++++++++++++++++       MEMORY          ++++++++++++++++++++++++++

/*
    Stack --> Primitive
    Heap --> Non-Primitive
*/

let myYoutubename = "jatinbawnedotcom"


let anothername = myYoutubename
anothername = "nonamedotcom"


console.log(anothername)
console.log(myYoutubename)


let userOne = {
    email: "user@google.com",
    upi: "user@axl"
}
console.log(userOne)

let userTwo = userOne

userTwo.upi = "noupi@vijaymalya"

console.log(userOne)


