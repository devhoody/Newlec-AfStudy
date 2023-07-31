{
    //1번 문제 - 민아
    // 아래의 코드에서 c(a, b)의 값을 예상해서 적어보세요.

    var a = [1, 2, 3];
    var b = ["you", "are"];

    var c = function (a, b) {
    console.log([[...a], ...[...b]][1]);
    };
    c(a, b);

        // ... = 배열을 풀게!
        // [...a] = [...[1,2,3]] = [1,2,3]
        // ...[...b] = ...[...["you", "are"]] = ...["you", "are"] = "you", "are"
        // [[1,2,3], "you", "are"]
    

    //2번 문제 - 민아
    // 아래 numbers에서 Math.max, Math.min, apply를 이용하여 최대값, 최소값을
    // 콘솔로 출력하세요
    var numbers = [5, 6, 2, 3, 7];

    // 여기에 코드 적기~
    console.log(Math.max(...numbers));
    // console.log(Math.max.apply(null, numbers));
    console.log(Math.min(...numbers));
    // console.log(Math.min.apply(null, numbers));
}

{
    // 대훈
    //1. 매개변수 받지 않고 두개의 인자의 합을 구하는 함수 만들어보기

    // 매개변수 사용하지 않으면 arguments를 선언해서 사용해야
    let sum = function () { 
        let a = arguments[0];
        let b = arguments[1];
        console.log(a + b);
    };
    sum(1, 2);

    let sum1 = function (a, b) { // 매개변수 사용시!!
        console.log(a + b);
    };
    sum1(3, 4);

    
    //2. 기존 매개변수는 그대로 두고 인자를 추가해서 함수를 출력할때 덧셈의 합이 10이 되도록 해보기
    let sum2 = function (x, y, ...rest) {
        console.log(rest[0] + rest[1]+ rest[2])
    };
    sum2(1, 2, 3, 2, 5)

    //3. 숫자배열, 문자배열 각각 만들어서 하나의 1차배열로 한번에 출력하기
    let arr = [1, 2, 3, 4, 5];
    let str = ['a', 'b', 'c', 'd']; 

    console.log([...arr, ...str]);
}

{
    // 노씨 문제 - 정렬하기
    let arr = [10, 60, 30, 20, 24, 15];
    // function()과 매개 변수를 이용한 오름차순 정렬

    arr.sort(function (a,b)  {
        return a - b;
    });
    console.log(arr);

    // arr 배열에 35값 추가, 10 제거한 후 출력 => 메소드 이용
    arr.shift();
    arr.push(35);
    console.log(arr);

    // arrow function을 이용한 오름차순 정렬
    arr.sort((a,b) => a - b);
    console.log(arr);

    // arrow function을 이용한 내림차순 정렬 후 출력
    arr.sort((a,b) => b - a);
    console.log(arr);

    // splice를 이용하여 35를 제거하고 100,101을 추가하기
    arr.splice(1, 1, 100, 101)
    console.log(arr);
}

{
    // 지은
    // 다음 콘솔에 출력될 값을 예측하시오!
    console.log("------문제1------");
    {
    function test(a = 5, b = a + 2) {
        console.log(a + b);
    }
    test(undefined, undefined);
    } // undefined이면 기본값이 그대로 들어가면 됨! 

    console.log("------문제2------");
    {
    // 아래의 배열 값을 내림차순으로 정렬하시오.
    // .sort(), arrow function 사용하기!

        let nums = [10, 20, 39, 68, 92, 45, 100];
        nums.sort((a, b) => b-a);
        console.log(nums);
    }
}

{
    //이송희 문제1번
    //뭘까요~ 출력되는 값을 써보시오.

    let nums = [1, 2, 45, 60, 78, 27];
    let nums1 = [3, 5, 8, ...nums];
    // 3, 5, 8, 1, 2, 45, 60, 78, 27_ nums를 풀었음! 

    function print([x, y, ...aa]) {
    // aa: 8, 1, 2, 45, 60, 78, 27
    console.log(x, y, aa[2], aa.length, arguments.length, arguments[2]);
    }

    print(nums1);
    // 3, 5, 2, 7,arguments !!! 괄호 안에 들어가는 값이 몇개?! "nums1"1개! = 배열로 묶여서 배열1개! 들어감 ! => length 1개! 
}