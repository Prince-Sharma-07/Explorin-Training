// function abc(a , b = 0 , c , d = 0){
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d)
// }

// abc(5,6)

arr = [1,2,3,4,5]
let res = arr.map((a,b) =>{
    if(b&1) return a*a*a
    return a*a
})
console.log(arr)
console.log(res)