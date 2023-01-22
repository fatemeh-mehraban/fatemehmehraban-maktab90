
let box = document.querySelector(".box")
let txt = document.querySelector(".txt")
let Top;
let Left;
let Message;
let nameClass;
let arr =[]
let obj = {}
function info(){
    while (Message !== "") {
        Message = prompt("enter your Message")
        Top = +prompt(" Top")
        Left = +prompt(" left")
        nameClass= prompt("enter your nameClass")

    obj= {
        Message : Message,
        Top : Top,
        Left: Left,
        nameClass : nameClass,
    }
    arr.push(obj)
    }
    arr.pop()
}

info()

function Notif(){
    
    box.style.top = arr[0].Top + "px"
    box.style.left = arr[0].Left + "px"
    txt.innerHTML = arr[0].Message
    box.classList.add(arr[0].nameClass)
    // console.log("5");

}
Notif()
