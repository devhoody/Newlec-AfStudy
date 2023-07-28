// 230728
//
// 문제 1
// name변수를 선언해서 본인 이니셜을 넣고, 2.temp에 $와 + 를 이용해서 두 줄을 넣으세요!
// temp = 'My name is <<이름넣기>>';
{
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

// 문제 2 
// kor1과 kor2 변수에 kors의 값을 넣어 20,40을 출력하세요!
// 단, 코드는 console.log()포함 두줄로 입력해주세요!
// let kors = [[20, 40, 30], [40, 30]];
// console.log()
{
    let kors = [[20,40,30], [40,30]];
    let [[kor1, kor2]] = kors;
    console.log(kor1, kor2)

}
