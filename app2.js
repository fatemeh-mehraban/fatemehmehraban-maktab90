"use strict"
let Number = 0
function Increase(){
    Number = Number+1
    return Number
}
// console.log("Increase :" +Increase());

function Decrease(){
    if(Number !== 0){
        Number = Number-1
    }else{
        Number = 0
    }
    return Number
}
// console.log("Decrease :" + Decrease());

function Reset(){
    Number = 0
    return Number
}
// console.log(Reset());

function Read(Number){
  return console.log(Number);
}
Read("Read : " + Number);