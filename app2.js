"use strict"
let Number = 0
function Increase(){
    Number = Number+1
    return Number
}
Increase()
console.log(Increase());
function Decrease(){
    if(Number !== 0){
        Number = Number-1
    }else{
        Number = 0
    }
    return Number
}
// console.log(Decrease());
