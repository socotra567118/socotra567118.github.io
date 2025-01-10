---
layout: single
title: Python - 프로그래머스 181939번 더 크게 합치기
categories: [Algorithm]
tags: [Python, Programmers]
---

## 문제 설명
[프로그래머스 181939번 더 크게 합치기](https://school.programmers.co.kr/learn/courses/30/lessons/181939?language=python3)

연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.

* 12 ⊕ 3 = 123
* 3 ⊕ 12 = 312

양의 정수 `a`와 `b`가 주어졌을 때, `a` ⊕ `b`와 `b` ⊕ `a` 중 더 큰 값을 return 하는 solution 함수를 완성해 주세요.
<br/>
단, `a` ⊕ `b`와 `b` ⊕ `a`가 같다면 `a` ⊕ `b`를 return 합니다.

## 제한 사항
- 1 ≤ `a`, `b` < 10,000

## 입출력 예시

### 예시 1

|a|b|result|
|:-------:|:---:|:---:|
|9 |91|991|
|89 |8|898|

### 입출력 예 설명 1

* `a` ⊕ `b` = 991 이고, `b` ⊕ `a` = 919 입니다. 둘 중 더 큰 값은 991 이므로 991을 return 합니다.

### 입출력 예 설명 2

* `a` ⊕ `b` = 898 이고, `b` ⊕ `a` = 889 입니다. 둘 중 더 큰 값은 898 이므로 898을 return 합니다.

## 코드 구현

```python
def solution(a, b):
    if int(f"{a}{b}") < int(f"{b}{a}"):
        return int(f"{b}{a}")
    else:
        return int(f"{a}{b}")
```