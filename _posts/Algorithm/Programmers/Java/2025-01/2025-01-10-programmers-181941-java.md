---
layout: single
title: Java - 프로그래머스 181941번 문자 리스트를 문자열로 변환하기
categories: [Algorithm]
tags: [Java, Programmers]
---

## 문제 설명
[프로그래머스 181941번 문자 리스트를 문자열로 변환하기](https://school.programmers.co.kr/learn/courses/30/lessons/181941?language=java)

문자들이 담겨있는 배열 `arr`가 주어집니다. `arr`의 원소들을 순서대로 이어 붙인 문자열을 return 하는 solution함수를 작성해 주세요.

## 제한 사항
- 1 ≤ `arr`의 길이 ≤ 200
  - `arr`의 원소는 전부 알파벳 소문자로 이루어진 길이가 1인 문자열입니다.

## 입출력 예시

### 예시 1

|       arr       |result|
|:---------------:|:---:|
| \["a","b","c"\] |"abc"|

## 코드 구현

```java
class Solution {
    public String solution(String[] arr) {
        String answer = "";
        
        for (String a : arr) {
            answer += a;
        }
        
        return answer;
    }
}
```