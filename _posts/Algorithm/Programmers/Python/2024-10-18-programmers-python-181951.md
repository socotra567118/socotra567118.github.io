---
title: 프로그래머스 - 181951번 a와 b 출력하기
date: 2024-10-18 03:22:00 +0900
categories: [Algorithm, Python]
tags: [Algorithm, Python, Programmers]
---

## 문제 설명

정수 `a`와 `b`가 주어집니다. 각 수를 입력받아 입출력 예와 같은 형식으로 출력하는 코드를 작성해 보세요.

[181951번 a와 b 출력하기](https://school.programmers.co.kr/learn/courses/30/lessons/181951)

## 제한 사항
- -100,000 ≤ `a`, `b` ≤ 100,000

### 예시 1

##### 입력 1

```plaintext
4 5
```

##### 출력 1

```plaintext
a = 4
b = 5
```

## 문제 해결 전략

### 1. 접근 방법
- 두 정수가 공백 하나로 구분되어 입력되므로 `split()` 함수로 분리해야 한다.
- `map()` 함수를 이용하여 `a`와 `b`에 각각의 정수를 저장한다.

## 코드 구현

```python
a, b = map(int, input().strip().split(' '))
print(f"a = {a}\nb = {b}")
```