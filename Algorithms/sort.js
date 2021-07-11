
// step 1
//console.log(      'hello'+" "+'class'
// ) //string concatination
// var word = 'CodingDojo'
// //formatted strings use back ticks not quotes
// console.log(`welcome to ${word}`  )

// //variables are mutable and loosely typed
// var num = 'zero'
// num = 0

//braces
//() parenthesis PARENS
//[] square BRACKETS
//{} CURLY BRACES
//([]) thats ok
//[(]) not ok

//step 2
//functions
function myname (myparam){
    console.log(myparam)
}



myname('bob')
myname('carl')

//objects

//JSON
var BOB = {
    name:'Bob Boberson',
    email:'Bob@bob.com',
    luckynums:[4,8,19]
}
var Carl = {
    name:'Carl Boberson',
    email:'carl@bob.com',
    luckynums:[1,2,3]
}
var Nick = {
    name:'Nick Boberson',
    email:'nick@bob.com',
    luckynums:[6,8,199]
}
BOB['sons'] = []
BOB.sons.push(Carl)
BOB.sons.push(Nick)

console.log(BOB)
console.log(`BOBS email is ${BOB['email']}`)

var arr = [1,5,7,8,3,4]
console.log(arr[2])

console.log(BOB['luckynums'][1])
console.log(BOB.luckynums[1])

console.log(BOB.sons[1].luckynums[2])
console.log(BOB['sons'][1]['luckynums'][2])
