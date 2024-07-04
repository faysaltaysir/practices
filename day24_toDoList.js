
let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
//let delBtns;
// function addNew(){
//     if(input.value){
//         console.log(input.value);
//         let list = document.createElement("li");
//         let del = document.createElement("button");
//         del.innerText = "Delete";
//         del.classList.add("delete");
//         list.innerText = input.value;
//         ul.appendChild(list);
//         list.append(del);
//         input.value = "";
//         delBtns = document.querySelectorAll(".delete");
//         for(btns of delBtns){
//             btns.addEventListener("click",function(){
//                 let per = this.parentElement;
//                 console.log(per);
//                 console.log("item Deleted");
//                 per.remove();
//             });
//         } 
//     }
// }





// let list = document.createElement("li");

function addNew(){
    if(input.value){
        console.log(input.value);
        let list = document.createElement("li");
        let del = document.createElement("button");
        del.innerText = "Delete";
        del.classList.add("delete");
        list.innerText = input.value;
        ul.appendChild(list);
        list.append(del);
        input.value = ""; 
    }
}
ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        // console.log("delete");
        let listItem = event.target.parentElement;
        console.dir(listItem);
        listItem.remove();
    }
    else{
        console.log("Dont delete");
    }
    console.dir(event.target.nodeName);
    console.log("deleting");
});


btn.addEventListener("click",addNew);