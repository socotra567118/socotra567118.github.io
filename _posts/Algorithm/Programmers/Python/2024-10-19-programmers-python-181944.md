---
title: 프로그래머스 - 181944번 홀짝 구분하기
date: 2024-10-18 18:30:00 +0900
categories: [Algorithm, Python]
tags: [Algorithm, Python, Programmers]
---

## **문제 설명**

자연수 `n`이 입력으로 주어졌을 때 만약 `n`이 짝수이면 "`n` is even"을, 홀수이면 "`n` is odd"를 출력하는 코드를 작성해 보세요.

[181944번 홀짝 구분하기](https://school.programmers.co.kr/learn/courses/30/lessons/181944)

## **제한 사항**
- 1 ≤ `n` ≤ 1,000

## **입출력 예시**

### 예시 1

##### 입력 1

```plaintext
100
```

##### 출력 1

```plaintext
100 is even
```

### 예시 2

##### 입력 2

```plaintext
1
```

##### 출력 2

```plaintext
1 is odd
```

## **문제 해결 전략**

### 1. 접근 방법
- 임의의 숫자를 2로 나누었을 때, 0이면 짝수, 아니면 홀수이다.

## **코드 구현**

```python
a = int(input())

if a % 2 == 0:
    print(f"{a} is even")
else:
    print(f"{a} is odd")
```