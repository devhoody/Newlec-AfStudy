{
    // 대훈
    // 1. class 를 사용해서 Exam 만들고 -> 국어, 영어, 수학, 컴퓨터 점수 초기화
    // 2. private 변수 사용해서 은닉화 하기
    // 3. 수학성적과 컴퓨터 성적의 합이 100, 평균이 50이 나오게 객체 생성하기
    // 4. getter 와, setter 를 활용해서 수학과 컴퓨터의 성적이 제대로 들어갔는지 확인해보기
}

{
    // 태호
    // 1.User 클래스에 name, age 변수를 은닉화하여 선언하세요.
    // 2.User 클래스에 name, age를 매개변수로 갖는 생성자 함수를 선언하세요.
    // 3.User 클래스에 Age의 getter(getAge), setter(setAge)를 만들어주세요.
    // 4. setAge에서 100살을 초과하여 입력할 경우, "나이는 100살을 초과할 수 없습니다." 를 출력하고, age가 재설정되지 않도록 setAge를 수정해주세요.
    // 5. new를 이용해 User객체에 "본인이름", "본인나이"를 대입한 변수 user1을 만들고, getAge를 이용하여 본인 나이를 출력해보고, setAge를 이용해 150살을 입력했을때 결과를 확인하세요~!
    // 코드를 여기에 작성하세요.
}

{
    // 민정

    // class Exam{
    //     #kor;
    //     #eng;
    //     #math;              // private 멤버로 쓸 수 있다.
    //     static #count;

    //     static {
    //         Exam.#count = 100;
    //     }

    //     static get count() {
    //         return Exam.#count;
    //     }

    //     static set count(value) {
    //         Exam.#count = value;
    //     }

    //     static getKor(exam){
    //         return exam.#kor;
    //     }

    //     constructor(kor=0, eng=0, math=0){
    //         this.#kor = kor;
    //         this.#eng = eng;
    //         this.#math = math;

    //         Exam.#count++;
    //     }                       
    //     total(){
    //         return this.#kor+this.#eng+this.#math;
    //     }

    //     get kor(){
    //         return this.#kor;
    //     }
    //     set kor(value){
    //         this.#kor = value;
    //     }
    // }
    // let exam = new Exam(10,20,30);
    // let exam1 = new Exam(1,1,1);


    // exam.kor++;
    // console.log(exam.kor);
    // console.log(exam.total());
    // console.log(Exam.count);            
    // console.log(Exam.getKor(exam));     // 결과 11
    // console.log(Exam.count);

    // console.log("---------------------- 상속 ----------------------") 

    // class NewlecExam extends Exam{
    //     #com;

    //     constructor(kor, eng, math, com){
    //         super(kor, eng, math);
    //         this.#com = com;
    //     }

    //     total(){
    //         return super.total()+this.#com;
    //     }
    // }

    // let exam2 = new NewlecExam(10,10,10,10);
    // console.log(exam2.total());
    // console.log(typeof exam2, typeof Exam, typeof NewlecExam);
    // console.log(exam instanceof Exam, exam2 instanceof Exam);
    // console.log(exam instanceof NewlecExam, exam2 instanceof NewlecExam);
    // console.log(Object.hasOwn(exam.__proto__, 'total'), 'total' in exam);
    


	// Q. 아래 4개 콘솔에 출력되는 내용이 어떻게 될까요?? 

    console.log(exam.hasOwnProperty('total'));
    console.log(exam.__proto__.hasOwnProperty('total'));
    console.log(exam2.hasOwnProperty('total'));
    console.log(exam2.__proto__.hasOwnProperty('total'));

}

{
    // 지은
    class Exam {
    #kor;
    #eng;
    #math;
    static #count = 0;

    constructor(kor = 0, eng = 0, math = 0) {
        this.#kor = kor;
        this.#eng = eng;
        this.#math = math;
        Exam.#count++;
    }

    total() {
        return this.#kor + this.#eng + this.#math;
    }

    get kor() {
        return this.#kor;
    }

    set kor(value) {
        this.#kor = value;
    }
    }

    let exam = new Exam(10, 20, 30);

    class NewlecExam extends Exam {
    #com;
    constructor(kor, eng, math, com) {
        super(kor, eng, math);
        this.#com = com;
    }
    total() {
        return super.total() + this.#com;
    }
    }

    let exam1 = new NewlecExam(10, 10, 10, 10);

    // Q) 다음 콘솔창에 무엇이 출력될까요?

    console.log(exam1.total());
    // A1)

    console.log(typeof exam1, typeof Exam, typeof NewlecExam);
    // A2)

    console.log(exam instanceof Exam, exam1 instanceof Exam);
    // A3)

    console.log(exam instanceof NewlecExam, exam1 instanceof NewlecExam);
    // A4)

    console.log(Object.hasOwn(exam1.__proto__, "total"));
    // A5)

    console.log(Object.hasOwn(exam1, "total"));
    // A6)
}

{
    // 민아
    // 아래의 코드에서 평균을 구하는 코드를 완성해주세요.

    class Exam{
        #kor;
        #eng;
        #math;

        constructor(kor=0, eng=0, math=0){
                this.#kor = kor;
                this.#eng = eng;
                this.#math = math;
            }

        total(){
            return this.#kor+this.#eng+this.#math;
        }

        avg(){
                // 코드 작성 부분
        }
    }
    // Exam 을 상속받는 NewExam을 생성하되, com과목을 추가해주세요.
    class NewExam...........{


    }

    // NewExam의 total()과 avg()를 구해서 출력해주세요.
    // 각 과목의 값은 맘대로 설정해서 쓰세요~
}