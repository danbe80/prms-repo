/* 
    1. 함수 선언문
    2. 함수 표현식
    3. Function 생성자 함수
    4. 화살표 함수 표현식
*/

console.log('------------- 함수 선언문 --------------');
// 함수 선언문
function foo1() {
    console.log('foo1');
}

foo1();

console.log('------------- 함수 표현식 --------------');
// 함수 표현식
const foo2 = function () {
    console.log('foo2');
}

foo2();

console.log('------------- Function 생성자 함수 --------------');
// Function 생성자 함수
const foo3 = new Function("console.log('foo3');")


foo3();

console.log('------------- 화살표 함수 표현식 --------------');
// 화살표 함수 표현식
const foo4 = () => {
    console.log('foo4');
}

foo4();