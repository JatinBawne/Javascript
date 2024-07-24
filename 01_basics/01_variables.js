const accountId = 144553
let accountEmail = "jatinbawne2347@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"


accountEmail = "abc@xyz.com"
accountPassword = "Hello12"
accountCity = "Bengaluru"


console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functinal scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity]);