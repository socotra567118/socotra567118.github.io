---
title: Python - 숫자 자료형
date: 2024-09-18 09:29:00 +0900
categories: [Python, Syntax]
tags: [Python, Number]
---

파이썬의 숫자 자료형으로는 정수형(Integer), 실수형(Floating point numbers), 허수(Complex number), 그리고 분수(Fractions)와 소수(Decimals)가 있다.

### 정수형 Integer

파이썬에서 정수형은 수학에서와 똑같이 정수, 즉, 양의 정수, 음의 정수, 그리고 0을 말한다. C언어 등과는 다르게 파이썬에서는 저장할 수 있는 값의 상한선, 하한선이 없다. 컴퓨터의 메모리 한계를 따라간다.

```python
print(type(2024))
```

<div class="output-box">
&lt;class 'int'&gt;
</div>

### 실수형 Real number, Floating point number

파이썬에서 실수형은 수학에서와 똑같이 실수, 즉, 소수점을 찍어서 나타낼 수 있는 수를 말한다. 1.5, 원주율 pi 등이 있다.

```python
pi = 3.1415926536
print(type(1.5))
print(type(pi))
```

<div class="output-box">
&lt;class 'float'&gt;
<br/>
&lt;class 'float'&gt;
</div>

### 복소수 Complex number

파이썬은 복소수도 지원한다. 다만, 고등학교에서 배우는 것처럼 'i'를 이용하여 허수 부분을 나타내지 않고 'j'를 사용하여 허수 부분을 나타낸다.

```python
c = 3.14 + 2.73j
```

다른 방법으로는 아래와 같은 방법으로 나타낼 수 있다.

```python
c = complex(3.14, 2.73)
```

복소수의 실수 부분, 허수 부분, 켤레복소수는 아래 방법으로 구한다.

```python
c = 3.14 + 2.73j

# 실수 부분
print(c.real)

# 허수 부분
print(c.imag)

# 켤레복소수
print(c.conjugate())
```

<div class="output-box">
3.14
<br/>
2.73
<br/>
3.14-2.73j
</div>

### 숫자 연산자


