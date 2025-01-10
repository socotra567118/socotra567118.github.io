---
layout: single
title: Java - 프로그래머스 181942번 문자열 섞기
categories: [Algorithm]
tags: [Java, Programmers]
---

## 문제 설명
[프로그래머스 181942번 문자열 섞기](https://school.programmers.co.kr/learn/courses/30/lessons/181942?language=java)

길이가 같은 두 문자열 `str1`과 `str2`가 주어집니다.
<br/>
두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.

## 제한 사항
- 1 ≤ `str1`의 길이 = `str2`의 길이 ≤ 10
  - `str1`과 `str2`는 알파벳 소문자로 이루어진 문자열입니다.

## 입출력 예시

### 예시 1

|str1|str2|result|
|:---:|:---:|:---:|
|"aaaaa"|"bbbbb"|"ababababab"|

## 코드 구현

```java
class Solution {
    public String solution(String str1, String str2) {
        String answer = "";
        
        for (int i = 0; i < str1.length(); i += 1) {
            answer += str1.substring(i, i + 1);
            answer += str2.substring(i, i + 1);
        }
        
        return answer;
    }
}
```

### 배운 점

* `String`의 `charAt()` 메서드를 이용해 `Python`에서 `str` 값에 인덱스로 접근하는 것처럼 구현할 수 있다.

### 개선할 점

* `String`의 `charAt()` 메서드를 이용하면 더 간단하게 나타낼 수 있다.

```java
class Solution {
    public String solution(String str1, String str2) {
        String answer = "";
        
        for (int i = 0; i < str1.length(); i += 1) {
            answer += str1.charAt(i);
            answer += str2.charAt(i);
        }
        
        return answer;
    }
}
```