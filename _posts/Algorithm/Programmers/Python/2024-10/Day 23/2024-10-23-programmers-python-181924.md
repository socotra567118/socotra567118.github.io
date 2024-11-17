---
title: 프로그래머스 - 181924번 수열과 구간 쿼리 3
date: 2024-10-23 09:58:00 +0900
categories: [Algorithm, Python]
tags: [Algorithm, Python, Programmers]
---

## **문제 설명**

정수 배열 `arr`와 2차원 정수 배열 `queries`이 주어집니다. `queries`의 원소는 각각 하나의 `query`를 나타내며, `[i, j]` 꼴입니다.

각 `query`마다 순서대로 `arr[i]`의 값과 `arr[j]`의 값을 서로 바꿉니다.

위 규칙에 따라 `queries`를 처리한 이후의 `arr`를 return 하는 solution 함수를 완성해 주세요.

[181924번 수열과 구간 쿼리 3](https://school.programmers.co.kr/learn/courses/30/lessons/181924)

## **제한 사항**
- 1 ≤ `arr`의 길이 ≤ 1,000
    - 0 ≤ `arr`의 원소 ≤ 1,000,000
- 1 ≤ `queries`의 길이 ≤ 1,000
    - 0 ≤ `i` < `j` < `arr`의 길이

## **입출력 예시**

### 예시 1

| arr| queries | result |
|:---:|:---:|:---:|
|[0, 1, 2, 3, 4]|[[0, 3],[1, 2],[1, 4]]|[3, 4, 1, 0, 2]|

## **입출력 예 설명**

### 입출력 예 #1

* 각 쿼리에 따라 arr가 다음과 같이 변합니다.

| arr |
|:---:|
|[0, 1, 2, 3, 4]|
|[3, 1, 2, 0, 4]|
|[3, 2, 1, 0, 4]|
|[3, 4, 1, 0, 2]|

* 따라서 [3, 4, 1, 0, 2]를 return 합니다.

## **코드 구현**

```python
def solution(arr, queries):
    
    for query in queries:
        i = arr[query[0]]
        j = arr[query[1]]
        
        arr[query[0]] = j
        arr[query[1]] = i
    
    return arr
```

### 개선할 점
- 파이썬은 그냥 바꿀 수 있다.

```python
def solution(arr, queries):
    for a,b in queries:
        arr[a],arr[b]=arr[b],arr[a]
    return arr
```