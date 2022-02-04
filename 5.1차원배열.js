// 1
function add() {
    let arr = [20, 10, 35, 30, 7]
    let a = arr[0];
    let b = arr[0];

    for (let j of arr) {
        if (j > a) {
            a = j;
        } else if (j < b) {
            b = j;
        }
    }

    console.log(a);
    console.log(b);
}
add();

// 2
function add2() {
    let arr = [3, 29, 38, 12, 57, 74, 40, 85, 61];
    let a = arr[0];

    for (let i of arr) {
        if (a < i) {
            a = i;
        }
    }
    console.log(a);
    console.log(arr.indexOf(a) + 1);
}
add2();

// 3
function add3() {
    let arr = [150, 266, 427]; //배열
    let num = 1; // 곱하기를 하기위해 1을 선언
    for (let i of arr) {
        num *= i; // i 에 하나씩 들어와 곱셈
    }
    let str = String(num); //곱셈한걸 문자열로 변경
    console.log(str);
    console.log('===========');

    for (let j = 0; j < 10; j++) { //0~9까지 반복문으로 만듬
        let count = 0; //count 를  0 으로 만듬
        for (let k = 0; k < str.length; k++) { //str 의 숫자만큼 반복문
            if (j == str[k]) { //str배열순서대로 j 번째 숫자랑 똑같으면
                count++; //그숫자의 카운트가 올라감
            }
        }
        console.log(count);
    }
}
add3();
console.log('==============');

// 4 
function add4() {
    let arr = [39, 40, 41, 42, 43, 44, 82, 83, 84, 85];


    let arr2 = [];
    let arr3 = [];

    for (let i of arr) {
        let k = i % 42;
        arr2.push(k);
    }
    console.log(arr2);
    const set = new Set(arr2);//배열의 중복된값을 제거하는 set 
    realset = [...set];
    console.log(realset);
    console.log(realset.length);
}
add4();

//5