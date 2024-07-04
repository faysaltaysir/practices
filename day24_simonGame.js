let red = document.querySelector(".red");
let green = document.querySelector(".green");
let orange = document.querySelector(".orange");
let blue = document.querySelector(".blue");
let array = [];
const contain = {
    1: red,
    2: green ,
    3: orange,
    4: blue
};
document.addEventListener("keypress",function(){
    let rand = Math.ceil(Math.random()*4);
    array.push(rand);
    console.dir(contain[rand]);
    let origColor = contain[rand].classList[1];
    contain[rand].addEventListener("click",function(){
        console.log("correct");
    });
    console.log(origColor);
});
