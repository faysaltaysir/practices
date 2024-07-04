let btn = document.getElementById("btnClick");
let allBtn = document.querySelectorAll("button");
btn.addEventListener('click',sayHello);
btn.innerText = "Say Hello";
function sayHello(){
    console.log("Hello");
}
for(btns of allBtn){
    btns.addEventListener('click',function(){
        console.log("OneClick");
    });
    btns.addEventListener('dblclick',function(){
        console.log("TwoClick");
    });
}