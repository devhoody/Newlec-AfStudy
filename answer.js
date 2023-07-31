// 230728

// 문제 1
{
  let name = "NTH";
  let temp = "My name is " + name + "";
  let temp1 = `My name is ${name}`;
  console.log(temp, temp1);
}
// 문제 1-1
{
  let temp2 = String.raw`"${temp1}"`;
  console.log(temp2);
}
// 문제 2
{
  let kors = [[20, 40, 30], [40, 30]];
  let [[kor1, kor2]] = kors;
  console.log(kor1, kor2)
}

// 230726 

//문제 1
var height = prompt("키를 입력하세요.");

if (height >= 150){
  console.log("YES");
} else {
  console.log("NO");
}
