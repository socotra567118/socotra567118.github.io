---
layout: single
title: Python - 프로그래머스 181934번 조건 문자열
categories: [Algorithm]
tags: [Python, Programmers]
---

## 문제 설명
[프로그래머스 181934번 조건 문자열](https://school.programmers.co.kr/learn/courses/30/lessons/181934?language=python3)

문자열에 따라 다음과 같이 두 수의 크기를 비교하려고 합니다.

* 두 수가 `n`과 `m`이라면
  * ">", "=" : n >= m
  * "<", "=" : n <= m
  * ">", "!" : n > m
  * "<", "!" : n < m

두 문자열 `ineq`와 `eq`가 주어집니다. `ineq`는 "<"와 ">"중 하나고, `eq`는 "="와 "!"중 하나입니다. 그리고 두 정수 `n`과 `m`이 주어질 때, `n`과 `m`이 `ineq`와 `eq`의 조건에 맞으면 1을 아니면 0을 return하도록 solution 함수를 완성해주세요.

## 제한 사항
- 1 ≤ `n`, `m` ≤ 100

## 입출력 예시

### 예시 1

| ineq  | eq  | n  | m | result |
|:--:|:--:|:--:|:-:|:------:|
| "<"  | "="  | 20  | 50 |   1    |
| ">" | "!" | 41 | 78 |   0    |

### 입출력 예 설명 1

* 20 <= 50은 참이기 때문에 1을 return합니다.

### 입출력 예 설명 2

* 41 > 78은 거짓이기 때문에 0을 return합니다.

## 코드 구현

```python
def solution(ineq, eq, n, m):
    if ineq == ">" and eq == "=":
        return 1 if n >= m else 0
    elif ineq == "<" and eq == "=":
        return 1 if n <= m else 0
    elif ineq == ">" and eq == "!":
        return 1 if n > m else 0
    else:
        return 1 if n < m else 0
```