//Higher order function and call back function

function greet(){
    console.log("Good Morning!!!")
}
function evening(a){
    console.log( a) //[function:greet]
    a()
}
evening(greet)
