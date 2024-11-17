---
title: 프로그래머스 - 181931번 등차수열의 특정한 항만 더하기
date: 2024-10-22 11:19:00 +0900
categories: [Algorithm, Python]
tags: [Algorithm, Python, Programmers]
---

## **문제 설명**

두 정수 `a`, `d`와 길이가 n인 boolean 배열 `included`가 주어집니다. 첫째항이 `a`, 공차가 `d`인 등차수열에서 `included[i]`가 i + 1항을 의미할 때, 이 등차수열의 1항부터 n항까지 `included`가 true인 항들만 더한 값을 return 하는 solution 함수를 작성해 주세요.

[181931번 등차수열의 특정한 항만 더하기](https://school.programmers.co.kr/learn/courses/30/lessons/181931)

## **제한 사항**
- 1 ≤ `a` ≤ 100
- 1 ≤ `d` ≤ 100
- 1 ≤ `included`의 길이 ≤ 100
- `included`에는 true가 적어도 하나 존재합니다.

## **입출력 예시**

### 예시 1

| a| d | included | result |
|:---:|:---:|:---:|:---:|
|3|4|&#91;true, false, false, true, true&#93;|37|
|7|1|&#91;false, false, false, true, false, false, false&#93;|10|

## **입출력 예 설명**

### 입출력 예 #1

* 예제 1번은 `a`와 `d`가 각각 3, 4이고 `included`의 길이가 5입니다. 이를 표로 나타내면 다음과 같습니다.

||1항|2항|3항|4항|5항|
|---|---|---|---|---|---|
|등차수열|3|7|11|15|19|
|included|true|false|false|true|true|

따라서 true에 해당하는 1항, 4항, 5항을 더한 3 + 15 + 19 = 37을 return 합니다.

* 예제 2번은 a와 d가 각각 7, 1이고 included의 길이가 7입니다. 이를 표로 나타내면 다음과 같습니다.

||1항|2항|3항|4항|5항|6항|7항|
|---|---|---|---|---|---|---|---|
|등차수열|7|8|9|10|11|12|13|
|included|false|false|false|true|false|false|false|

따라서 4항만 true이므로 10을 return 합니다.

## **코드 구현**

```python
def solution(a, d, included):
    answer = 0
    
    for i in range(len(included)):
        if included[i]:
            answer += a + d * i
    
    return answer
```