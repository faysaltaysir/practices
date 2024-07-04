let arr = [1,2,3,4,5];
// let print = function(el){
//     console.log(el);
// } 
// arr.forEach(print);

// // function print(el){
// //     console.log(el);
// // } 
// // arr.forEach(print);
// arr.forEach(function(el){
//     console.log(el);
// });

let array = [
    {
        name: "aman",
        marks: 95,
    },
    {
        name: "rajat",
        marks: 92,
    },
    {
        name: "faysal",
        marks:100
    }
];
// array.forEach((student)=>{
//     console.log(student);
// })

// let num = [1,2,3,4];

// let double = num.map(function(el){
//     return el*2;
// });
// console.log(double);

// let num2 = [1,2,3,4];

// let double2= num2.forEach(function(el){
//     return el*2;
// });

// console.log(double);
function print(el){
    console.log(el*5);
}
arr.forEach(print);let sum = 0;
arr.forEach(function(el){
    sum += el;
    console.log(sum);
});
// console.log(a[0]);
let sum2 = 0;
let b = arr.map(function(el){
    sum2 += el;
    console.log(sum2);
    return el;
});
console.log(b[1]);
let newArray = arr.map((el)=>{
    return el*10;
})
newArray.forEach((el)=>{
    console.log(el);
})

let cgpa = array.map((el)=>{
    return el.marks;
});

let even = arr.filter((el)=> el%2==0);
let val = arr.every((el)=> (el%2==0));
// [1,2,3,4].reduce((res,el) => (res+el)); 
let val2 = even.every((el)=> (el%2==0));
let numbers = [1,5,6,10,19,8];
let max = -1;
for(let i=0;i<numbers.length;i++){
    if(numbers[i]>max){
        max = numbers[i];
    }
}
let maxNum=numbers.reduce((res,el)=>{
    if(el>max){
        return el;
    }else{
        return max;
    }
    
})
console.log(max);
console.log(maxNum);