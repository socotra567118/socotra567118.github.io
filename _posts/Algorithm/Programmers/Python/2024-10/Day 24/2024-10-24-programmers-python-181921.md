---
title: 프로그래머스 - 181921번 배열 만들기 2
date: 2024-10-24 15:21:00 +0900
categories: [Algorithm, Python]
tags: [Algorithm, Python, Programmers]
---

## **문제 설명**

정수 `l`과 `r`이 주어졌을 때, `l` 이상 `r`이하의 정수 중에서 숫자 "0"과 "5"로만 이루어진 모든 정수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

만약 그러한 정수가 없다면, -1이 담긴 배열을 return 합니다.

[181921번 배열 만들기 2](https://school.programmers.co.kr/learn/courses/30/lessons/181921)

## **제한 사항**
- 1 ≤ `l` ≤ `r` ≤ 1,000,000

## **입출력 예시**

### 예시 1

| l| r | result|
|:---:|:---:|:---:|
|5|555|[5, 50, 55, 500, 505, 550, 555]|
|10|20|[-1]|

## **입출력 예 설명**

### 입출력 예 #1

5 이상 555 이하의 0과 5로만 이루어진 정수는 작은 수부터 5, 50, 55, 500, 505, 550, 555가 있습니다. 따라서 [5, 50, 55, 500, 505, 550, 555]를 return 합니다.

### 입출력 예 #2

10 이상 20 이하이면서 0과 5로만 이루어진 정수는 없습니다. 따라서 [-1]을 return 합니다.

## **코드 구현**

```python
def solution(l, r):
    answer = []
    
    for i in range(l, r + 1):
        for idx, s in enumerate(str(i)):
            if s != "0" and s != "5":
                break
            if idx == len(str(i)) - 1:
                answer.append(i)
    
    return [-1] if len(answer) == 0 else answer
```