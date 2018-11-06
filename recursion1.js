
let counter = 1
function Recursion(n) { 
    if(counter <= n) {
    console.log(counter)
    counter ++ 
    Recursion(n)}
}    

Recursion(10)