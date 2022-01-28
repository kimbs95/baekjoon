
// 1
function add() {
    let num = [[1, 1],[2, 3],[3, 4],[9, 8],[5, 2],[0, 0]];
    let leng = num.length-1;

    while (leng > 0) {
        for (let i = 0; i < num.length-1; i++) {

            let a = num[i][0];
            let b = num[i][1];
            
            leng--;
            console.log(a+b); 
            
        }
    }
}
add();
console.log('@@@@@@@@@@@@@@@@@');
// 2
function add2(n){
    let x = n; // 인수를 사용해 변수 선언을한다.
    let z = 0;// z 는 0 으로 선언해놓는다.
    

    let count = 0; // 몇번만에 구했는지 알수있게 선언
    while(true){
        z = Math.floor(x/10) + x%10;//처음 선언해놓은 x 사용 2. 변경된 x 를활용
        x = x%10*10 + z%10 ;// x 값을 변경 z 값은 그대로 활용
        count++;
        
        if(n===x){
            break;// 같으면 탈출
        }
    }
    console.log(count);
}
add2(26);
console.log('@@@@@@@@@@@@@@@@@@@@@@@');

