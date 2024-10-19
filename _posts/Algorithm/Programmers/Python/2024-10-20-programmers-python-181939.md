---
title: 프로그래머스 - 181939번 더 크게 합치기
date: 2024-10-20 06:06:00 +0900
categories: [Algorithm, Python]
tags: [Algorithm, Python, Programmers]
---

## **문제 설명**

연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.

* 12 ⊕ 3 = 123
* 3 ⊕ 12 = 312

양의 정수 `a`와 `b`가 주어졌을 때, `a` ⊕ `b`와 `b` ⊕ `a` 중 더 큰 값을 return 하는 solution 함수를 완성해 주세요.
단, `a` ⊕ `b`와 `b` ⊕ `a`가 같다면 `a` ⊕ `b`를 return 합니다.

[181939번 더 크게 합치기](https://school.programmers.co.kr/learn/courses/30/lessons/181939)

## **제한 사항**
- 1 ≤ `a`, `b` < 10,000

## **입출력 예시**

### 예시 1

##### 입력 1

| a| b | result |
|:---:|:---:|:---:|
|9|91|991|
|89|8|898|

## **입출력 예 설명**

### 입출력 예 #1

`a` ⊕ `b` = 991 이고, `b` ⊕ `a` = 919 입니다. 둘 중 더 큰 값은 991 이므로 991을 return 합니다.

### 입출력 예 #2

`a` ⊕ `b` = 898 이고, `b` ⊕ `a` = 889 입니다. 둘 중 더 큰 값은 898 이므로 898을 return 합니다.

## **문제 해결 전략**

### 1. 접근 방법
- 두 수를 붙이기 위해서 `a`와 `b`를 `str`로 변환하여 붙인다.

## **코드 구현**

```python
def solution(a, b):
    if int(f"{a}{b}") < int(f"{b}{a}"):
        return int(f"{b}{a}")
    else:
        return int(f"{a}{b}")
```

### 개선할 점
- 코드 최적화 방안이나 다른 접근 방식이 있다면 적습니다.

```python
def solution(a, b):
    return max(int(f"{a}{b}"),int(f"{b}{a}"))
```