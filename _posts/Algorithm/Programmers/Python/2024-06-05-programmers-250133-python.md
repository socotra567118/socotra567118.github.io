---
title: <프로그래머스> PCCE 기출문제 1번/출력 - Python
date: 2024-06-05 19:24:00 +0900
categories: [Python, Algorithm]
tags: [Python, Algorithm, Solutions]
---

## 문제 설명

<div class="output-box">
주어진 초기 코드는 변수에 데이터를 저장하고 출력하는 코드입니다. 아래와 같이 출력되도록 빈칸을 채워 코드를 완성해 주세요.
</div>

## 출력 예시

<div class="output-box">
Spring is beginning
13
310
</div>

## 문제

```python
string_msg = 
int_val = 
string_val = 

print(string_msg)
print(int_val + 10)
print(string_val + "10")
```

## 문제 풀이

1. "Spring is beginning"이 출력되어야 하므로 string_msg에 "Spring is beginning"이 대입되어야 한다.
2. int_val에 int형 10을 더해서 13이 출력되어야 하므로 int_val에는 int형 10이 대입되어야 한다.
3. string_val에 str형 "10"을 더해서 "310"이 출력되어야 하므로 string_val에는 str형 "3"이 대입되어야 한다.

## 정답

```python
string_msg = "Spring is beginning"
int_val = 10
string_val = "3"

print(string_msg)
print(int_val + 10)
print(string_val + "10")
```
