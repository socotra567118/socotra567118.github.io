---
title: 프로그래머스 - 181941번 문자 리스트를 문자열로 변환하기
date: 2024-10-20 05:55:00 +0900
categories: [Algorithm, Python]
tags: [Algorithm, Python, Programmers]
---

## **문제 설명**

문자들이 담겨있는 배열 `arr`가 주어집니다. `arr`의 원소들을 순서대로 이어 붙인 문자열을 return 하는 solution함수를 작성해 주세요.

[181941번 문자 리스트를 문자열로 변환하기](https://school.programmers.co.kr/learn/courses/30/lessons/181941)

## **제한 사항**
- 1 ≤ `arr`의 길이 ≤ 200
    - `arr`의 원소는 전부 알파벳 소문자로 이루어진 길이가 1인 문자열입니다.

## **입출력 예시**

### 예시 1

| arr| result |
|:---:|:---:|
|["a","b","c"]|"abc"|

## **문제 해결 전략**

### 1. 접근 방법
- 반복문을 이용하여 문자 리스트를 조회하고 `answer`에 추가한다.

## **코드 구현**

```python
def solution(arr):
    answer = ''
    
    for str in arr:
        answer += str
    
    return answer
```