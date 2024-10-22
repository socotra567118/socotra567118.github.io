---
title: 프로그래머스 - 181943번 문자열 겹쳐쓰기
date: 2024-10-19 18:52:00 +0900
categories: [Algorithm, Python]
tags: [Algorithm, Python, Programmers]
---

## **문제 설명**

문자열 `my_string`, `overwrite_string과` 정수 `s`가 주어집니다. 문자열 `my_string`의 인덱스 `s`부터 `overwrite_string`의 길이만큼을 문자열 `overwrite_string`으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

[181943번 문자열 겹쳐쓰기](https://school.programmers.co.kr/learn/courses/30/lessons/181943)

## **제한 사항**
- `my_string`와 `overwrite_string`은 숫자와 알파벳으로 이루어져 있습니다.
- 1 ≤ `overwrite_string`의 길이 ≤ `my_string`의 길이 ≤ 1,000
- 0 ≤ `s` ≤ `my_string`의 길이 - `overwrite_string`의 길이

## **입출력 예시**

### 예시 1

##### 입출력 1

| my_string| overwrite_string | s | result |
|:---:|:---:|:---:|:---:|
|"He11oWor1d"|"lloWorl"|2|"HelloWorld"|
|"Program29b8UYP"|"merS123"|7|"ProgrammerS123"|

## **입출력 예 설명**

### 입출력 예 #1

예제 1번의 `my_string`에서 인덱스 2부터 `overwrite_string`의 길이만큼에 해당하는 부분은 "11oWor1"이고 이를 "lloWorl"로 바꾼 "HelloWorld"를 return 합니다.

### 입출력 예 #2

예제 2번의 `my_string`에서 인덱스 7부터 `overwrite_string`의 길이만큼에 해당하는 부분은 "29b8UYP"이고 이를 "merS123"로 바꾼 "ProgrammerS123"를 return 합니다.

## **문제 해결 전략**

### 1. 접근 방법
- 문제를 어떻게 접근할지에 대한 설명을 적습니다.
- 사용된 알고리즘이나 자료 구조에 대한 간단한 설명을 포함합니다.

### 2. 주요 포인트
- 파이썬에서 문자열의 길이를 반환하는 함수는 `len()` 함수이다. 다른 언어에서 `.count()`와 헷갈리면 안 된다.

## **코드 구현**

```python
def solution(my_string, overwrite_string, s):
    answer = ''
    
    answer += my_string[:s]
    answer += overwrite_string
    answer += my_string[len(answer):]
    
    return answer
```