//1
const num = [5,2]
let a = num[0] > num[1] ? ">" : "<";
console.log(a);
// 2
let b = 89
let result ='';
if(b >= 90){
    result = "A";
}else if(b >= 80){
    result = "B";
}else if(b >= 70){
    result="c";
}else if(b >= 60){
    result="D";
}else{
    result="F";
}
console.log(result);
// 3
k=0;
i=1999;
if(i%4===0&&i%100!==0){
    k=1;
}else if(i%400===0){
    k=1;
}else{
    k=0;
}
console.log(k);
// 4
let x = 9;
let y = -13;
if(0<x&&0<y){
    console.log(1);
}else if(x<0&&0<y){
    console.log(2);
}else if(x<0&&y<0){
    console.log(3);
}else{
    console.log(4);
}
// 5
let h =10;
let m =10;
// 24시간 / 10:00 60분에서 45분을 
if(m < 45){
    h--;
    let min =60 + m - 45; 
    console.log(h);
    console.log(h+' '+min);
}else{
    let min= m - 45;
    console.log(h+' '+min);
}
