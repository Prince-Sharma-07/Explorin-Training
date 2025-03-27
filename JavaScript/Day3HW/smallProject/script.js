const btn = document.querySelector('#btn')
const bdy = document.body
const colors = ["#1A73E8","#FF5733","#4CAF50","#9C27B0","#FFC107","#00BCD4","#E91E63","#8BC34A","#FF9800",
                "#3F51B5","#607D8B","#795548","#2196F3","#F44336","#673AB7"]


let len = colors.length

function randomValue(input){
    const val = Math.floor((Math.random()*100)%input) 
    return val
}

btn.addEventListener('click' , ()=>{
    bdy.style.backgroundColor = colors[randomValue(len)];
})

//removeEventListener is also there








