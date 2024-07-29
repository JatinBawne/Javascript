const name = "Jatin"
const repoCount = 50

// console.log(name + repoCount + " Value");

//String Interpolation
console.log(`Hello My name is ${name.toUpperCase()} and my Repo count is ${repoCount}`);

const gameName = new String('Jatin-FC-com')

// console.log(typeof gameName) // --> object
// console.log(typeof name) // --> string
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0, 4)
// console.log(newString)

const anotherString = gameName.slice(-8, 2)
console.log(anotherString)

const newStringOne = "      Jatin       "
console.log(newStringOne)
console.log(newStringOne.trim())
console.log(newStringOne.trimEnd())
console.log(newStringOne.trimStart())

const url = "https://jatin.com/jatin%20bawne"
console.log(url.replace("%20", "-"))

console.log(url.includes("jatin"))

console.log(gameName.split('-'))


