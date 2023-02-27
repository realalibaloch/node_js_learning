arr=[5,3,5,6,9,5,9]

arr.filter((item)=>{
    console.log(item)
})

console.log("2nd try")
let result= arr.filter((item)=>{
    return item===9

})
console.log(result)

console.log("3rd try")
let result_3= arr.filter((item)=>{
    // return item>5
    return item<=6

})

console.log(result_3)