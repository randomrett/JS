const accountId = 14453
let accountEmail = "chirag@git.com"
var accountPassword = "12345"
accountCity = "Kota"
let accountState;
// accountId = 23    not allowed

accountEmail = "fakdf@g.com"
accountPassword = "23454"
accountCity
/* prefer not to use var because of issue in block scope and functional scope */

console.log(accountId);
console.table([accountId , accountEmail , accountPassword , accountCity , accountState])
