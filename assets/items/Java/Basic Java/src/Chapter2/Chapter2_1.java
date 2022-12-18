package Chapter2;

public class Chapter2_1 {
    public static void Chapter2_1_1() {
        // 변수: 값을 저장할 수 있는 메모리의 특정 번지에 붙이는 이름
        // 변수 선언
        // 변수를 사용하기 위해 변수에 어떤 타입의 데이터를 저장할 것인지 그리고 변수 이름이 무엇인지를 결정해야한다.

        int age;        // 정수를 저장할 수 있는 age 변수 선언
        double value;   // 실수를 저장할 수 있는 value 변수 선언

        // 변수 이름은 명명 규칙을 따라야 한다.
        // 1. 첫 번째 글자는 문자이거나 "$", "_"이어야 하고 숫자로 시작할 수 없다.
        // 2. 영어 대소문자를 구별한다.
        // 3. 첫 문자는 영어 소문자로 시작하고, 다른 단어가 붙을 경우 첫 문자를 대문자로 한다. (관례)
        // 4. 길이 제한은 없다.
        // 5. 자바 예약어는 사용할 수 없다.

        // 예약어
        // 이미 해당 프로그래밍 언어에서 의미를 갖고 사용되고 있는 단어
        //
        // 기본 타입
        // boolean, byte, char, short, int, long, float, double
        // 접근 제한자
        // private, protected, public
        // 클래스와 관련된 것
        // class, abstract, interface, extends, implements, enum
        // 객체와 관련되 ㄴ것
        // new, instanceof, this, super, null
        // 메소드와 관련된 것
        // void, return
        // 제어문과 관련된 것
        // if, else, switch, case, default, for, do, while, break, continue
        // 논리값
        // true, false
        // 예외 처리와 관련된 것
        // try, catch, finally, throw, throws
        // 기타
        // package, import, synchronized, final, static
    }

    public static void Chapter2_1_2() {
        // 값 저장
        // 변수에 값을 저장할 때에는 대입 연산자(=)를 사용한다.
        int score;      // 변수 선언
        score = 90;     // 값 저장

        // 변수 초기화: 변수에 최초로 값이 저장될 때 변수가 생성 되는 것
        // 초기값: 이때 사용된 값
        // 초기값은 변수를 선언함과 동시에 제공할 수 있다.

        // 초기화되지 않은 변수는 아직 메모리 번지 정보를 가지고 있지 않으므로 변수를 통해 메머리 값을 읽을 수 없다.
    }

    public static void Chapter2_1_3() {
        // 변수 사용
        int hour = 3;
        int minute = 5;

        System.out.println(hour + "시간 " + minute + "분");
    }

    public static void Chapter2_1_4() {
        // 변수 사용 범위
        // 로컬 변수
        // 메소드 블록 내에서 선언된 변수
        // 메소드 블록 내부에서만 사용되고 메소드 실행이 끝나면 메모리에서 자동으로 사라진다.

        // 변수를 선언할 때에는 다음과 같은 사항을 주의해야 한다.
        // 변수가 어떤 범위에서 사용될 것인지를 생각하고, 선언 위치를 결정해야 한다.
        // 메소드 블록 전체에서 사용하고 싶다면 메소드 블록 첫머리에 선언한다.
        // 특정 블록 내부에서만 사용된다면 해당 블록 내에 선언한다.
    }
}
