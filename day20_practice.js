// const arrayAvarage = (arr)=>{
//     let sum = 0,avg=0;
//     for(let i=0;i<arr.length;i++){
//         sum += arr[i]; 
//         avg = sum/arr.length;
//     }
//     console.log(avg);
// }
// arrayAvarage([1,2,3,4,5]);
const object = {
    message: 'hello, world',
    logMessage(){
        console.log(this.message);
    },
    logMessage2:()=>{
        console.log(this.message);
    }
};
setTimeout(object.logMessage2,1000);
// let length = 4;
// function callback(){
//     console.log(this.length);
// }
// const object = {
//     length:5,
//     method(callback){
//         callback();
//     },
// };
// object.method(callback);