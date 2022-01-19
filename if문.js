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