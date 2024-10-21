---
title: 프로그래머스 - 181933번 flag에 따라 다른 값 변환하기
date: 2024-10-21 09:43:00 +0900
categories: [Algorithm, Python]
tags: [Algorithm, Python, Programmers]
---

## **문제 설명**

두 정수 `a`, `b`와 boolean 변수 `flag`가 매개변수로 주어질 때, `flag`가 true면 `a` + `b`를 false면 `a` - `b`를 return 하는 solution 함수를 작성해 주세요.

[181933번 flag에 따라 다른 값 변환하기](https://school.programmers.co.kr/learn/courses/30/lessons/181933)

## **제한 사항**
- -1,000 ≤ `a`, `b` ≤ 1,000

## **입출력 예시**

### 예시 1

##### 입력 1

```plaintext
HelloWorld!
```

##### 출력 1

```plaintext
HelloWorld!
```

| a| b | flag | result |
|:---:|:---:|:---:|:---:|
|-4|7|true|3|
|-4|7|false|-11|

## **입출력 예 설명**

### 입출력 예 #1

예제 1번에서 `flag`가 true이므로 `a` + `b` = (-4) + 7 = 3을 return 합니다.

### 입출력 예 #1

예제 2번에서 `flag`가 false이므로 `a` - `b` = (-4) - 7 = -11을 return 합니다.

## **코드 구현**

```python
def solution(a, b, flag):
    return a + b if flag else a - b
```