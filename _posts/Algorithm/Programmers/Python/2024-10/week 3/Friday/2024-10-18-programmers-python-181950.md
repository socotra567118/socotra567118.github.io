---
title: 프로그래머스 - 181950번 문자열 반복해서 출력하기
date: 2024-10-18 03:38:00 +0900
categories: [Algorithm, Python]
tags: [Algorithm, Python, Programmers]
---

## **문제 설명**

문자열 `str`과 정수 `n`이 주어집니다.<br/>
`str`이 `n`번 반복된 문자열을 만들어 출력하는 코드를 작성해 보세요.

[181950번 문자열 반복해서 출력하기](https://school.programmers.co.kr/learn/courses/30/lessons/181950)

## **제한 사항**
- 1 ≤ `str`의 길이 ≤ 10
- 1 ≤ `n` ≤ 5

## **입출력 예시**

### 예시 1

##### 입력 1

```plaintext
string 5
```

##### 출력 1

```plaintext
stringstringstringstringstring
```

## **문제 해결 전략**

### 1. 접근 방법
- `input()` 함수를 이용하여 입력받는다.
- `split()` 함수를 이용하여 공백을 기준으로 문자열을 나눈 후, 각각 `str`과 `n`에 저장한다.

### 2. 주요 포인트
- 처음 입력받은 `n`은 `str` 자료형이므로 `int` 자료형으로 변환해주어야 한다.

## **코드 구현**

```python
str, n = input().strip().split(' ')
print(str*int(n))
```