---
title: 프로그래머스 - 181928번 이어 붙인 수
date: 2024-10-22 11:53:00 +0900
categories: [Algorithm, Python]
tags: [Algorithm, Python, Programmers]
---

## **문제 설명**

정수가 담긴 리스트 `num_list`가 주어집니다. `num_list`의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.

[181928번 이어 붙인 수](https://school.programmers.co.kr/learn/courses/30/lessons/181928)

## **제한 사항**
- 2 ≤ `num_list`의 길이 ≤ 10
- 1 ≤ `num_list`의 원소 ≤ 9
- `num_list`에는 적어도 한 개씩의 짝수와 홀수가 있습니다.

## **입출력 예시**

### 예시 1

| num_list| result |
|:---:|:---:|
|&#91;3, 4, 5, 2, 1&#93;|393|
|&#91;5, 7, 8, 3&#93;|581|

## **입출력 예 설명**

### 입출력 예 #1

홀수만 이어 붙인 수는 351이고 짝수만 이어 붙인 수는 42입니다. 두 수의 합은 393입니다.

### 입출력 예 #2

홀수만 이어 붙인 수는 573이고 짝수만 이어 붙인 수는 8입니다. 두 수의 합은 581입니다.

## **코드 구현**

```python
def solution(num_list):
    even = ""
    odd = ""
    
    for num in num_list:
        if num % 2 == 0:
            even += str(num)
        else:
            odd += str(num)
    
    return int(even) + int(odd)
```