let a =10,b=20;
const obj = {
    a: 2,
    b: 3,
    avg(){
        let sum = this.a+this.b;
        console.log(sum);
        console.log(this);
    }
};

obj.avg();
console.log(this);
const sum2 = (a,b) => {
    console.log(a+b);
}
//arrow function
const pow=(a,b) => a+b;
const hello = () => {
    console.log("hello");
};
