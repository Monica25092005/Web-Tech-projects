//closure and nested function

function parent(){
    let firstname="ajith";
    let lastname="kumar"

function child(){
    let res=firstname+lastname;
    console.log(res)
}
// child();
 return child;

}
let returnedFunction=parent();
console.log(returnedFunction)
returnedFunction()