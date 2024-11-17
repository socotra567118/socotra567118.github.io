---
title: 프로그래머스 - 181925번 수 조작하기 2
date: 2024-10-23 09:49:00 +0900
categories: [Algorithm, Python]
tags: [Algorithm, Python, Programmers]
---

## **문제 설명**

정수 배열 `numLog`가 주어집니다. 처음에 `numLog[0]`에서 부터 시작해 "w", "a", "s", "d"로 이루어진 문자열을 입력으로 받아 순서대로 다음과 같은 조작을 했다고 합시다.

* "w" : 수에 1을 더한다.
* "s" : 수에 1을 뺀다.
* "d" : 수에 10을 더한다.
* "a" : 수에 10을 뺀다.

그리고 매번 조작을 할 때마다 결괏값을 기록한 정수 배열이 `numLog`입니다. 즉, `numLog[i]`는 `numLog[0]`로부터 총 `i`번의 조작을 가한 결과가 저장되어 있습니다.

주어진 정수 배열 `numLog`에 대해 조작을 위해 입력받은 문자열을 return 하는 solution 함수를 완성해 주세요.

[181926번 수 조작하기 2](https://school.programmers.co.kr/learn/courses/30/lessons/181925)

## **제한 사항**
- 2 ≤ `numLog`의 길이 ≤ 100,000
    - -100,000 ≤ `numLog[0]` ≤ 100,000
    - 1 ≤ `i` ≤ `numLog`의 길이인 모든 `i`에 대해 `|numLog[i] - numLog[i - 1]|`의 값은 1 또는 10입니다.

## **입출력 예시**

### 예시 1

| numLog| result |
|:---:|:---:|
|[0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]|"wsdawsdassw"|

## **입출력 예 설명**

### 입출력 예 #1

result인 "wsdawsdassw"를 따라 `numLog[0]`에서부터 시작해 조작을 하면 `numLog`의 값과 순서대로 일치합니다. 따라서 "wsdawsdassw"를 return 합니다.

## **문제 해결 전략**

### 1. 접근 방법
- 인덱스 `i`의 값에서 인덱스 `i-1`의 값을 빼서 비교한다.

## **코드 구현**

```python
def solution(numLog):
    answer = ''
    
    for index in range(1, len(numLog)):
        log = numLog[index] - numLog[index - 1]
        
        if log == 1:
            answer += "w"
        elif log == -1:
            answer += "s"
        elif log == 10:
            answer += "d"
        elif log == -10:
            answer += "a"
    
    return answer
```