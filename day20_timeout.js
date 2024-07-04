console.log("Hi there!")
//setTimeout(function,timeout)
setTimeout( ()=>{
    console.log("Taysir");
},2000);
setTimeout( ()=>{
    console.log("Faysal");
},1000);
console.log("I am");

//setInterval(function,timeout)
setInterval(()=>{
    console.log("Faysal Taysir");
},2000);

let id = setInterval(()=>{
    console.log("Faysal Taysir");
},2000);
console.log(id);
let id2 = setInterval(()=>{
    console.log("Faysal Taysir");
},3000);
console.log(id2);

//clearInterval(id); // to stop the interval 