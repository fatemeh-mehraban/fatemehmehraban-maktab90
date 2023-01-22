let arr = []
let obj = {}
let Name;
let Age;

function info(){
    while (Name !== "") {
        Name = prompt("enter your name")
        Age = +prompt("enter your age")

    obj= {
        name : Name,
        age : Age
    }
    arr.push(obj)

    }
console.log(arr);
arr.pop()
}
info()
