let value = "";
let btn = document.querySelector("button");
btn.addEventListener("click",generate);
let box= document.querySelector(".colorBox");
function generate(){
    let head = document.querySelector('h1');
    let pera =  document.querySelector('p');
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    console.log(`${red} + ${green} + ${blue}`);
    value = `rgb(${red},${green},${blue})`;
    box.style.backgroundColor = value; 
    head.innerText = value;
    let sum = red + green + blue;
    if(sum<400){
        pera.style.color = "white";
    }
    else{
        pera.style.color = "black";
    }
       
}
// let body = document.querySelector("body");   mouseenter
document.addEventListener("click",function(){
    console.log("body is clicked");
    
});

// let btns = document.querySelectorAll(".follow");
// for(btn of btns){
//     btn.addEventListener("click",function(){
//         console.dir(this.innerText);
//     });    
// }
function follow(event){
    console.log(event);
    console.log(this.innerText);
}
let btn1 =  document.querySelector("#btn1");
let btn2 =  document.querySelector("#btn2");
btn1.addEventListener("click",follow);
btn2.addEventListener("click",follow);


let inp = document.querySelector("input");
inp.addEventListener("keydown",function(event){
    console.log("key =",event.key);
    console.log("code =",event.code);
});
let form = document.querySelector("form");


form.addEventListener("submit", function(event){
    event.preventDefault();
    // alert("form submitted");
    // let user = document.querySelector("#user");
    // let pass = document.querySelector("#pass"); 
    let user = this.elements[0];
    let pass = this.elements[1];
    console.log(user.value);
    console.log(pass.value);
});
let text = document.querySelector("#editor");
let p = document.querySelector("#variable");
// text.style.display = "none";
text.addEventListener("input",function(){
    console.log(this.value);
    p.innerText = text.value;
});