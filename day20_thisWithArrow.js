const square = (n) =>(n*n);
// console.log(square(10));

const student = {
    // name: "faysal",
    // marks: 100,
    // prop: this,
    // getName: function (){
    //     console.log(this);
    //     return this.name;
    // },
    // getMarks: ()=>{
    //     console.log(this);
    //     return this.marks;
    // },
    a:50,
    getInfo1: function(){
        let a =30;
        setTimeout(()=>{
            console.log(this.a);
        },2000);
    },
    getInfo2: function(){
        // let a = 30;
        setTimeout(function(){
            console.log(this.a);
        },2000);
    }
};let count=0;
let id = setInterval(()=>{
    console.log("hello World");
    count++;
    // if(count==5){
    //     clearInterval(id);
    // }
},2000)
setTimeout(() => {
    clearInterval(id);
    console.log("clear interval ran");
}, 10000);