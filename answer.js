// 230801
    // 태호
    // 1.User 클래스에 name, age 변수를 은닉화하여 선언하세요.
    // 2.User 클래스에 name, age를 매개변수로 갖는 생성자 함수를 선언하세요.
    // 3.User 클래스에 Age의 getter(getAge), setter(setAge)를 만들어주세요.
    // 4. setAge에서 100살을 초과하여 입력할 경우, "나이는 100살을 초과할 수 없습니다." 를 출력하고, age가 재설정되지 않도록 setAge를 수정해주세요.
    // 5. new를 이용해 User객체에 "본인이름", "본인나이"를 대입한 변수 user1을 만들고, getAge를 이용하여 본인 나이를 출력해보고, setAge를 이용해 150살을 입력했을때 결과를 확인하세요~!
    class User {
      #name;
      #age;

      constructor(name, age) {
        this.#name = name;
        this.#age = age;
      }

      get Age() {
        return this.#age;
      }

      set Age(value) {
        if (value > 100) {
          console.log("나이는 100을 초과할 수 없습니다.");
          return;
        }
        this.#age = value;
      }
    }

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

