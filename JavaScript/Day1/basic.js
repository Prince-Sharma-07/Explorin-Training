// alert("Welcome!")
// var c = confirm("Do you want to continue...?")

// if(c){
// var name = prompt("What is Your name")
//     alert("Hello " + name)
// }

// console.log('HEllo')
// console.error("eror")
// console.info('hey')

// alert("Welcome")
// var a = confirm("Do u want to continue?")
// if(a){
//      var name = prompt("What is your name?")
//      if(name){
//         alert("Hello" + name + "!")
//      }
//      else alert("Please write your name to continue..");
     
// }
//     else{
//         alert("Have a good day!");
//     }
2

var n = prompt("Enter a number: ")
var a = parseInt(n)

if(n != null){
if(!n){
    alert("Nothing Entered")
}  
else if(isNaN(a)){
    alert("It is not a number")
}
else if (a%2==0) {
    alert("even number")
}
else {
    alert("odd number")
}
}
else{
    alert("Bis spater!")
}