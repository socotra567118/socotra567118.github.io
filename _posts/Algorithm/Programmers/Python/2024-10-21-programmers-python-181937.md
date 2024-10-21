---
title: 프로그래머스 - 181937번 n의 배수
date: 2024-10-21 08:54:00 +0900
categories: [Algorithm, Python]
tags: [Algorithm, Python, Programmers]
---

## **문제 설명**

정수 `num`과 `n`이 매개 변수로 주어질 때, `num`이 `n`의 배수이면 1을 return n의 배수가 아니라면 0을 return하도록 solution 함수를 완성해주세요.

[181937번 n의 배수](https://school.programmers.co.kr/learn/courses/30/lessons/181937)

## **제한 사항**
- 2 ≤ `num` ≤ 100
- 2 ≤ `n` ≤ 9

## **입출력 예시**

| num| n | result |
|:---:|:---:|:---:|
|98|2|1|
|34|3|0|

## **입출력 예 설명**

### 입출력 예 #1

98은 2의 배수이므로 1을 return합니다.

### 입출력 예 #2

32는 3의 배수가 아니므로 0을 return합니다.

## **문제 해결 전략**

### 1. 주요 포인트
- `num`을 `n`으로 나누었을 때, `n`의 배수이면 나머지가 0, 배수가 아니면 0이 아니다.

## **코드 구현**

```python
def solution(num, n):
    return 1 if num % n == 0 else 0
```