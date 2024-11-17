---
title: 프로그래머스 - 181949번 대소문자 바꿔서 출력하기
date: 2024-10-18 03:46:00 +0900
categories: [Algorithm, Python]
tags: [Algorithm, Python, Programmers]
---

## **문제 설명**

영어 알파벳으로 이루어진 문자열 `str`이 주어집니다. 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.

[181949번 대소문자 바꿔서 출력하기](https://school.programmers.co.kr/learn/courses/30/lessons/181949)

## **제한 사항**
- 1 ≤ `str`의 길이 ≤ 20
    - `str`은 알파벳으로 이루어진 문자열입니다.

## **입출력 예시**

### 예시 1

##### 입력 1

```plaintext
aBcDeFg
```

##### 출력 1

```plaintext
AbCdEfG
```

## **문제 해결 전략**

### 1. 접근 방법
- `input()` 함수를 이용하여 `str`을 입력받는다.
- 반복문을 사용하여 `str`의 알파벳이 대문자인지 소문자인지 판별한다.
- 대문자이면 소문자로, 소문자이면 대문자로 변환 후, `result` 변수에 넣고 마지막에 `result` 변수를 출력한다.

### 2. 주요 포인트
- `isupper()`, `islower()` 함수를 이용하여 대문자인지, 소문자인지 판단할 수 있다.
- `upper()`, `lower()` 함수를 이용하여 대문자를 소문자로, 소문자를 대문자로 바꿀 수 있다.

## **코드 구현**

```python
str = input()
result = ""
for char in str:
    if char.isupper():
        result += char.lower()
    else:
        result += char.upper()
print(result)
```

### 개선할 점
- 파이썬에는 문자열 전체의 대소문자를 반대로 바꿔주는 `swapcase()` 함수도 있다.

```python
print(input().swapcase())
```