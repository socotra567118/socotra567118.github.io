package Chapter2;

public class Chapter2_2 {
    // 기본 타입
    // 자바가 제공하는 기본 타입은 총 8개
    // 정수 타입
    // byre, char, short, int, long
    // 실수 타입
    // float, double
    // 논리 타입
    // boolean

    public static void Chapter2_2_1() {
        // 자바에서 정수 타입은 총 5개
        // byte, 1 byte 8 bit 크기, -128 ~ 127
        // short, 2 byte 16 bit 크기, -32,768 ~ 32,768
        // char, 2 byte 16 bit 크기, 0 ~ 65535(유니코드)
        // int, 4 byte 32 bit 크기, -2,147,483,648 ~ 2,147,483,647 -2^31 ~ (2^31)-1
        // long, 8 byte 64 bit 크기, -9,223,372,036,854,775,808 ~ 9,223,372,036,854,775,807 -2^63 ~ (2^63)-1

        // long 타입임을 컴파일러에게 알려주기 위해 값 뒤에 "l"이나 "L"을 붙인다.

        // 문자열
        // 큰 따옴표로 감싼 문자

        String var1 = "A";
        String var2 = "홍길동";

        // 이스케이프 문자
        // 문자열 내부에 역슬래시(\)가 붙은 문자를 사용하여 출력을 제어
    }

    public static void Chapter2_2_2() {
        // 실수를 저장할 수 있는 타입은 총 2개
        // float, 4 byte 32 bit 크기, (1.4×10^-45) ~ (3.4×10^38), 소수점 아래 7자리 정밀도
        // double, 8 byte 64 bit 크기, (4.9×10^-324) ~ (1.8×10^308), 소수점 아래 15자리 정밀도

        // 자바는 실수 값을 기본적으로 double 타입으로 해석하기 때문에 float 타입임을 컴파일러에게 알려주어야 한다.
        // float 타입임을 컴파일러에게 알려주기 위해 값 뒤에 "f"나 "F"를 붙여야 한다.
    }

    public static void Chapter2_2_3() {
        // 자바는 참과 거짓을 의미하는 논리 값으로 true와 false를 사용한다.
    }
}
