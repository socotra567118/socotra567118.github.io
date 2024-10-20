---
title: 프로그래머스 - 181942번 문자열 섞기
date: 2024-10-20 05:48:00 +0900
categories: [Algorithm, Python]
tags: [Algorithm, Python, Programmers]
---

## **문제 설명**

길이가 같은 두 문자열 `str1`과 `str2`가 주어집니다.
두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.

[181942번 문자열 섞기](https://school.programmers.co.kr/learn/courses/30/lessons/181942)

## **제한 사항**
- 1 ≤ `str1`의 길이 = `str2`의 길이 ≤ 10
    - `str1`과 `str2`는 알파벳 소문자로 이루어진 문자열입니다.

## **입출력 예시**

### 예시 1

| str1| str2 | result |
|:---:|:---:|:---:|
|"aaaaa"|"bbbbb"|"ababababab"|

## **문제 해결 전략**

### 1. 접근 방법
- 반복문을 이용하여 문자열의 각 인덱스에 해당하는 값을 조회하고 `answer`에 추가한다.

## **코드 구현**

```python
def solution(str1, str2):
    answer = ''
    
    for i in range(len(str1)):
        answer += str1[i]
        answer += str2[i]
    
    return answer
```

### 개선할 점
- 반복문의 길이를 줄일 수 있다.

```python
for i in range(len(str1)):
    answer += str1[i] + str2[i]
```