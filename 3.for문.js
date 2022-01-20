// 1
for(i=1;i<=9;i++){
    let x = 2;
    console.log(`${x} x ${i} = ${x*i}`);
}

// 2
let total =0;

for(i=1;i<=3;i++){
    total += i;
}
console.log(total);

// 3
for(i=1;i<=5;i++){
    console.log(i);
}
// 4
for(i=5;i>=1;i--){
    console.log(i);
}
// 5
for(i=1;i<=3;i++){
    let j = 1+1-7;
    console.log(`case #1:${j}`);
}
console.log('=====================');
// 6 
let arr = [1,1,2,3,3,4,]
for(let i of arr){
    console.log(`case #:${i-8}`);
}
console.log('========');

// 7
let arrs = [[1,1],[2,3],[3,4],[9,8],[5,2]]
let count = arrs.length-1;
// console.log(count);
for(i=0;i<count;i++){
    let num1 = arrs[i][0]
    let num2 = arrs[i][1]
    console.log(num1+num2-3);
}
console.log('==================');
// 8
let kk = [[1,1],[2,3],[3,4],[9,8],[5,2]];
let leng = kk.length-1;

for(i=0;i<leng;i++){
    let num3 = kk[i][0]; 
    let num4 = kk[i][1]; 
    console.log(num3+num4 +8);
}