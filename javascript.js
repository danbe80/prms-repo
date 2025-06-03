/*
    1. 자바스크립트 함수는 함수의 실제 매개변수가 될 수 있다.
    2. 자바스크립트 함수는 함수의 반환값이 될 수 있다.
    3. 자바스크립트 함수는 할당명령문의 대상이 될 수 있다.
    4. 자바스크립트 함수는 동일비교의 대상이 될 수 있다.
*/


//  1. 자바스크립트 함수는 함수의 실제 매개변수가 될 수 있다.
function foo1(arg) {
    arg();
}

function bar() {
    console.log('bar');
}

foo1(bar);


// 2. 자바스크립트 함수는 함수의 반환값이 될 수 있다.
function foo2(arg) {
    return arg;
}

function bar() {
    console.log('bar');
}

foo2(bar)();

// 3. 자바스크립트 함수는 할당명령문의 대상이 될 수 있다.
// 4. 자바스크립트 함수는 동일비교의 대상이 될 수 있다.
const foo3 = function (arg) {
    return arg;
}

foo3(1); // 1 반환