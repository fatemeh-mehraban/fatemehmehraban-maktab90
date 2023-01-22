let b = ()=>{
    alert("you agreed")
   }
let c = ()=>{
   alert("you canceled the execution")
   }
   
let a = ()=>{
 confirm("do you agree")? b():c()
}
a()
