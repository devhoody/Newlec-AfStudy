console.log('7월 31일 문제---------->');
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
console.log('8월 1일 문제---------->');
{
    // 1. class 를 사용해서 Exam 만들고 -> 국어, 영어, 수학, 컴퓨터 점수 초기화
    // 2. getter 와 setter 함수를 사용해서 은닉화 하기
    // 3. 수학성적과 컴퓨터 성적의 합이 100, 평균이 50이 나오게 객체 생성하기
    // 4. getter 와, setter 를 활용해서 수학과 컴퓨터의 성적이 제대로 들어갔는지 확인해보기
    class Exam{
        #kor;
        #eng;
        #math;
        #com;
        constructor(kor = 0, eng = 0, math = 0, com = 0) {
            this.#kor = kor;
            this.#eng = eng;
            this.#math = math;
            this.#com = com;
        };

        total() {
            return this.#kor + this.#eng + this.#math + this.#com;
        };

        avg() {
            return this.total() / 2;
        };

        get kor() {
            return this.#kor
        };

        set kor(value) {
            this.#kor = value
        }

        get eng() {
            return this.#eng
        };

        set eng(value) {
            this.#eng = value
        }

        get math() {
            return this.#math
        };

        set math(value) {
            this.#math = value
        }

        get com() {
            return this.#com
        };

        set com(value) {
            this.#com = value
        }

    }

    let exam = new Exam(0, 0, 30, 70);
    
    console.log("kor:", exam.kor);
    console.log("eng:", exam.eng);
    console.log("math:", exam.math);
    console.log("com:", exam.com);
    
    console.log(exam.total());
    console.log(exam.avg());
}

