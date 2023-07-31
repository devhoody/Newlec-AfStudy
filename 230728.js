// 230728
//
// 문제 1 
// name변수를 선언해서 본인 이니셜을 넣고, 2.temp에 $와 + 를 이용해서 두 줄을 넣으세요!
{
    // 노씨
    let name = "NTH"
    let temp = "My name is" + name;
    let temp1 = `My name is ${name}`;
    console.log(temp);
}
// 문제 1-1 
// String.raw 메소드 이용해서 넣기
{
    // 노씨
    temp = String.raw`My name is ${name}`;
}

// 문제 2 
// kor1과 kor2 변수에 kors의 값을 넣어 20,40을 출력하세요!
// 단, 코드는 console.log()포함 두줄로 입력해주세요!
 let kors = [[20, 40, 30], [50, 30]];
 let [[kor1,kor2],[kor3]]=kors;
 console.log(kor1,kor2,kor3);
{
    // 노씨
    let kors = [[20, 40, 30], [40, 30]];
    [[kor1, kor2]] = kors;
    console.log(kor1, kor2);
}
// temp = 'My name is <<이름넣기>>';
{   //smj_1번
let name = "<<SMJ>>";

let temp = 'My name is '+name+''; 
let temp1 = `My name is ${name}`;
console.log(temp,temp1);
}

// 문제 1-1
// Strring.raw 메소드 이용해서 double quotation 넣기
{   //smj_1-1번
let temp2 = String.raw`
"${temp1}"
`;
console.log(temp2);
}
// 문제 2 
// kor1과 kor2 변수에 kors의 값을 넣어 20,40을 출력하세요!
// 단, 코드는 console.log()포함 두줄로 입력해주세요!
// let kors = [[20, 40, 30], [40, 30]];
// console.log()
{   //smj_2번
let kors = [[20, 40, 30], [40, 30]];
([[kor1,,],[kor2,]] = kors);
console.log(kor1, kor2);
}
{
    //대훈 문제1번 풀이
    const name = "JDH"
    let temp = `My name is ${name}`
    console.log(temp)
}

// 문제 1-1
// Strring.raw 메소드 이용해서 .넣기
{
    const name = "JDH"
    let temp = `My name is "\"
    ${name}`
    console.log(temp)
}
{
    //민아 1번문제 
    let name = "JMA";
    // let temp1 = 'My name is '+name+'';
    // let temp1 = `My name is ${name}`;
    // console.log(temp1);
}
{
    //민아 1-1 문제풀이
    let temp = String.raw`\My name is "${name}\"`;
    console.log(temp);
}
{
    // 송희 문제 1-1
    // String.raw 메소드 이용해서 "넣기
    let name ="이송희";
    let temp ="my name is '+name+'";
    let temp1 =`my name is ${name}`;
    console.log(temp1);
}
{
    // 송희 문제 1-1
    // String.raw 메소드 이용해서 .넣기
    let temp2 =String.raw`my name \n
    is ${name}`;
    console.log(temp2);
}
    // 문제 2 
    // kor1과 kor2 변수에 kors의 값을 넣어 20,40을 출력하세요!
    // 단, 코드는 console.log()포함 두줄로 입력해주세요!
    // let kors = [[20, 40, 30], [40, 30]];
    // console.log()
{
    //대훈 2번 문제풀이
    let kors = [[20,40,30], [40,30]];
    let [[kor1, kor2]] = kors;
    console.log(kor1, kor2)

}

{
    //민아 2번 문제풀이
    let kors = [[20, 40, 30], [40, 30]];
    let [[kor1, kor2, ]] = kors;
    console.log(kor1, kor2)
}

{
    //송희 2번 문제풀이
    let kors = [[20, 40, 30], [40, 30]];
    let [[kor1,kor2]]=kors;
    console.log(kor1,kor2)
}
