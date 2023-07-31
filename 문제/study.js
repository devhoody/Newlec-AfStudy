{
    //1. 매개변수 받지 않고 함수 만들어보기
    let sum = function () {
        let x = arguments[0];
        let y = arguments[1];
        console.log(x + y)
    }
    sum(1, 2)
}
{
    //2. 기존 매개변수는 그대로 두고 함수를 출력할때 10이 되도록 해보기
    let sum = function (x,y,...rest) {
        console.log(rest[0]+rest[1]+rest[2])
    }
    sum(1, 2, 2,3,5)
}
{
    //3. 숫자배열, 문자배열 1차배열로 한번에 출력하기
    let nums = [1, 2, 3];
    let char = ['a', 'b', 'c', 'd', 'e', ...nums];
    console.log(char)
}