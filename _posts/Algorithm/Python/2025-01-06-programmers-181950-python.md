---
layout: single
title: Python - 프로그래머스 181950번 문자열 반복해서 출력하기
categories: [Algorithm]
tags: [Python, Programmers]
---

## 문제 설명
[프로그래머스 181950번 문자열 반복해서 출력하기](https://school.programmers.co.kr/learn/courses/30/lessons/181950?language=python3)

문자열 `str`과 정수 `n`이 주어집니다. `str`이 `n`번 반복된 문자열을 만들어 출력하는 코드를 작성해 보세요.

## 제한 사항
- 1 ≤ `str`의 길이 ≤ 10
- 1 ≤ `n` ≤ 5

## 입출력 예시

### 예시 1

#### 입력 1

```plaintext
string 5
```

#### 출력 1

```plaintext
stringstringstringstringstring
```

## 코드 구현

```python
str, n = input().strip().split(' ')
print(str*int(n))
```