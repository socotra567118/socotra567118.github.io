---
title: 프로그래머스 - 181929번 원소들의 곱과 합
date: 2024-10-22 11:45:00 +0900
categories: [Algorithm, Python]
tags: [Algorithm, Python, Programmers]
---

## **문제 설명**

정수가 담긴 리스트 `num_list`가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.

[181929번 원소들의 곱과 합](https://school.programmers.co.kr/learn/courses/30/lessons/181929)

## **제한 사항**
- 2 ≤ `num_list`의 길이 ≤ 10
- 1 ≤ `num_list`의 원소 ≤ 9

## **입출력 예시**

### 예시 1

| num_list| result |
|:---:|:---:|
|&#91;3, 4, 5, 2, 1&#93;|1|
|&#91;5, 7, 8, 3&#93;|0|

## **입출력 예 설명**

### 입출력 예 #1

모든 원소의 곱은 120, 합의 제곱은 225이므로 1을 return합니다.

### 입출력 예 #2

모든 원소의 곱은 840, 합의 제곱은 529이므로 0을 return합니다.

## **코드 구현**

```python
def solution(num_list):
    multiply = 1
    sum_pow = sum(num_list) ** 2
    
    for num in num_list:
        multiply *= num
    
    return 1 if multiply < sum_pow else 0
```