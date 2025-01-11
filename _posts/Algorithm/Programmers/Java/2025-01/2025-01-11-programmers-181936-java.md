---
layout: single
title: Java - 프로그래머스 181936번 공배수
categories: [Algorithm]
tags: [Java, Programmers]
---

## 문제 설명
[프로그래머스 181936번 공배수](https://school.programmers.co.kr/learn/courses/30/lessons/181936?language=java)

정수 `number`와 `n`, `m`이 주어집니다. `number`가 `n`의 배수이면서 `m`의 배수이면 1을 아니라면 0을 return하도록 solution 함수를 완성해주세요.

## 제한 사항
- 10 ≤ `number` ≤ 100
- 2 ≤ `n`, `m` < 10

## 입출력 예시

### 예시 1

| num  | n  | m | result |
|:--:|:--:|:-:|:------:|
| 60  | 2  | 3 |   1    |
| 55 | 10 | 5 |   0    |

### 입출력 예 설명 1

* 60은 2의 배수이면서 3의 배수이기 때문에 1을 return합니다.

### 입출력 예 설명 2

* 55는 5의 배수이지만 10의 배수가 아니기 때문에 0을 return합니다.

## 코드 구현

```java
class Solution {
    public int solution(int number, int n, int m) {
        return number % n == 0 && number % m == 0 ? 1 : 0;
    }
}
```