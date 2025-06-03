/* 
    1. IIFE ( 즉시 실행 함수 )
    2. 재귀함수
    3. 중첩함수
    4. 콜백함수
*/

console.log('------------- IIFE ( 즉시 실행 함수 ) --------------');
// IIFE ( 즉시 실행 함수 )
(function foo1() {
    console.log('foo1');
})()

console.log('------------- 재귀함수 --------------');

// 재귀함수 => 함수를 무한적으로 반복하는 함수
function foo2(arg) {
    if(arg === 3) return; // 무한적으로 도는 재귀함수를 멈추기 위해서 조건을 설정해주어 나가는 코드를 설정해줘야 한다.
    console.log(arg);
    foo2(arg+1);
}

foo2(1);

console.log('------------- 중첩함수 --------------');

// 중첩함수
function foo3(arg) {
    function bar() {
        console.log(arg);
    }

    bar();
}

foo3(1);

console.log('------------- 콜백함수 --------------');

// 콜백함수
function foo4(arg) {
    arg();
}

foo4(() => {console.log(1)});