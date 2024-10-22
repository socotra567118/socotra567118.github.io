---
title: 프로그래머스 - 181932번 코드 처리하기
date: 2024-10-22 10:41:00 +0900
categories: [Algorithm, Python]
tags: [Algorithm, Python, Programmers]
---

## **문제 설명**

문자열 `code`가 주어집니다.
`code`를 앞에서부터 읽으면서 만약 문자가 "1"이면 `mode`를 바꿉니다. `mode`에 따라 `code`를 읽어가면서 문자열 `ret`을 만들어냅니다.<br/>
`mode`는 0과 1이 있으며, `idx`를 0 부터 `code의 길이 - 1` 까지 1씩 키워나가면서 `code[idx]`의 값에 따라 다음과 같이 행동합니다.

* `mode`가 0일 때
    * `code[idx]`가 "1"이 아니면 `idx`가 짝수일 때만 `ret`의 맨 뒤에 `code[idx]`를 추가합니다.
    * `code[idx]`가 "1"이면 `mode`를 0에서 1로 바꿉니다.

* `mode`가 1일 때
    * `code[idx]`가 "1"이 아니면 `idx`가 홀수일 때만 `ret`의 맨 뒤에 `code[idx]`를 추가합니다.
    * `code[idx]`가 "1"이면 `mode`를 1에서 0으로 바꿉니다.

문자열 `code`를 통해 만들어진 문자열 `ret`를 return 하는 solution 함수를 완성해 주세요.<br/>
단, 시작할 때 `mode`는 0이며, return 하려는 `ret`가 만약 빈 문자열이라면 대신 "EMPTY"를 return 합니다.

[181932번 코드 처리하기](https://school.programmers.co.kr/learn/courses/30/lessons/181932)

## **제한 사항**
- 1 ≤ `code`의 길이 ≤ 100,000
    - `code`는 알파벳 소문자 또는 "1"로 이루어진 문자열입니다.

## **입출력 예시**

### 예시 1

| code| result |
|:---:|:---:|
|"abc1abc1abc"|"acbac"|

## **입출력 예 설명**

### 입출력 예 #1

`code`의 각 인덱스 `i`에 따라 다음과 같이 `mode`와 `ret`가 변합니다.

| i| code[i] | mode | ret |
|:---:|:---:|:---:|:---:|
|0|"a"|0|"a"|
|1|"b"|0|"a"|
|2|"c"|0|"ac"|
|3|"1"|1|"ac"|
|4|"a"|1|"ac"|
|5|"b"|1|"acb"|
|6|"c"|1|"acb"|
|7|"1"|0|"acb"|
|8|"a"|0|"acba"|
|9|"b"|0|"acba"|
|10|"c"|0|"acba"|

## **문제 해결 전략**

### 1. 접근 방법
- 문제를 천천히 읽어가면서 케이스 구분을 하면 된다.

## **코드 구현**

```python
def solution(code):
    answer = ''
    mode = "0"
    
    for i in range(len(code)):
        if code[i] == "1":
            if mode == "0":
                mode = "1"
            else:
                mode = "0"
        else:
            if i % 2 == 0 and mode == "0":
                answer += code[i]
            elif i % 2 == 1 and mode == "1":
                answer += code[i]

    answer = "EMPTY" if len(answer) == 0 else answer
    
    return answer
```

### 배운 점
- 비트 연산자 `^=`를 사용할 수 있다. 두 비트가 서로 같으면 0 다르면 1이다. 따라서, `mode`가 0이면 결과는 1이되고, 1이면 같기 때문에 0이 된다.

```python
def solution(code):
    answer = ''

    mode = 0
    for i in range(len(code)):
        if code[i] == '1':
            mode ^= 1
        else:
            if i % 2 == mode:
                answer += code[i]

    return answer if answer else 'EMPTY'
```