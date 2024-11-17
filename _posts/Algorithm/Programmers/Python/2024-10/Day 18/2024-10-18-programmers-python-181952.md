---
title: 프로그래머스 - 181952번 문자열 출력하기
date: 2024-10-18 03:07:00 +0900
categories: [Algorithm, Python]
tags: [Algorithm, Python, Programmers]
---

## **문제 설명**

문자열 `str`이 주어질 때, `str`을 출력하는 코드를 작성해 보세요.

[181952번 문자열 출력하기](https://school.programmers.co.kr/learn/courses/30/lessons/181952)

## **제한 사항**
- 1 ≤ `str`의 길이 ≤ 1,000,000
- `str`에는 공백이 없으며, 첫째 줄에 한 줄로만 주어집니다.

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

## **문제 해결 전략**

### 1. 주요 포인트
- Python에서는 `input()` 함수를 이용하여 `str` 자료형의 값을 입력받을 수 있다.

## 코드 구현

```python
str = input()
print(str)
```