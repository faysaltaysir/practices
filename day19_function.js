function avg(a,b,c){
    let avg = (a+b+c)/3;
    return avg;
}
let mult = [];
console.log(avg(1,2,9));
function multTable(a){
    for(let i=1;i<=10;i++){
        mult.push(i*10);
    }
    return mult;
}
function multTableWithadd(a){
    for(let i=a;i<=a*10;i=i+a){
        let mult = i ;
        console.log(mult);
    }
}
let str = "";
let arr = ["how ","are ","you "];
function concat(array){
    for(let i=0;i<array.length;i++){
        str += arr[i];
    }
    return str;
    
}
console.log(concat(arr));