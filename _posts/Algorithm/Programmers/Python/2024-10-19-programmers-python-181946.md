---
title: 프로그래머스 - 181946번 문자열 붙여서 출력하기
date: 2024-10-19 18:13:00 +0900
categories: [Algorithm, Python]
tags: [Algorithm, Python, Programmers]
---

## **문제 설명**

두 개의 문자열 `str1`, `str2`가 공백으로 구분되어 입력으로 주어집니다. 입출력 예와 같이 `str1`과 `str2`을 이어서 출력하는 코드를 작성해 보세요.

[181946번 문자열 붙여서 출력하기](https://school.programmers.co.kr/learn/courses/30/lessons/181946)

## **제한 사항**
- 1 ≤ `str1`, `str2`의 길이 ≤ 10

## **입출력 예시**

### 예시 1

##### 입력 1

```plaintext
apple pen
```

##### 출력 1

```plaintext
applepen
```

### 예시 2

##### 입력 2

```plaintext
Hello World!
```

##### 출력 2

```plaintext
HelloWorld!
```

## **코드 구현**

```python
str1, str2 = input().strip().split(' ')
print(str1 + str2)
```