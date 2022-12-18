package Chapter2;

public class Chapter2_3 {
    public static void Chapter2_3_1() {
        // 자동 타입 변환
        // 자동으로 타입 변환이 일어나는 것을 의미
        // 자동 타입 변환은 값의 허용 범위가 작은 타입이 허용 범위가 큰 타입으로 저정될 때 발생

        byte byteValue = 10;
        int intValue = byteValue;   // 자동 타입 변환

        long longValue = 50000000000L;
        float floatValue = longValue;       // 5.0E9f로 저장
        double doubleValue = longValue;     // 5.0E9로 저장

        char charValue = 'A';
        int intValue2 = charValue;       // 65가 저장
    }

    public static void Chapter2_3_2() {
        // 강제 타입 변환
        // 큰 허용 범위 타입을 작은 허용 범위 타입으로 강제로 나눠서 저장하는 것

        int intValue = 65;
        byte byteValue = (byte) intValue;

        char charValue = (char) intValue;
        System.out.println(charValue);

        // 실수 타입은 정수 타입으로 자동 변환되지 않기 때문에 강제 타입 변환을 사용해야 한다.
        // 이 경우 소수점 이하는 버려지고, 정수 부분만 저장된다.
        double doubleValue = 3.14;
        int intValue2 = (int) doubleValue;
    }
}
