/* 
    1. 기본값 매개변수 default function parameter
    2. 나머지 매개변수 Rest parameter
    3. arguments 객체
*/

// 1. 기본값 매개변수 default function parameter
function foo1(arg = 1) {
    console.log(arg);
}

foo1();

/* 
    arg 매개변수 값에 아무런 기본값 설정을 해주지 않으면 foo()에 매개변수를 빈값을 보낼 때 출력 값은 undefined
    하지만 기본 값 설정을 해줬을 경우 `arg = 1` 을 넣어줄 경우 foo()를 다시 빈값을 보내 출력된 값은 기본 값인 1이 출력된다. 
*/

// 2. 나머지 매개변수 Rest parameter
function foo2(arg, ...rest) {
    console.log(rest);
}

foo2(1,2,3);

/* 
    첫번째 인자를 제외하고 두번째 인자부터 rest 매개변수 값에 담기게 된다.

*/
//  3. arguments 객체
function foo3(arg, ...rest) {
    console.log(arguments);
}

foo3(1,2,3); // 출력값 : [Arguments] { '0': 1, '1': 2, '2': 3 }