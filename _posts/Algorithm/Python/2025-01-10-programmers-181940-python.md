---
layout: single
title: Python - 프로그래머스 181940번 문자열 곱하기
categories: [Algorithm]
tags: [Python, Programmers]
---

## 문제 설명
[프로그래머스 181940번 문자열 곱하기](https://school.programmers.co.kr/learn/courses/30/lessons/181940?language=python3)

문자열 `my_string`과 정수 `k`가 주어질 때, `my_string`을 `k`번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.

## 제한 사항
- 1 ≤ `my_string`의 길이 ≤ 100
- `my_string`은 영소문자로만 이루어져 있습니다.
- 1 ≤ `k` ≤ 100

## 입출력 예시

### 예시 1

|my_string|k|result|
|:-------:|:---:|:---:|
|"string" |3|"stringstringstring"|
|"love" |10|"lovelovelovelovelovelovelovelovelovelove"|

### 입출력 예 설명 1

* 예제 1번의 `my_string`은 "string"이고 이를 3번 반복한 문자열은 "stringstringstring"이므로 이를 return 합니다.
### 입출력 예 설명 2

* 예제 2번의 `my_string`은 "love"이고 이를 10번 반복한 문자열은 "lovelovelovelovelovelovelovelovelovelove"이므로 이를 return 합니다.

## 코드 구현

```python
def solution(my_string, k):
    return my_string * k
```