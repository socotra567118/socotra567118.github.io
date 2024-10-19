---
title: 프로그래머스 - 181947번 덧셈식 출력하기
date: 2024-10-18 18:05:00 +0900
categories: [Algorithm, Python]
tags: [Algorithm, Python, Programmers]
---

## **문제 설명**

두 정수 `a`, `b`가 주어질 때 다음과 같은 형태의 계산식을 출력하는 코드를 작성해 보세요.

```plaintext
a + b = c
```

[181947번 덧셈식 출력하기](https://school.programmers.co.kr/learn/courses/30/lessons/181947)

## **제한 사항**
- 1 ≤ `a`, `b` ≤ 100

## **입출력 예시**

### 예시 1

##### 입력 1

```plaintext
4 5
```

##### 출력 1

```plaintext
4 + 5 = 9
```

## **문제 해결 전략**

### 1. 접근 방법
- `map()` 함수를 이용하여 `a`와 `b`를 입력받는다.

## **코드 구현**

```python
a, b = map(int, input().strip().split(' '))
print(f"{a} + {b} = {a + b}")
```
