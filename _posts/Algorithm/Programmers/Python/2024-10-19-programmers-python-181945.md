---
title: 프로그래머스 - 181945번 문자열 돌리기
date: 2024-10-18 18:19:00 +0900
categories: [Algorithm, Python]
tags: [Algorithm, Python, Programmers]
---

## **문제 설명**

문자열 `str`이 주어집니다. 문자열을 시계방향으로 90도 돌려서 아래 입출력 예와 같이 출력하는 코드를 작성해 보세요.

[181945번 문자열 돌리기](https://school.programmers.co.kr/learn/courses/30/lessons/181945)

## **제한 사항**
- 1 ≤ `str`의 길이 ≤ 10

## **입출력 예시**

### 예시 1

##### 입력 1

```plaintext
abcde
```

##### 출력 1

```plaintext
a
b
c
d
e
```

## **문제 해결 전략**

### 1. 주요 포인트
- 파이썬에서 str 변수를 반복문에 사용하면 한 글자씩 반환된다.

## **코드 구현**

```python
str = input()
for char in str:
    print(char)
```
