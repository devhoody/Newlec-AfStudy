{

    //1번 문제 - 민아
    // 아래의 코드에서 c(a, b)의 값을 예상해서 적어보세요.

    let a = [1, 2, 3];
    let b = ["you", "are"];

    var c = function (a, b) {
    console.log([[...a], ...[...b]][1]);  //a[1]와 같음   [][1]첫번째 배열의 인덱스 1번을 구하라는거임  //...[...b]는 배열을 푼다는것
    };       
    c(a, b);

    

    {
    // 이름 :이송희
    // 예측한 정답은 여기에 기입~~~
    //답: YOU
    }

    //지은 문제 풀이
    {
        //1번 문제 - 민아
        // 아래의 코드에서 c(a, b)의 값을 예상해서 적어보세요.

    //2번 문제 - 민아
    // 아래 numbers에서 Math.max, Math.min, apply를 이용하여 최대값, 최소값을
    // 콘솔로 출력하세요
    let numbers = [5, 6, 2, 3, 7];

    let max = Math.max.call(null, ...numbers); // null 자리는 가져올 함수가 없을때 null이나 undefined를 넣는다.
    let max1 = Math.max.apply(undefined,numbers);
    // let min = Math.min.apply(null,numbers);

        var a = [1, 2, 3];
        var b = ["you", "are"];


    // 여기에 코드 적기~
    var max =Math.max(...numbers);
    var min =Math.min.apply(null,numbers);// 가져올 함수가 없으니깐 null,undefined를 넣고 다음을 넣어서
    var min =Math.min.call(undefined,...numbers);


    console.log(max);
    console.log(max1);
    console.log(Math.max(...numbers));
    // console.log(min);
}
    console.log("-----------------------------------")
{ // 민아 문제풀이
    // 대훈
    //1. 매개변수 받지 않고 두개의 인자의 합을 구하는 함수 만들어보기

    let sum1 = function(){
            let x = arguments[0];
            let y = arguments[1];
            console.log(x + y);
    }
    console.log(1, 2);

    //2. 기존 매개변수는 그대로 두고 인자를 추가해서 함수를 출력할때 덧셈의 합이 10이 되도록 해보기
    let sum2 = function(x, y, ...kk){
        console.log(x+y+kk[0]+kk[1]);
    }
    sum2(1, 2, 3, 4);

    //3. 숫자배열, 문자배열 각각 만들어서 하나의 1차배열로 한번에 출력하기
    let str = ['깃허브','무서워'];
    let nums = [1, 3, 5, ...str];

    let nums1 = [1, 3, 5];
    let str1 = ['깃허브','무서워'];
    
    console.log(str)
    
    let numsStr = nums1.concat(str1);
    console.log(numsStr);

    nums1.push.apply(nums1, str1);
    console.log(nums1);

    let sum=function(){
        let a=arguments[0];
        let b=arguments[1];
        console.log(a+b);
    }
    sum(1,2)
    
    //2. 기존 매개변수는 그대로 두고 인자를 추가해서 함수를 출력할때 덧셈의 합이 10이 되도록 해보기
    let sum1=function(x,y,...aa){
        console.log(aa[0]+aa[1]+aa[2])
    }
    sum1(1,2,2,3,5)
    //3. 숫자배열, 문자배열 각각 만들어서 하나의 1차배열로 한번에 출력하기
    let nums=[1,2,3,4,5];
    let string =["모","르","겠","다.",...nums]; //nums를 풀어서 넣으면 1차 배열로 한번에 출력 가능

    console.log(string);



}

{ // 민아 문제 풀이
    // 뽀씨 문제 - 정렬하기
    let arr = [10, 60, 30, 20, 24, 15];
    // function()과 매개 변수를 이용한 오름차순 정렬

        arr.sort(function(a, b){
            return a - b;
        });
        console.log(arr);        
    // arr 배열에 35값 추가, 10 제거한 후 출력 => 메소드 이용
        arr.push(35);
        arr.shift();
        console.log(arr);
    // arrow function을 이용한 오름차순 정렬
        arr.sort((a,b)=>a-b);
        console.log(arr);
    // arrow function을 이용한 내림차순 정렬 후 출력
        arr.sort((a,b)=>b-a);
        console.log(arr);
    // splice를 이용하여 35를 제거하고 100,101을 추가하기
        arr.splice(1, 1, 100, 101);
        console.log(arr);

    let sorts= arr.sort(function(a,b){
        return a-b
    })
    console.log(sorts);

    // arr 배열에 35값 추가, 10 제거한 후 출력 => 메소드 이용
        arr.shift();
        arr.push(35);
    // let array=arr.splice(0,1,35)  //splice를 사용하고 변수를 선언해 넣어주면 제거된게 출력됨
    //  console.log(array)
        console.log(arr)

    // arrow function을 이용한 오름차순 정렬
    let sort1= arr.sort((a,b)=>(a-b))
    console.log(sort1);
    // arrow function을 이용한 내림차순 정렬 후 출력
    let sort2= arr.sort((a,b)=>(b-a))
    console.log(sort2);
    // splice를 이용하여 35를 제거하고 100,101을 추가하기
    let array1=arr.splice(1,1,100,101)  
    console.log(array1)
    console.log(arr)


}

{ //민아 문제 풀이
    // 지은
    // 다음 콘솔에 출력될 값을 예측하시오!
    console.log("------문제1------");
    {
    function test(a = 5, b = a + 2) {
        console.log(a + b);
    }

    test(undefined, undefined); 
    // undefined면 기본값이 들어가므로, a = 5, b = 7 이므로 
    // 12 출력.

    test(undefined, undefined);
    //12

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
            console.log(rest[0] + rest[1] + rest[2])
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


    let nums = [10, 20, 39, 68, 92, 45, 100];

        nums.sort((a,b)=>b-a);
        console.log(nums);



    let nums1=nums.sort((a,b)=>(a-b))

    console.log(nums1);

    }
}

        arr.sort(function (a, b) {
            return a - b;
        });
        console.log(arr);



{ // 민아 문제 풀이
    //이송희 문제1번
    //뭘까요~ 출력되는 값을 써보시오.

        // arr 배열에 35값 추가, 10 제거한 후 출력 => 메소드 이용
        arr.shift();
        arr.push(35);
        console.log(arr);


        // arrow function을 이용한 오름차순 정렬
        arr.sort((a, b) => a - b);
        console.log(arr);


    function print([x, y, ...aa]) {
        console.log(x, y, aa[2], aa.length, arguments.length, arguments[2]);
    }

    print(nums1); // 3, 5, 2, 7, 1, undefined
    // aa는 8부터 나머지가 들어가고
    // arguments는 입력값이 들어가는데, 입력값이 배열 1개니까 길이는 1개, 1개니까 인덱스2는 언디

        // arrow function을 이용한 내림차순 정렬 후 출력
        arr.sort((a, b) => b - a);
        console.log(arr);

        // splice를 이용하여 35를 제거하고 100,101을 추가하기
        arr.splice(1, 1, 100, 101)
        console.log(arr);
    }

<<<<<<< HEAD
    print(nums1);

    

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
            nums.sort((a, b) => b - a);
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

}

{

    //1번 문제 - 민아
    // 아래의 코드에서 c(a, b)의 값을 예상해서 적어보세요.

    let a = [1, 2, 3];
    let b = ["you", "are"];

    let c = function (a, b) {
        // console.log([[...a], ...[...b]][1]);
        console.log([[...a], ...[...b]]);
        console.log([[...a], ...b]);
        console.log([a, ...b]);
        console.log([...b]);
    };
        c(a, b);

    

    {
    // 이름 : 정민아
     // you 출력
     // [...a],...[...b]는 [1, 2, 3], 'you', 'are' 출력.
     // 인덱스 1번은 you가 해당하므로 you가 나옴

    }

    //지은 문제 풀이
    {
        //1번 문제 - 민아
        // 아래의 코드에서 c(a, b)의 값을 예상해서 적어보세요.

    //2번 문제 - 민아
    // 아래 numbers에서 Math.max, Math.min, apply를 이용하여 최대값, 최소값을
    // 콘솔로 출력하세요
    let numbers = [5, 6, 2, 3, 7];

    let max = Math.max.call(null, ...numbers); // null 자리는 가져올 함수가 없을때 null이나 undefined를 넣는다.
    let max1 = Math.max.apply(undefined,numbers);
    // let min = Math.min.apply(null,numbers);

        var a = [1, 2, 3];
        var b = ["you", "are"];


    // 여기에 코드 적기~
    var max =Math.max(...numbers);
    var min =Math.min.apply(null,numbers);// 가져올 함수가 없으니깐 null,undefined를 넣고 다음을 넣어서
    var min =Math.min.call(undefined,...numbers);

    console.log(max);
    console.log(max1);
    console.log(Math.max(...numbers));
    // console.log(min);
}
    console.log("-----------------------------------")
{ // 민아 문제풀이
    // 대훈
    //1. 매개변수 받지 않고 두개의 인자의 합을 구하는 함수 만들어보기

    let sum1 = function(){
            let x = arguments[0];
            let y = arguments[1];
            console.log(x + y);
    }
    console.log(1, 2);

    //2. 기존 매개변수는 그대로 두고 인자를 추가해서 함수를 출력할때 덧셈의 합이 10이 되도록 해보기
    let sum2 = function(x, y, ...kk){
        console.log(x+y+kk[0]+kk[1]);
    }
    sum2(1, 2, 3, 4);

    //3. 숫자배열, 문자배열 각각 만들어서 하나의 1차배열로 한번에 출력하기
    let str = ['깃허브','무서워'];
    let nums = [1, 3, 5, ...str];

    let nums1 = [1, 3, 5];
    let str1 = ['깃허브','무서워'];
    
    console.log(str)
    
    let numsStr = nums1.concat(str1);
    console.log(numsStr);

    nums1.push.apply(nums1, str1);
    console.log(nums1);

    let sum=function(){
        let a=arguments[0];
        let b=arguments[1];
        console.log(a+b);
    }
    sum(1,2)
    
    //2. 기존 매개변수는 그대로 두고 인자를 추가해서 함수를 출력할때 덧셈의 합이 10이 되도록 해보기
    let sum1=function(x,y,...aa){
        console.log(aa[0]+aa[1]+aa[2])
    }
    sum1(1,2,2,3,5)
    //3. 숫자배열, 문자배열 각각 만들어서 하나의 1차배열로 한번에 출력하기
    let nums=[1,2,3,4,5];
    let string =["모","르","겠","다.",...nums]; //nums를 풀어서 넣으면 1차 배열로 한번에 출력 가능

    console.log(string);



}

{ // 민아 문제 풀이
    // 뽀씨 문제 - 정렬하기
    let arr = [10, 60, 30, 20, 24, 15];
    // function()과 매개 변수를 이용한 오름차순 정렬

        arr.sort(function(a, b){
            return a - b;
        });
        console.log(arr);        
    // arr 배열에 35값 추가, 10 제거한 후 출력 => 메소드 이용
        arr.push(35);
        arr.shift();
        console.log(arr);
    // arrow function을 이용한 오름차순 정렬
        arr.sort((a,b)=>a-b);
        console.log(arr);
    // arrow function을 이용한 내림차순 정렬 후 출력
        arr.sort((a,b)=>b-a);
        console.log(arr);
    // splice를 이용하여 35를 제거하고 100,101을 추가하기
        arr.splice(1, 1, 100, 101);
        console.log(arr);

    let sorts= arr.sort(function(a,b){
        return a-b
    })
    console.log(sorts);

    // arr 배열에 35값 추가, 10 제거한 후 출력 => 메소드 이용
        arr.shift();
        arr.push(35);
    // let array=arr.splice(0,1,35)  //splice를 사용하고 변수를 선언해 넣어주면 제거된게 출력됨
    //  console.log(array)
        console.log(arr)

    // arrow function을 이용한 오름차순 정렬
    let sort1= arr.sort((a,b)=>(a-b))
    console.log(sort1);
    // arrow function을 이용한 내림차순 정렬 후 출력
    let sort2= arr.sort((a,b)=>(b-a))
    console.log(sort2);
    // splice를 이용하여 35를 제거하고 100,101을 추가하기
    let array1=arr.splice(1,1,100,101)  
    console.log(array1)
    console.log(arr)


}

{ //민아 문제 풀이
    // 지은
    // 다음 콘솔에 출력될 값을 예측하시오!
    console.log("------문제1------");
    {
    function test(a = 5, b = a + 2) {
        console.log(a + b);
    }

    test(undefined, undefined); 
    // undefined면 기본값이 들어가므로, a = 5, b = 7 이므로 
    // 12 출력.

    test(undefined, undefined);
    //12

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
            console.log(rest[0] + rest[1] + rest[2])
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


    let nums = [10, 20, 39, 68, 92, 45, 100];

        nums.sort((a,b)=>b-a);
        console.log(nums);



    let nums1=nums.sort((a,b)=>(a-b))

    console.log(nums1);

    }
}

        arr.sort(function (a, b) {
            return a - b;
        });
        console.log(arr);



{ // 민아 문제 풀이
    //이송희 문제1번
    //뭘까요~ 출력되는 값을 써보시오.

        // arr 배열에 35값 추가, 10 제거한 후 출력 => 메소드 이용
        arr.shift();
        arr.push(35);
        console.log(arr);


        // arrow function을 이용한 오름차순 정렬
        arr.sort((a, b) => a - b);
        console.log(arr);


    function print([x, y, ...aa]) {
        console.log(x, y, aa[2], aa.length, arguments.length, arguments[2]);
    }

    print(nums1); // 3, 5, 2, 7, 1, undefined
    // aa는 8부터 나머지가 들어가고
    // arguments는 입력값이 들어가는데, 입력값이 배열 1개니까 길이는 1개, 1개니까 인덱스2는 언디

        // arrow function을 이용한 내림차순 정렬 후 출력
        arr.sort((a, b) => b - a);
        console.log(arr);

        // splice를 이용하여 35를 제거하고 100,101을 추가하기
        arr.splice(1, 1, 100, 101)
        console.log(arr);
    }

    print(nums1);


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
            nums.sort((a, b) => b - a);
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
}