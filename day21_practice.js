let arr = [10,30,40,20,100];
let ans = arr.every((el)=>el%10==0);
console.log(ans);

function getMin(arr){
    let ans2 = arr.reduce((red,el)=>{
        if(red<el){
            return red;
        }
        else{
            return el;
        }
    });
    return ans2;
}
console.log(...arr);  //spread
console.log(..."Faysal");

let minimum = Math.min(...arr); 
console.log(minimum);
let even = [2,4,6,8,10];
let odd = [1,3,5,7,9];
console.log(...odd, ...even);

let data = {
    email: "faysal@gmail.com",
    pass: "001435"
};
let dataCopy = {...data, id: 2004109}; //spread object literals

let array = [1,2,3,4,5]; //val
let obj1 = {...array};   // obj-> key:val

function sum(...args){ //rest
    for(let i=0;i<args.length;i++){
        console.log('gave us args '+args[i]);
    }
}
function min(a,b,c,d){
    console.log(arguments);
    // arguments.push(2); error as its a collection
    //not a function
}

function min2(...args){  // rest store in array
    console.log(args); 
    args.push(100);// only array allows push pop
    console.log(args);
}

function sum2(...args){
    return args.reduce ((sum,el) => sum+el);
}
function mess(msg,...arg){
    console.log(msg);
    console.log(arg);
}
//destructuring
let names = ["tony","stark","mohon","lamisa","rahima","tasnim","Faysal"];
let [_1st,_2nd,_3rd,...others] = names;
//destructuring objects
const student = {
    name: "karan",
    id: 2004109,
    age: 14,
    class: 9,
    subject: ["bangla","english","math"],
    username: "faysal@#",
    password: "001435",
    place: "Dhaka"
};
let {username,password} = student;
let {name: user,id: pass,place: address="Khulna"} = student;

sqr_sum = (el)=>(el*el);














