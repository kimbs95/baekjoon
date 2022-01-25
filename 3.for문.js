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
// 9
console.log('===============');
let ac=5;
let star = '';
let blank='';
for(let i= 1; i<=ac; i++){
    star += '*'; //  true 일때 매순간순간 star 를 한번씩 찍고  위에 저장이된다.
    for(let e =0; e < ac-i; e++){
        blank += ' ';// 다음 for 문으로 들어와 for 문이 끝날때까지 돌아간다.
    }
    console.log(blank + star);// 출력을 하여 보여준후 
    blank='';// 초기화를 해줘야 전역 변수에서도 초기화가 된다.
}
console.log('@@@@@@@@@@@@@@@@@@@');
// 배열 선언하는 방법 2)
let x = 5;

let art= new Array(x).fill(' ');
// new Array 를 사용하여 x 만큼의 인덱스를 만듬
// fill 메서드는 배열 시작부터 끝까지 정적인 값 하나를 채움

for(let a = x-1; a > 0; a--){
    art[a]='*'; 
    console.log(art.join(''));
    //join  메서드는 배열 모두를 연결하여 하나로만듬
}
console.log('@@@@@@@@@@@@@@@@@@');

// 10
let ww = 10; 
let yy = 5; 
let tt = '';

let arr1 =[1,10,4,9,2,3,8,5,7,6];
for(let i of arr1){
    if(yy>i){
        tt += `${i} `;
    }
}
console.log(tt);

console.log('============');