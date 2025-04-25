// function resolve(data){
//     console.log("Resolved: " , data)
    
// }

// function reject(data){
//     console.error("Rejected:" , data)
// }

// let myPromise = new Promise((resolve , reject)=>{
//     let finalVal = 3%2 === 0
//     if(finalVal){
//         resolve("PAYMENT DONE")
//     }
//     else{
//         reject("PAYMENT FAILED")
//     }
// })

// myPromise.then(resolve).catch(reject)


// fetch("https//:dummyjson.com/products").then(res => {
//     let pro = new Promise((rs , rj = ()=>{}) =>{
//         if(true){
//             rs("Completed!!!")
//         }
//         else{
//             rj("Khatam")
//         }
//     })
//     console.log(res)
//     return pro
// }).then(data => {
//     console.log("Ye aya hai" , data)
// }).catch((err)=>{
//     console.log("Ye error hai" , err)
// })

fetch("https//:dummyjson.com/products").then(res => res.json()).then(console.log)

async function printData () {
    // var res = await fetch('https://dummyjson.com/products')
    return "HELLO"
}

printData()

// let val = printData()

// val.then(data => console.log(data))


// console.log(val)