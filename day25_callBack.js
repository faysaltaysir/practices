h1 = document.querySelector("h1");

// function changeColor(color,delay,nextColorChange){
//     setTimeout(()=>{
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     },delay)
    
// }

// changeColor("red",1000,()=>{
//     changeColor("green",1000,()=>{
//         changeColor("blue",1000);
//     });
// });

// changeColor("blue",3000);


function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        resolve(
            setTimeout(()=>{
                h1.style.color = color;
            },delay)
        )
        
        
        // reject('rejected to change')
    })
}
// async function demo(){
//     await changeColor("green",1000);
//     await changeColor("yellow",1000);
//     await changeColor("blue",1000);
//     changeColor("red",1000)
// }


changeColor("red",2000)
    .then((result)=>{
        console.log("inside");
        console.log(result);
        return changeColor("blue",3000);
    })
    .then((result)=>{

        console.log("inside 2");
        console.log(result);
        return changeColor("green",1000);
    })
    .catch((error)=>{
        console.log("error");
        console.log(error);
    })
    