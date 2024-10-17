---
title: 프로그래머스 - 181948번 특수문자 출력하기
date: 2024-10-18 03:57:00 +0900
categories: [Algorithm, Python]
tags: [Algorithm, Python, Programmers]
---

## **문제 설명**

다음과 같이 출력하도록 코드를 작성해 주세요.

[181948번 특수문자 출력하기](https://school.programmers.co.kr/learn/courses/30/lessons/181948)

## **입출력 예시**

### 예시 1

##### 출력 1

```plaintext
!@#$%^&*(\'"<>?:;
```

## **문제 해결 전략**

### 1. 주요 포인트
- `\`와 `'`, `"` 등을 주의하며 이스케이프 문자를 넣는다.

## **코드 구현**

```python
print('!@#$%^&*(\\\'\"<>?:;')
```

### 배운 점
- 문자열 앞에 `r`을 붙이면 이스케이프 문자를 처리하지 않는 `raw string`이 된다.
- 단, `raw string`을 사용할 때는 작은따옴표를 이용하여 `str` 변수를 만들어야 한다.

```python
print(r'!@#$%^&*(\'"<>?:;')
```