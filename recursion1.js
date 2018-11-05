
let counter = 0
function Recursion(n) { 
    console.log(counter)
    if(counter <= n) {
    counter ++ 
    Recursion(n)}
}    

Recursion(7)