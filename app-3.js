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
arr.pop()
arr.sort((a , b) => a.age - b.age)
return arr
}
console.log(info())

