var a = parseInt(prompt('Enter Your Grades'))

if(a > 100 || a < 0){
    alert('Enter your grades b/w 0-100')
    console.log('Enter your grades between 0-100')
}
else if(a <= 100 && a > 90){
    alert('A Grade')
    console.log('A Grade')
}
else if(a <= 90 && a > 80){
    alert('B Grade')
    console.log('B Grade')
}
else if(a <= 80 && a > 70){
    alert('C Grade')
    console.log('C Grade')
}
else if(a <= 70 && a > 60){
    alert('D Grade')
    console.log('D Grade')
}
else if(a <= 60 && a > 50){
    alert('E Grade')
    console.log('E Grade')
}
else if(a <= 50 && a > 40){
    alert('F Grade')
    console.log('F Grade')
}
else if(a <= 40 && a > 32){
    alert('G Grade')
    console.log('G Grade')
}
else{
    alert("Fail!")
}
