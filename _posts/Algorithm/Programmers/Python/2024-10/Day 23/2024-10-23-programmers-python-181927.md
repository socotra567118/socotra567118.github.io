---
title: 프로그래머스 - 181927번 마지막 두 원소
date: 2024-10-23 09:35:00 +0900
categories: [Algorithm, Python]
tags: [Algorithm, Python, Programmers]
---

## **문제 설명**

정수 리스트 `num_list`가 주어질 때, 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을 마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여 return하도록 solution 함수를 완성해주세요.

[마지막 두 원소](https://school.programmers.co.kr/learn/courses/30/lessons/181927)

## **제한 사항**
- 2 ≤ `num_list`의 길이 ≤ 10
- 1 ≤ `num_list`의 원소 ≤ 9

## **입출력 예시**

### 예시 1

| 입력 1| 입력 2 |
|:---:|:---:|
|[2, 1, 6]|[2, 1, 6, 5]|
|[5, 2, 1, 7, 5]|[5, 2, 1, 7, 5, 10]|

## **입출력 예 설명**

### 입출력 예 #1

마지막 원소인 6이 그전 원소인 1보다 크기 때문에 6 - 1인 5를 추가해 return합니다.

### 입출력 예 #2

마지막 원소인 5가 그전 원소인 7보다 크지 않기 때문에 5의 두 배인 10을 추가해 return합니다.

## **코드 구현**

```python
def solution(num_list):
    last = num_list[-1]
    last_2 = num_list[-2]
    
    if last > last_2:
        num_list.append(last - last_2)
    else:
        num_list.append(last * 2)
    
    return num_list
```