---
title: 프로그래머스 - 181923번 수열과 구간 쿼리 2
date: 2024-10-23 10:05:00 +0900
categories: [Algorithm, Python]
tags: [Algorithm, Python, Programmers]
---

## **문제 설명**

정수 배열 `arr`와 2차원 정수 배열 `queries`이 주어집니다. `queries`의 원소는 각각 하나의 `query`를 나타내며, `[s, e, k]` 꼴입니다.

각 `query`마다 순서대로 `s` ≤ `i` ≤ `e`인 모든 `i`에 대해` k`보다 크면서 가장 작은 `arr[i]`를 찾습니다.

각 쿼리의 순서에 맞게 답을 저장한 배열을 반환하는 solution 함수를 완성해 주세요.
단, 특정 쿼리의 답이 존재하지 않으면 -1을 저장합니다.

[181923번 수열과 구간 쿼리 2](https://school.programmers.co.kr/learn/courses/30/lessons/181923)

## **제한 사항**
- 1 ≤ `arr`의 길이 ≤ 1,000
    - 0 ≤ `arr`의 원소 ≤ 1,000,000
- 1 ≤ `queries`의 길이 ≤ 1,000
    - 0 ≤ `s` ≤ `e` < `arr`의 길이
    - 0 ≤ `k` ≤ 1,000,000

## **입출력 예시**

### 예시 1

| arr| queries | result |
|:---:|:---:|:---:|
|[0, 1, 2, 4, 3]|[[0, 4, 2],[0, 3, 2],[0, 2, 2]]|[3, 4, -1]|

## **입출력 예 설명**

### 입출력 예 #1

* 첫 번째 쿼리의 범위에는 0, 1, 2, 4, 3이 있으며 이 중 2보다 크면서 가장 작은 값은 3입니다.
* 두 번째 쿼리의 범위에는 0, 1, 2, 4가 있으며 이 중 2보다 크면서 가장 작은 값은 4입니다.
* 세 번째 쿼리의 범위에는 0, 1, 2가 있으며 여기에는 2보다 큰 값이 없습니다.
* 따라서 [3, 4, -1]을 return 합니다.

## **문제 해결 전략**

### 1. 접근 방법
- 반복문을 여러 번 사용해야 한다.

## **코드 구현**

```python
def solution(arr, queries):
    
    answer = []
    
    for query in queries:
        filtered_arr_1 = arr[query[0]: query[1] + 1]
        filtered_arr_2 = []
        
        for filtered in filtered_arr_1:
            if filtered > query[2]:
                filtered_arr_2.append(filtered)
        
        answer.append(-1) if len(filtered_arr_2) == 0 else answer.append(min(filtered_arr_2)) 
    
    return answer
```

### 개선할 점
- 반복문을 여러 번 사용하지 않고 할 수 있는 방법을 찾으면 좋겠다.