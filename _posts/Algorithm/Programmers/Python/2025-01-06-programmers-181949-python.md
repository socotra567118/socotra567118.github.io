---
layout: single
title: Python - 프로그래머스 181949번 대소문자 바꿔서 출력하기
categories: [Algorithm]
tags: [Python, Programmers]
---

## 문제 설명
[프로그래머스 181949번 대소문자 바꿔서 출력하기](https://school.programmers.co.kr/learn/courses/30/lessons/181949?language=python3)

영어 알파벳으로 이루어진 문자열 `str`이 주어집니다. 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.

## 제한 사항
- 1 ≤ `str`의 길이 ≤ 20
  - `str`은 알파벳으로 이루어진 문자열입니다.

## 입출력 예시

### 예시 1

#### 입력 1

```plaintext
aBcDeFg
```

#### 출력 1

```plaintext
AbCdEfG
```

## 코드 구현

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