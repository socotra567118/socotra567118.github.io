---
title: 파이썬 자료형 알아보기
date: 2023-02-14 21:32:00 +0900
categories: [Python, Python Tutorial]
tags: [Python]
---

파이썬 자료형에는 크게 숫자와 문자열, 불(Bool)이 있다.

### 1. 숫자

숫자 자료형은 세부적으로 정수를 나타내는 int 자료형과 실수를 나타내는 float 자료형, 복소수 자료형이 있다. 공식 문서를 보니 이 세 자료형을 제외하고 Decimal 자료형과 Fraction 자료형 등을 지원한다.

##### 1) int

**int** 자료형은 1, 2, 3, 58과 같은 정수를 나타낸다. 

```python
print(type(0))
# <class 'int'>
```

##### 2) float

**float** 자료형은 3.14, 0.2, 15.2와 같은 실수를 나타낸다.

```python
print(type(3.14))
# <class 'float'>
```

##### 3) 복소수

복소수 자료형은 수학 시간에 배운 것처럼 "1+2j, -2-5j"와 같은 복소수를 나타낸다. 복소수는 **complex** 생성자에 실수 부분과 허수 부분을 전달하여 생성한다.

**complex** 생성자에 전달되는 실수값과 허수값은 **int** 자료형과 **float** 자료형을 전달해야 한다.

```python
print(complex(2, 5))
# (2+5j)

print(type(complex(2, 5)))
# <class 'complex'>
```

### 2. 문자열

### 3. 불(Bool)

**불(Bool)** 자료형은 "예/아니오"와 같이 표현될 수 있는 형태의 자료형을 말한다. 나중에 **if 문, 반복문** 등에서 사용되니 알고 있어야 한다.

```python
print(10 > 5)           # True
print(type(True))       # <class 'bool'>
```
