"use strict"
const final = {
    Number : 0,
    Increase:function (){
    this.Number = this.Number+1
    return this
},
Decrease:function(){
    if(Number !== 0){
    this.Number =this.Number-1
    }else{
        this.Number = 0
    }
    return this
},

Reset : function(){
    this.Number = 0
    return this
},

Read : function(){
console.log(this.Number);
}
}
final.Increase().Increase().Increase().Increase().Decrease().Decrease().Reset().Read()